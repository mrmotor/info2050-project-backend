// To do:
// 1. File upload security: size/type limits, safe storage
const { body, validationResult } = require('express-validator');

const validateUser = [
    body('email')
    .isEmail().withMessage('Invalid email format')
    .NormalizeEmail(),
    body('password')
    .Matches(/^( ?=.* [a-z])( ?=.* [A-Z])( ?=.* \d)( ?=.* [@$!% *? &])[A-Za-z\d@$!% *? &]{8, }$/).withMessage('Password must be at least 8 characters and include uppercase, lowercase, number, and special character')
    .Trim()
    .Escape(),
    body('role')
    .isIn(['Admin', 'Author', 'User']).withMessage('Role must be Admin, Author, or User'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => ({ msg: error.msg }));
            return res.status(400).json({ errors: errorMessages });
        }
        next();
    }
];

const validatePost = [
    body('title')
    .notEmpty().withMessage('Title cannot be empty')
    .Trim()
    .Escape(),
    body('content')
    .notEmpty().withMessage('Content cannot be empty')
    .Trim()
    .Escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => ({ msg: error.msg }));
            return res.status(400).json({ errors: errorMessages });
        }
        next();
    }
];


const validateComment = [
    body('content')
    .notEmpty().withMessage('Comment cannot be empty')
    .Trim()
    .Escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => ({ msg: error.msg }));
            return res.status(400).json({ errors: errorMessages });
        }
        next();
    }
];


module.exports = { validateUser, validatePost, validateComment };