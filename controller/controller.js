const house = require('../db.json')
let globalId = 4

const getHouse = (req, res) => {
    res.status(200).send(house)
};

const createHouse = (req, res) => {
    let { address, price, imageURL } = req.body;
    let NewHouse = {
        id: globalId,
        address,
        price,
        imageURL,
    };

    house.push(NewHouse);
    res.status(200).send(house);
    globalId++;
};

const updateHouse = (req, res) => {
    let { id } = req.params;
    let { type } = req.body;
    let index = house.findIndex(elem => +elem.id === +id);

    if(house[index].price <= 10000 && type === 'minus'){
        house[index].price = 0
        res.status(200).send(house)
    } else if (type === 'plus') {
        house[index].price += 10000
        res.status(200).send(house)
    } else if (type === 'minus') {
        house[index].price -= 10000
        res.status(200).send(house)
    } else {
        res.sendStatus(400)
    }
 };

const deleteHouse = (req, res) => {
    let index = house.findIndex(elem => elem.id === +req.params.id);
    house.splice(index,1);
    res.status(200).send(house)
};

const exportsObj = {
    getHouse,
    createHouse,
    updateHouse,
    deleteHouse,
};

module.exports = exportsObj;