import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/Sequelize';
import Frame from './frame.model';

interface DemoAttributes {
    id: string;
    name: string;
}

interface DemoCreationAttributes extends Optional<DemoAttributes, 'id'> { }

class Demo extends Model<DemoAttributes, DemoCreationAttributes> implements DemoAttributes {
    public id!: string;
    public name!: string;
}

Demo.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Demo',
    }
);

Demo.hasMany(Frame, { as: 'frames', foreignKey: 'demoId' });
Frame.belongsTo(Demo, { as: 'demo', foreignKey: 'demoId' });

export default Demo;