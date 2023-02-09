/* eslint-disable camelcase */
const Joi = require("joi");

const messageSchema = Joi.object({
  objet: Joi.string().min(3).max(150).required(),
  userMessage: Joi.string().min(3).max(500).required(),
  user_id: Joi.number().min(1).max(100).required(),
});

const validatorUserMessage = (req, res, next) => {
  const { objet, userMessage, user_id } = req.body;

  const { error } = messageSchema.validate(
    {
      objet,
      userMessage,
      user_id,
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
  validatorUserMessage,
};
