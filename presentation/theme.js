// example theme.js
import theme from "mdx-deck/themes";

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: "Roboto, sans-serif",
  // custom colors
  colors: {
    text: "#f0f",
    background: "black",
    link: "#0ff"
  }
};
