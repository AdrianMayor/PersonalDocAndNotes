const path = require('path');
const dbPath = path.join(__dirname, '../../db/users.db');
const db = require('better-sqlite3')(dbPath);
const { saveAvatar, deleteAvatar, generateError } = require('../../helpers');

const updateAvatar = async (req, res, next) => {
    try {
        if (!req.files?.avatar) {
            throw generateError('Faltan campos', 400);
        }

        // Guardamos el avatar en el directorio "uploads" y obtenemos el nombre
        // con el cuál lo hemos guardado.
        const avatarName = await saveAvatar(req.files.avatar);

        // Obtenemos el nombre del avatar del usuario (puede ser null).
        const user = db
            .prepare(`SELECT avatar FROM users WHERE id = ?`)
            .all(req.user.id)[0];

        // Si el usuario ya tiene un avatar lo eliminamos de la carpeta de subida
        // de archivos.
        if (user.avatar) await deleteAvatar(user.avatar);

        // Fecha actual en formato TimeStamp.
        const now = Date.parse(new Date()) / 1000;

        // Actualizamos el avatar.
        db.prepare(
            `UPDATE users SET avatar = ?, modifiedAt = ? WHERE id = ?`
        ).run(avatarName, now, req.user.id);

        res.send({
            status: 'ok',
            message: 'Avatar actualizado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = updateAvatar;
