import ls from "@/includes/secure_storage.js";

export default (to, from, next) => {
  if (to.name !== "Login" && !ls.get("token")) {
    console.log(to.name);
    next({ name: "Login" });
    return false;
  } else {
    next();
  }
};
