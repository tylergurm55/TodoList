module.exports = (db, Sequelize) => {
    return db.define('routine', {
        startTime: Sequelize.STRING,
        endTime: Sequelize.STRING,
        description: Sequelize.STRING,
    })
} 
