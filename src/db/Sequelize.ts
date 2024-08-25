import { Dialect, Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();
const string = ''
const sequelize = new Sequelize(process.env.DB_NAME || string, process.env.DB_USER || string, process.env.DB_PASS || string, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as Dialect,
    //logging: console.log,
});


export default sequelize;
