import express from 'express';
import { engine } from 'express-handlebars';

import sequelize from './db/conn.js'

const app = express();

import taskRoutes from './routes/tasksRoutes.js'

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))
app.use(express.static('public'))

app.use('/tasks', taskRoutes)
app.get('/', (req, res) => {
    res.redirect('/tasks')
})

const port = process.env.PORT || 8080;
sequelize.sync()
    .then(
        app.listen(port, () => {
            console.log('Hello world listening on port', port);
        })
    )
    .catch(err => console.log(err));
