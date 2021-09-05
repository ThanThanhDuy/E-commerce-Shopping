class Constant {
  //style them input
  themeInput = {
    colors: {
      placeholder: "white",
      text: "white",
      primary: "white",
      background: "#003489",
      accent: "#ffffff",
    },
  };
  MAX_EMAIL = 24;
  MAX_NAME = 24;
  MAX_PASSWORD = 16;
  DATE_NOW = new Date();
  REGEX_EMAIL = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
const constants = new Constant();
export default constants;