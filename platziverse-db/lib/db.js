'use strict'
// se inicializa la clase de Sequalize
const Sequalize = require('sequelize')
// Singleton, objeto que solo tiene una instancia, no crea múltiples instancias.
let sequelize = null

module.exports = function setupDatabase (config) {
  // Si la instancia del singleton no existe, se define
  if (!sequelize) {
    sequelize = new Sequalize(config)
  }
  return sequelize
}
