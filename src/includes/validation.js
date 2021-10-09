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

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `The field ${context.field} required.`,
          min: `The field ${context.field} is too short.`,
          max: `The field ${context.field} is too long.`,
          alpha_spaces: `The field ${context.field} may only contain alphabet character.`,
          min_value: `The field ${context.field} is too low.`,
          max_value: `The field ${context.field} is too high.`,
          password_mismatch: "The passwords don't match",
          tos: "You must accept the Terms of Service",
        };

        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
