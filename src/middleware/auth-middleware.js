const { auth } = require("../firebase/firebase");

async function authMiddleware(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const bearerToken = req.headers.authorization.substr(7);

    try {
      const userClaims = await auth.verfyIdToken(bearerToken);
      const { email, uid } = userClaims;
      console.log(userClaims);
      req.user = {
        email: email,
        uid: uid,
      };
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(401).send({
      data: null,
      error: "Unauthorized",
    });
  }
}

module.exports = {
  authMiddleware: authMiddleware,
};
