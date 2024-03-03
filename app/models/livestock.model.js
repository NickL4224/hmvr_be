module.exports = (sequelize, Sequelize) => {
    const Livestock = sequelize.define("livestock", {
        tag_number: {
            type: Sequelize.STRING
        },
        tag_color: {
            type: Sequelize.STRING
        },
        owner: {
            type: Sequelize.STRING 
        },
        type: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        }
    });

    return Livestock;
};

