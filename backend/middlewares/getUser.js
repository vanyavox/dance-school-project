
const { Student } = require('../db/models')

async function getUser(req, res, next) {
  if (req.session?.user_id) {
    const user = await Student.findByPk(Number(req.session.user_id))
    res.locals.user = user
  }
  next()
}

module.exports = getUser
