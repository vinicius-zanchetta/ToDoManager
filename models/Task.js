import { DataTypes } from 'sequelize'

import sequelize from '../db/conn.js'

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    },
})

export default Task;