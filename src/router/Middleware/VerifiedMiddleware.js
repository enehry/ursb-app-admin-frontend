export default (to, from, next) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const isVerified = userData.email_verified_at;
  if (!isVerified) {
    next({ name: "Verification" });
    return false;
  } else {
    next();
  }
};
