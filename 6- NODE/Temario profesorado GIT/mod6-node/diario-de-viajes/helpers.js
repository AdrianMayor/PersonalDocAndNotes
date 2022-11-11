const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const sgMail = require('@sendgrid/mail');
const { v4: uuid } = require('uuid');

// Asignamos el API Key a Sendgrid.
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * ####################
 * ## Generate Error ##
 * ####################
 */

const generateError = (message, status) => {
    const err = new Error(message);
    err.statusCode = status;
    return err;
};

/**
 * ################
 * ## Save Photo ##
 * ################
 */

const savePhoto = async (photo) => {
    const uploadsPath = path.join(__dirname, process.env.UPLOADS_DIR);

    try {
        await fs.access(uploadsPath);
    } catch {
        await fs.mkdir(uploadsPath);
    }

    const sharpPhoto = sharp(photo.data);

    sharpPhoto.resize(500);

    const photoName = `${uuid()}.jpg`;

    const photoPath = path.join(uploadsPath, photoName);

    await sharpPhoto.toFile(photoPath);

    return photoName;
};

/**
 * ##################
 * ## Delete Photo ##
 * ##################
 */

const deletePhoto = async (photoName) => {
    try {
        const photoPath = path.join(
            __dirname,
            process.env.UPLOADS_DIR,
            photoName
        );

        try {
            await fs.access(photoPath);
        } catch {
            return false;
        }

        await fs.unlink(photoPath);

        return true;
    } catch {
        throw generateError('Error al eliminar la imagen del servidor');
    }
};

/**
 * #################
 * ## Verify Mail ##
 * #################
 */

const verifyEmail = async (email, registrationCode) => {
    // Asunto del email que enviaremos al usuario.
    const subject = 'Activa tu usuario en Diario de Viajes';

    // Mensaje que enviaremos al email del usuario.
    const emailBody = `
        Te acabas de registrar en Diario de Viajes.
        Pulsa este link para verificar tu cuenta: http://localhost:${process.env.PORT}/users/validate/${registrationCode}
    `;

    try {
        // Preparamos el mensaje.
        const msg = {
            to: email,
            from: process.env.SENDGRID_FROM,
            subject,
            text: emailBody,
            html: `
                <div>
                    <h1>${subject}</h1>
                    <p>${emailBody}</p>
                </div>
            `,
        };

        // Enviamos el mensaje.
        await sgMail.send(msg);
    } catch {
        throw generateError('Hubo un problema al enviar el email');
    }
};

module.exports = {
    generateError,
    savePhoto,
    deletePhoto,
    verifyEmail,
};
