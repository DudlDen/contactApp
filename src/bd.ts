import {Sequelize} from 'sequelize-typescript'
const base = new Sequelize(
    'contact',
    'postgres',
    '1234',
    {
        dialect: "postgres",
        host: 'localhost',
        port: 1234
    }
)
export default base
