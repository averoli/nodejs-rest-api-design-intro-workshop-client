const db = require("../models");
const { logger } = require("../config/config");
const { singUpWithEmailAndPassword } = require("../firebase/firebase");

async function signUp(req, res, next) {
  const { uid, email } = req.user;

  try {
    const user = await db.User.findOne({ email: email });

    if (user) {
      return res.sendStatus(200);
    }

    const newUser = await db.Uer.create({
      _id: uid,
      email: email,
    });

    logger.debug(newUser);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp: signUp,
};
