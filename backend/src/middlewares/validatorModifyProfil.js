const Joi = require("joi");

const profileSchema = Joi.object({
  firstname: Joi.string().min(3).max(100).required(),
  lastname: Joi.string().min(3).max(100).required(),
  pseudo: Joi.string().min(3).max(100).required(),
});

const validatorProfile = (req, res, next) => {
  const { firstname, lastname, pseudo } = req.body;

  const { error } = profileSchema.validate(
    {
      firstname,
      lastname,
      pseudo,
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
