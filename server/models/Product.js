const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    name: { // Nike Air Max 2090 
        type: String,
        required: true,
        unique: true
    },
    type: { // Мъжки маратонки 
        type: String,
        required: true,
    },
    number: { // DH3983-001 
        type: Number,
        required: true,
    },
    rating: { // 4.95 от 5
        type: Number,
        required: true,
    },
    votes: { // 19 гласа 
        type: Number,
        required: true,
    },
    price: { // 259.99 
        type: Number,
        required: true,
    },
    sizes: { // 41, 43, 44.5
        type: String,
        required: true,
    },
    image: { // Nike_Air_Max_2090 
        type: String,
        required: true,
    },
    description: { // Nike Air Max 2090 печели сърцата с изцяло нов външен вид, вдъхновен от вечната класика Air Max 90.Air Max е една от най-иновативните технологии за омекотяване. Съставена е от частици оформeни под налягане.Въздушните капсули в задната част на междинната подметка се компресират и така редуцират силата на сблъсъка със земната повърхност. След което мигновено възстановяват формата си и са в готовност за следващата стъпка.Това дава на подметката гъвкавост и пружиниране, без да се прави компромис със структурата. Технологията е видима, благодарение на прозрачните панели, което прави дизайна на маратонките още по-ефектен.Междинната подметка в предната част е изградена от пяна, която допълнително създава меко и приятно усещане. Външната подметка е от издръжлива гума за перфектно сцепление и дълготрайност.Текстилната горна част прилепва плътно и комфортно. Оребрените детайли създават смел и футуристичен дизайн.Nike Air Max 2090 са перфектните маратонки за активния човек, който иска да се чувства и изглежда уникално във всяка ситуация.
        type: String,
        required: true,
    },
    color: { // Черен
        type: String,
        required: true,
    },
    material: { // Външна част - текстил и други материали, Вътрешна част - текстил
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Product', productScheme);