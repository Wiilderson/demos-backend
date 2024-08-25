import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import demoRoutes from './routes/demo.routes';
import sequelize from './db/Sequelize';

dotenv.config();
const app: Application = express();
app.use(cors())
app.use(express.json());
app.use('/api', demoRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
