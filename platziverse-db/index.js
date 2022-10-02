'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function(config) {
    const sequelize = setupDatabase(config)
    const AgentModel = setupAgentModel(config)
    const MetricModel = setupMetricModel(config)

    // Definiendo las relaciones utilizando los modelos de siquelize
    // La llave foranea se hace automáticamente
    AgentModel.hasMany(MetricModel)
    MetricModel.belongsTo(AgentModel)

    // promesa que hace un query básico
    await sequelize.authenticate()

    if (config.setup) {
        await sequelize.sync({ force: true });
    }

    const Agent = {};
    const Metric = {};

    return {
        Agent,
        Metric
    }
}