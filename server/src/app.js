import express from 'express'
import config from './config'

import patientsRoutes from './routes/products.routes' 

const app = express()

//settings
app.set('port',config.port)

//middlewers

app.use(express.json());
app.use(express.urlencoded( { extended: false}));

app.use(patientsRoutes)

export default app