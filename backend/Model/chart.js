module.exports=(sequelize,DataTypes)=>{
    const chart=sequelize.define('chart', {
        january: {
            type: DataTypes.STRING
        },
        february: {
            type: DataTypes.STRING
        },
        march: {
            type: DataTypes.STRING
        },
        april: {
            type: DataTypes.STRING
        },
        may: {
            type: DataTypes.STRING
        },
        june: {
            type: DataTypes.STRING
        },
        july: {
            type: DataTypes.STRING
        },
        august: {
            type: DataTypes.STRING
        }
    },
    {
        tableName:'chart'
    }
    )
    return chart
    
}