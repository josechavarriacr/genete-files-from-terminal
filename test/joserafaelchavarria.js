module.exports = (sequelize, DataTypes) => {
    const JoseRafaelChavarria = sequelize.define(
      'JoseRafaelChavarria',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        state: {
          type: DataTypes.INTEGER,
          allowNull: false,
          enum: (-1, 0, 1),
        },
        order: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        tableName: 'JoseRafaelChavarria',
        comment: 'Description JoseRafaelChavarria',
      }
    )
    return JoseRafaelChavarria
  }