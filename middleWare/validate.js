exports.getField = (field, req) => {
    let value;
    field.forEach(element => {
        value = req.body[element];
    });
    return value;
};

function parseField(field) {
    if (typeof field === 'string') {
        return field.split(/\[|\]/).filter((s) => s !== '');
    } else {
        return [field];
    }
}

exports.required = (field) => {
    field = parseField(field);
    return (req, res, next) => {
        if (exports.getField(field, req)) {
            next();
        } else {
            req.session.error = "Required"; // сохраняем сообщение об ошибке в сессии
            res.redirect("back");
        }
    };
};

exports.lengthAbove = (field, len) => {
    field = parseField(field);
    return (req, res, next) => {
        if (exports.getField(field, req).length > len) {
            next();
        } else {
            req.session.error = "Length should be above " + len; // сохраняем сообщение об ошибке в сессии
            res.redirect("back");
        }
    };
};
