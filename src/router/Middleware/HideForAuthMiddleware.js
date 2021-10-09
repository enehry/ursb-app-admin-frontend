export default (to, from, next) => {
  if (localStorage.getItem("token")) {
    console.log(to.name);
    next({ name: "Home" });
    return false;
  } else {
    next();
  }
};
