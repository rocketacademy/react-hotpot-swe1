export default function billModel(sequelize, Datatypes) {
  return sequelize.define('bill', {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    total: Datatypes.DECIMAL,
    name: Datatypes.STRING,
    createdAt: Datatypes.DATE,
    updatedAt: Datatypes.DATE,

  },
  { underscored: true });
}
