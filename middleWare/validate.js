const getField = (req, parsedField) => {
    let value = req.body;
    for (let field of parsedField) {
        value = value[field];
    }
    return value;
};

function parseField(field) {
    if (typeof field === "string") {
        return field.split(/\[|\]/).filter((s) => s !== "");
    } else {
        return [field];
    }
}

exports.required = (field) => {
    let parsedField = parseField(field);
    return (req, res, next) => {
        if (getField(req, parsedField)) {
            next();
        } else {
            req.session.error =(`Поле ${field} не заполнено`); // сохраняем сообщение об ошибке в сессии
            res.redirect("back");
        }
    };
};

exports.lengthAbove = (field, len) => {
    let parsedField = parseField(field);
    return (req, res, next) => {
        if (getField(req, parsedField).length > len) {
            next();
        } else {
            req.session.error = "Длина поля должна быть больше " + len; // сохраняем сообщение об ошибке в сессии
            res.redirect("back");
        }
    };
};
