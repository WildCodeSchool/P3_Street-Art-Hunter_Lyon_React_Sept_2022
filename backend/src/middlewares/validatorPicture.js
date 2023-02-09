const Joi = require("joi");

const profileSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  workId: Joi.number().max(500).required(),
  userId: Joi.number().max(100).required(),
});

const validatorPicture = (req, res, next) => {
  const { filename, workId, userId } = req.body;

  const { error } = profileSchema.validate(
    {
      filename,
      workId,
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
  validatorPicture,
};
