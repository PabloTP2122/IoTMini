'use strict'

const debug = require('debug')('platziverse:db:setup')
const db = require('./')
/* const inquirer = require('inquirer')
        const chalk = require('chalk') */

// Se crea objeto prompt para hacer preguntas al usuario (Son promesas)

/* const prompt = inquirer.createPromptModule() */

async function setup () {
  /* const answer = await prompt([{
        // Pregunta si/no
        type: 'confirm',
        name: 'setup',
        message: 'This will destroy your database, are you sure?'
      }])

      if (!answer.setup) {
        return console.log('All will be ok')
      } */

  const config = {
    database: process.env.DB_NAME || 'iot',
    username: process.env.DB_USER || 'piot',
    password: process.env.DB_PASS || 'pablo',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }
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
