const Sequelize = require('sequelize')
const UserModel = require('./user')
const RoutineModel = require('./routine')
const bcrypt = require('bcrypt')



const db = new Sequelize((process.env.DATABASE_URL || 'postgres://localhost:5432/sport-todo'), {
    dialect: 'postgres'
  });





const User = UserModel(db, Sequelize);

User.beforeCreate(async (user, options) => {

    //dodo => %^*JU#*bhjfhUi^&#
    const hashedPassword = await bcrypt.hash(
        user.password,
        Number(process.env.SALT_ROUNDS)
    )
    user.password = hashedPassword
});

const Routine = RoutineModel(db,Sequelize)
User.hasMany(Routine)
Routine.belongsTo(User)

module.exports = {
  db,
  User,
  Routine
}

