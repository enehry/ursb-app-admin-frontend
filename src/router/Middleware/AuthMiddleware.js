export default (to, from, next) => {
  if (to.name !== "Login" && !localStorage.getItem("token")) {
    console.log(to.name);
    next({ name: "Login" });
    return false;
  } else {
    next();
  }
};
