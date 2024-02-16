const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();
const utils = require('./utils/asc-sorter');
const { readFileSync } = require('fs');
const config = require('config');

const port = config.get('server.port');
const host = config.get('server.host');

const server = app.listen(port, host, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${host}:${server.address().port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

router.use((request, response, next) => {
    console.log('API request call ===> '+ request.path);
    console.log('----------------------------------');
    console.log('API request call response ===> ' + response.statusCode);
    next();
});

// MOCK API CALLS
router.route('/api/mock/inspection-header').get((request, response) => {
    const data = readFileSync('./db/mock/inspection-header-mock.json');
    const INSPECTION_HEADER_DATA_MOCK = JSON.parse(data);

    response.json(INSPECTION_HEADER_DATA_MOCK);
});

router.route('/api/mock/inspection-header/:id').get((request, response) => {
    const data = readFileSync('./db/mock/inspection-header-mock.json');
    const INSPECTION_HEADER_DATA_MOCK = JSON.parse(data);

    response.json(INSPECTION_HEADER_DATA_MOCK);
});

router.route('/api/mock/inspection-detail').get((request, response) => {
    response.json(INSPECTION_DETAILS_DATA);
});

router.route('/api/mock/inspection-detail/:id').get((request, response) => {
    response.json(INSPECTION_DETAILS_DATA);
});

router.route('/api/mock/other-factors').get((request, response) => {
    const data = readFileSync('./db/mock/inpection-other-factors-mock.json');
    const OTHER_FACTORS_MOCK = JSON.parse(data);

    utils.ascSort(OTHER_FACTORS_MOCK);
    response.json(OTHER_FACTORS_MOCK);
});

router.route('/api/mock/culling-factors').get((req, res) => {
    const data = readFileSync('./db/mock/inpection-culling-factors-mock.json');
    const CULLING_FACTORS_MOCK = JSON.parse(data);

    utils.ascSort(CULLING_FACTORS_MOCK);
    res.json(CULLING_FACTORS_MOCK);
});

// CONFIG API LAYER END
