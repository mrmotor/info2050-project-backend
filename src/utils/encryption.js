const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPassword = (password) => {
    const salt = bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt, function (err, hash) {
        if (err) throw err;
        return hash;
    });
}

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash, function (err, result) {
        if (err) throw err;
        return result;
    });
}

module.exports = { hashPassword, comparePassword };