const axios = require('axios');
const fs = require('fs');

async function makeRequest(){
    const data = process.argv[2];
    const config = {
        method: 'GET',
        url: `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${data}`,
        responseType: 'stream'
    };
    let res = await axios(config);
    const writer = fs.createWriteStream('QR.png');
    res.data.pipe(writer);
}

makeRequest();