import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  mimes,
  numeric,
  digits,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minValue);
    defineRule("max_value", maxValue);
    defineRule("password_mismatch", confirmed);
    defineRule("mimes", mimes);
    defineRule("numeric", numeric);
    defineRule("digits", digits);

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `The ${repStr(context.field)} is required.`,
          min: `The field ${repStr(context.field)} is too short.`,
          max: `The field ${repStr(context.field)} is too long.`,
          alpha_spaces: `The ${repStr(
            context.field
          )} may only contain alphabet character.`,
          min_value: `The ${repStr(context.field)} is too low.`,
          max_value: `The ${repStr(context.field)} is too high.`,
          password_mismatch: "The passwords don't match",
          tos: "You must accept the Terms of Service",
          numeric: `The ${repStr(
            context.field
          )} may only contain numeric characters.`,
          digits: `The ${repStr(
            context.field
          )} may only contain integer characters.`,
        };

        function repStr(str) {
          return str.replace(/_/g, " ").trim();
        }

        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${repStr(context.field)} is invalid`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: true,
      validateOnModelUpdate: true,
    });
  },
};
