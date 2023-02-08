const Joi = require("joi");

const profileSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  artistId: Joi.number().max(100).required(),
  latitude: Joi.number().max(100).required(),
  longitude: Joi.number().max(100).required(),
  validated: Joi.number().max(1).required(),
  value: Joi.number().min(3).max(1000).required(),
  userId: Joi.number().max(100).required(),
});

const validatorWork = (req, res, next) => {
  const { name, artistId, latitude, longitude, validated, value, userId } =
    req.body;

  const { error } = profileSchema.validate(
    {
      name,
      artistId,
      latitude,
      longitude,
      validated,
      value,
      userId,
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
  validatorWork,
};
