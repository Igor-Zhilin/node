const getField = (req, parsedField) => {
    value = req.body[parsedField[0]][parsedField[1]];
    return value;
};

function parseField(field) {
    if (typeof field === 'string') {
        return field.split(/\[|\]/).filter((s) => s);
    }
    return [];
}


exports.required = (field) => {
    let parsedField = parseField(field);
    return (req, res, next) => {
        if (getField(req, parsedField)) {
            next();
        } else {
            res.error(`Поле ${parsedField.join(" ")} не заполнено`); // используем parsedField
            res.redirect("back");
        }
    };
};

exports.lengthAbove = (field, len) => {
    let parsedField = parseField(field); // используем parsedField
    return (req, res, next) => {
        if (getField(req, parsedField).length > len) {
            next();
        } else {
            res.error(`Поле ${parsedField.join(" ")} должно быть более 4 знаков`); // используем parsedField
            res.redirect("back");
        }
    };
};
