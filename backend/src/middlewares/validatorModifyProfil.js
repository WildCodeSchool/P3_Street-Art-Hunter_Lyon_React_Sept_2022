const Joi = require("joi");

const modifySchema = Joi.object({
  pseudo: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().max(200).required(),
  id: Joi.number().max(100).required(),
});

const validatorProfile = (req, res, next) => {
  const { pseudo, email, id } = req.body;

  const { error } = modifySchema.validate(
    {
      pseudo,
      email,
      id,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
    console.warn(error.details);
  } else {
    next();
  }
};

module.exports = {
  validatorProfile,
};
