const Joi = require("joi");

const imageSchema = Joi.object().keys({
  data: Joi.binary().required(),
  type: Joi.string().valid("jpeg", "jpg", "png").required(),
  size: Joi.number().min(0).required(),
});

const validatorImage = (req, res, next) => {
  const { image } = req.body;
  const { error } = imageSchema.validate(
    {
      image,
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
  validatorImage,
};
