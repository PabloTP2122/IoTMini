'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')
const defaults = require('defaults')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      // Archivos json sencillos
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // Definiendo las relaciones utilizando los modelos de siquelize
  // La llave foranea se hace automáticamente
  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  // promesa que hace un query básico
  await sequelize.authenticate()
  // Preguntar si la configuración de la db está lista en
  // el archivo setup.js (setup=true)
  // Si es true se borra la base de datos anterior y se crea una nueva

  if (config.setup) {
    // Force = true si la base de datos existe, crear una nueva
    await sequelize.sync({ force: true })
  }

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
