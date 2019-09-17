const Sequelize = require('sequelize')
const UserModel = require('./user')
const RoutineModel = require('./routine')
const bcrypt = require('bcrypt')

// connection to the database
// const db = new Sequelize({
//   database: "express_auth_db",
//   dialect: 'postgres'
// })
let db
if (process.env.NODE_ENV === 'production') {
  // If the node environment is production, connect to a remote PSQL database
   db = new Sequelize(process.env.DATABASE_URL , {
    dialect: 'postgres'
  });
}
else {
  console.log("string hi")
  // Else connect to a local instance of PSQL running on your machine
   db = new Sequelize({
    database: 'express',
    dialect: 'postgres'
  });
  
}




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

