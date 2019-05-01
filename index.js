const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.info('Morgan enabled');
}

const main = async () => {
    try{
        const port = process.env.PORT || 5000;
        app.listen(port, () => console.info(`Listening on port ${port}`));
    } catch (ex) {
        console.error(ex);
    }
};

main();