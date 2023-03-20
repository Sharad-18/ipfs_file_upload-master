const express = require('express')
const app = express()
const https = require('https');
const fs =require('fs');
var multer  = require('multer');
const { request } = require('http');
var upload = multer({ dest: 'uploads/' })
const projectId = '2Mu2r4YfQd9leKQWN4Yyr74IEpK';
const projectSecret = '77ce1e2a5f55ae5c0e454f26187877e7';
async function ipfsClient() {
    const { create } = await import('ipfs-http-client')
    const client= await create(
        {
            host: "ipfs.infura.io",
            port: 5001,
            protocol: "https",
            headers: {
                "Authorization": `Basic ${Buffer.from(projectId + ':' + projectSecret).toString("base64")}`
        }
    });
    

    app.post('/profile', upload.single('avatar'), function (req, res, next) {
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
        console.log(req.file);
        var mydata = req.file.filename;
        var data = Buffer.from(fs.readFileSync(req.file.path));
        console.log(req.file.filename);
        const file = client.add(data);
        console.log(file);
      })

}
ipfsClient()