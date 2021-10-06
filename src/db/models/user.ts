'use strict';
import { Model } from 'sequelize'

interface UserInterface {
  id: number
  name: string
  username: string
  email: string
  password: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserInterface> implements UserInterface {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: number
    name!: string
    username!: string
    email!: string
    password!: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    static associate(models: any) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};