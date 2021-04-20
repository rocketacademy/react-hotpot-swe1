export default function init<MODEL_NAME_UPPER_CAMEL_CASE_SINGULAR>Model(sequelize, DataTypes) {
  return sequelize.define('bill', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
    },
    name: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    underscored: true
  });
};