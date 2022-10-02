#Modulo de IoT para base de datos
``` js
const setupDatabase = require('platziverse-db')
setupDatabase().then(db => {
    //Using object estructuring
    const { Agent, Metric } = db
}).catch(err => console.error(err))

```