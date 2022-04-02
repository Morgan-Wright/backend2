const PORT = 4004;

const express = require('express');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

const {
    getHouse,
    createHouse,
    updateHouse,
    deleteHouse,
} = require('./controller/controller');

app.get(`/api/houses`, getHouse);
app.post(`/api/houses`, createHouse);
app.put(`/api/houses/:id`, updateHouse);
app.delete(`/api/houses/:id`, deleteHouse);


app.listen(PORT, () => console.log(`server is running on port ${PORT}`));