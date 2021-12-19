import ls from "@/includes/secure_storage.js";

export default (to, from, next) => {
  const userData = ls.get("userData");
  const isVerified = userData.email_verified_at;
  console.log(userData);
  if (!isVerified) {
    next({ name: "Verification" });
    return false;
  } else {
    next();
  }
};
