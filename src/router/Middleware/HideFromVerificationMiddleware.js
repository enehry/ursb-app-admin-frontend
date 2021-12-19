import ls from "@/includes/secure_storage.js";

export default (to, from, next) => {
  const userData = ls.get("userData");
  const isVerified = userData.email_verified_at;
  if (isVerified) {
    next({ name: "Home" });
    return false;
  } else {
    next();
  }
};
