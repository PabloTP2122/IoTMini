'use strict'
// Definiendo modelo utilizando sequelize
const Sequalize = require('sequelize')
const setupDatabase = require('../lib/db')
// Se recibe el objeto configuración para obtener una instancia
// de la base de datos utilizando la función creada
module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  // Modelo de la base de datos se define con .define
  // va a crear la tabla agente en la base de datos
  return sequelize.define('metric', {
    type: {
      type: Sequalize.STRING,
      allowNull: false
    },
    value: {
      type: Sequalize.TEXT,
      allowNull: false
    }

  })
}
