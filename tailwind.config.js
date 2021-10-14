const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
};

const textColor = {
  primary: generateColorClass("text-primary"),
  secondary: generateColorClass("text-secondary"),
  tertiary: generateColorClass("text-tertiary"),
};

const backgroundColor = {
  primary: generateColorClass("bg-primary"),
  secondary: generateColorClass("bg-secondary"),
  tertiary: generateColorClass("bg-tertiary"),
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      textColor,
      backgroundColor,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
