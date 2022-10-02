'use strict'
// Definiendo modelo utilizando sequelize
const Sequalize = require('sequelize')
const setupDatabase = require('../lib/db')
// Se recibe el objeto configuración para obtener una instancia
// de la base de datos utilizando la función creada
module.exports = function setupAgentModel (config) {
  const sequelize = setupDatabase(config)
  // Modelo de la base de datos se define con .define
  // va a crear la tabla agente en la base de datos
  return sequelize.define('agent', {
    uuid: {
      type: Sequalize.STRING,
      allowNull: false
    },
    username: {
      type: Sequalize.STRING,
      allowNull: false
    },
    name: {
      type: Sequalize.STRING,
      allowNull: false
    },
    hostname: {
      type: Sequalize.STRING,
      allowNull: false
    },
    pid: {
      type: Sequalize.INTEGER,
      allowNull: false
    },
    connected: {
      type: Sequalize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }

  })
}
