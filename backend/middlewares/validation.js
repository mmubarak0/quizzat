function newUserValidation(req, res, next) {
    if (!req.is('application/json')) {
        return res.status(400).json({ message: ['Invalid request / not a json'], statusCode: 400 });
    }
    const { email, password, firstName, lastName } = req.body;
    const requiredFields = { email, password, firstName, lastName };
    const missingFields = [];
    const errors = [];
    for (const value of Object.values(requiredFields)) {
        if (!value) {
            missingFields.push(value);
        }
    }
    // check if any required field is missing
    if (missingFields.length) {
        for (const field of missingFields) {
            errors.push(`${field} is missing`);
        }
    }
    // check if email is valid
    if (email && !email.includes('@')) {
        errors.push('email format is invalid');
    }
    // check fields type
    for (const field in requiredFields) {
        if (typeof requiredFields[field] !== 'string') {
            errors.push(`${field} should be a string`);
        }
    }
    if (errors.length) {
        return res.status(422).json({ message: errors, statusCode: 422 });
    }
    next();
}

function userValidation(req, res, next) {
    if (!req.is('application/json')) {
      return res.status(400).json({ message: ['Invalid request / not a json'], statusCode: 400 });
    }
    const { email, password } = req.body;
    const requiredFields = { email, password };
    const missingFields = [];
    const errors = [];
    for (const value of Object.values(requiredFields)) {
        if (!value) {
            missingFields.push(value);
        }
    }
    // check if any required field is missing
    if (missingFields.length) {
        for (const field of missingFields) {
            errors.push(`${field} is missing`);
        }
    }
    // check if email is valid
    if (email && !email.includes('@')) {
        errors.push('email format is invalid');
    }
    // check fields type
    for (const field in requiredFields) {
        if (typeof requiredFields[field] !== 'string') {
            errors.push(`${field} should be a string`);
        }
    }
    if (errors.length) {
        return res.status(422).json({ message: errors, statusCode: 422 });
    }
    next();
}

module.exports = { newUserValidation, userValidation };