import { body, validationResult } from "express-validator";

export const loginSchema = [
  body("email")
    .isEmail()
    .withMessage("Por favor, ingrese un correo electrónico válido.")
    .notEmpty()
    .withMessage("Por favor, ingrese un correo electrónico."),

  body("password").notEmpty().withMessage("Por favor, ingrese una contraseña."),
];

export const signupSchema = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("Por favor, ingrese un nombre con al menos 3 caracteres.")
    .notEmpty()
    .withMessage("Por favor, ingrese un nombre."),

  body("email")
    .isEmail()
    .withMessage("Por favor, ingrese un correo electrónico válido.")
    .notEmpty()
    .withMessage("EPor favor, ingrese un correo electrónico."),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Por favor, ingrese una contraseña con al menos 8 caracteres.")
    .notEmpty()
    .withMessage("Por favor, ingrese una contraseña."),

  body("confirmPassword")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden.");
      }
      return true;
    })
    .notEmpty()
    .withMessage("Por favor, confirme su contraseña."),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  errors
    .array()
    .forEach((error) => res.status(400).json({ message: error.msg }));
};
