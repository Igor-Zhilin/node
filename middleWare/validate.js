exports.getField = (field, req) => {
    let value;
    field.forEach(element => {
        value = req.body[element];
    });
    return value;
};

function parseField (field) {
    return field.split(/\[|\]/).filter((s)=>s);}

exports.required = (field) => {
field = parseField(field)
   return (req, res, next) => {
  if (getField(req, field)) {
next()
} else {
res.error("Reauired")  //готовит сообщение пользователя
res.redirect("back")
}
};
};

exports.lengthAbove = (field, len) => {
    field = parseField(field)
       return (req, res, next) => {
      if (getField(req, field).lenght>len) {
    next()
    } else {
    res.error("Reauired")  //готовит сообщение пользователя
    res.redirect("back")
    }
    };
    };