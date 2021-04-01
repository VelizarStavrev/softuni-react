const Product = require('../models/Product');

const create = (productData) => {
    let product = new Product({ ...productData });

    return product.save(); // save to the DB
}

const getAll = () => {
    return Product
        .find()
        .lean()
        .then((products) => {
            return products;
        });
};

const getOne = (id) => {
    return Product
        .findById(id)
        .then(product => {
            return product;
        });
}

const getOneType = (type) => {
    let word;

    switch (type) {
        case 'male':
            word = 'Мъжки';
            break;

        case 'female':
            word = 'Дамски';
            break;

        case 'kid':
            word = 'Детски';
            break;
    }

    return Product
        .find({ type: { "$regex": word, "$options": "i" } })
        // .find({ type: 'Мъжки кецове' })
        .lean()
        .then((products) => {
            return products;
        });
}

module.exports = {
    create,
    getAll,
    getOne,
    getOneType,
}