import ls from "@/includes/secure_storage.js";
export default (to, from, next) => {
  if (ls.get("token")) {
    console.log(to.name);
    next({ name: "Home" });
    return false;
  } else {
    next();
  }
};
