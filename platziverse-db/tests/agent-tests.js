'use strict'

const test = require('ava')
// Se requiere que se cree una conexion con una base de datos de prueba
const config = {
  logging: function () {}
}
// Se requiere hacer una instancia de la base de datos para testearla
// hooks
let db = null
test.beforeEach(async () => {
  const setupDatabase = require('../')
  db = await setupDatabase(config)
})

test.beforeEach(async () => {

})
// El primer test, para verificar que el agente existe
// (Objeto de configuración de la base de datos)
test('Agent', t => {
  t.truthy(db.Agent, 'El agente debería de existir')
})
