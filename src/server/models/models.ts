import base from "../../bd";
import {DataTypes} from "sequelize";

export const User = base.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING}
})


