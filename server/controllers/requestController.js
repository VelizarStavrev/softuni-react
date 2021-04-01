const router = require('express').Router();

const productService = require('../services/productService');

// const authServices = require('../services/authService');
// const { COOKIE_NAME } = require('../config/config');

// Home
router.get('/', (req, res) => {
    res.send('Default request received!');
});

// Test
router.get('/test', (req, res) => {
    const test = {
        testname: 'Tester',
        testnumber: 123,
        testbool: true
    }

    console.log('Test request received!');
    res.send(test);
});

// Create new item
router.post('/create', (req, res) => {
    // let productData = {
    //     name: '', // Adidas XYZ 420
    //     type: '', // мъжки, женски, детски
    //     sizes: '', // [20, 50, 60, 70]
    //     rating: '', // 4.47
    //     votes: '', // 62 
    //     price: '', // 59.99
    //     discount: '', // 20
    //     description: '', // С голямо удоволствие Ви представяме тези маратонки на марката Adidas, създадени специално за да Ви осигурят максимално удобство по време на тренировка или разходка.   Изработени са от специални дишащи синтетични и текстилни материали, които гарантират за здравина и перфектна циркулация на въздуха във вътрешността на обувката.   Всички тези характеристики, както и уникалния дизайн, който може да видите на снимките, гарантират за това, че тези мъжки маратонки Adidas ще бъдат най-удобните, които сте носили някога.
    //     color: '', // Сив
    //     material: '', // Външна част - текстил и други материали, Вътрешна част - текстил
    // };

    let productData = {
        name: 'Clarks City Storm HI',
        type: 'Детски обувки',
        sizes: [20, 20.5, 21, 22],
        rating: 4.68,
        votes: 19,
        price: 109.99,
        discount: 64,
        description: 'Star Wars обединява сили с Clarks, създавайки този модел за най-малките фенове на поредицата. Марката отдава почит на дългоочаквания 9-ти епизод на Междузвездни войни - Възходът на Скайуокър.   Обувките са изработени изцяло от естествена кожа.  Декорирани са с щампа на войник - щурмовак, който е популярен образ от космическата сага.   City Storm HI притежава стабилна конструкция, подходяща за градски условия. Високата яка държи глезена стабилен. Велкро лепенките позволяват бързо и лесно обуване и събуване.   Равната подметка изолира от повърхността. Звездните детайли завършват цялостната визия.',
        color: 'Черен',
        material: 'Външна част - естествена кожа, Вътрешна част - текстил',
    };

    productService.create(productData)
        .then((product) => {
            console.log('Product created!');
            console.log(product);
            res.send(product);
        })
        .catch(err => {
            console.log(err);
            res.send('An error occured!');
        });
});

// Get all items
router.get('/getAll', (req, res) => {

    productService.getAll()
        .then((products) => {
            // console.log(products);
            res.send(products);
        })
        .catch(err => {
            console.log(err);
            res.send('An error occured!');
        });
});

// Get one
router.get('/getOne/:productId', (req, res) => {
    productService.getOne(req.params.productId)
        .then(product => {
            // console.log(product);
            res.send(product);
        })
        .catch(err => {
            console.log(err);
            res.send('An error occured!');
        });
});

router.get('/getOneType/:productType', (req, res) => {
    productService.getOneType(req.params.productType)
        .then(product => {
            // console.log(product);
            res.send(product);
        })
        .catch(err => {
            console.log(err);
            res.send('An error occured!');
        });
});

// TO DO
// Register
// Login
// Products with filters
// Route that does not exist response

module.exports = router;