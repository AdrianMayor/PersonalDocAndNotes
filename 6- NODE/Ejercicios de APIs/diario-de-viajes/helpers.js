const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const { v4: uuid } = require('uuid');
/**
 * ####################
 * ## Generate Error ##
 * ####################
 */
const generateError = (message, code) => {
    const err = new Error(message);
    err.statusCode = code;
    return err;
};

/**
 * ################
 * ## Save Photo ##
 * ################
 */

const savePhoto = async (img) => {
    const uploadPath = path.join(__dirname, process.env.UPLOADS_DIR);

    try {
        await fs.access(uploadPath);
    } catch {
        await fs.mkdir(uploadPath);
    }

    const sharpImg = sharp(img.data);

    sharpImg.resize(500);

    const imgName = `${uuid()}.jpg`;

    const imgPath = path.join(uploadPath, imgName);

    await sharpImg.toFile(imgPath);

    return imgName;
};

path;

/**
 * ##################
 * ## Delete Photo ##
 * ##################
 */

module.exports = {
    generateError,
    savePhoto,
};
