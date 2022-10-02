// Modulo que permite hacer consultas en la consola
//
'use strict'
// Este es un script de configuración para la base de datos

// namespace de qué modulo y qué archivo se está haciendo debug
// iot:db:setup
const debug = require('debug')('iot:db:setup')

// const inquirer = require('inquirer')
// Para estilizar strings
// const chalk = require('chalk')
const db = require('./')

// Se crea objeto prompt para hacer preguntas al usuario (Son promesas)

// Se define función asincróna
async function setup () {
  /* inquirer.prompt([{
      type: 'confirm',
      name: 'setup',
      message: 'Esto destruye la base de datos'
    }]) */

  // Objeto js de configuración
  const config = {
    // Propiedades, con variable de entorno de la forma DB_NAME
    database: process.env.DB_NAME || 'iot',
    username: process.env.DB_USER || 'piot',
    password: process.env.DB_PASS || 'pablo',
    host: process.env.DB_HOST || 'localhost',
    // Propiedad del dialecto, en este caso es postgresql (Podría ser mysql)
    dialect: 'postgres',
    // Para debug
    logging: s => debug(s),
    setup: true
  }
  // Obtiene el objeto de base de datos
  await db(config).catch(handleFatalError)

  console.log('Éxito!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()
