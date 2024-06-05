import express from 'express';
import morgan from 'morgan';
import songsRoutes from './routes/songs.routes.js'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import {graphqlHTTP} from 'express-graphql'
import schema from '../graphql/schema.js'

const app= express()
const __dirname= dirname(fileURLToPath(import.meta.url))

//Settings
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))
app.set('port', process.env.PORT || 3000);
app.set('views',join(__dirname, 'views'))
app.set('view engine', 'ejs')


//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//Routes
app.use("/api/songs", songsRoutes);

//Static files
app.use(express.static(join(__dirname, 'public')))

//Starting the serve
app.listen(app.get('port'), ()=>{
    console.log(`SERVER ON PORT ${app.get('port')}`)
})

