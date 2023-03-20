const express = require('express')
const path = require("path")
const app = express()
const https = require('https');
const fs = require('fs');
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
const projectId = '2Mx9oeUP6HjmA3YNfMMVnt9tOXf';
const projectSecret = '93d66b180f1a0697ea5f851405b9fd38';
var bodyParser = require('body-parser');

const staticPath = path.join(__dirname,"/public");
const filepath = path.join(__dirname,"/public/js/myfile.txt")
const filepathjson = path.join(__dirname,"/public/js/send.json")
app.use(express.static(staticPath))
app.use(bodyParser.text({ type: 'text/html' }))

// app.get('/', function (req, res) {
//     //   res.send('Hello World')
//     res.sendFile(__dirname + '/public/index.html');
// })


var datahash;

app.use

var sih = app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any

    var datatype = req.body.datatype;
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();

    
    var ch = `[{"name":"${datatype}","count":1,"date":"${date}/${month}/${year}"}]`;

    fs.writeFile(filepathjson,ch,(err) => {
        if(err){
            console.log(err)
        }
        console.log(data)
    })

    console.log(req.file);
    var mydata = req.file.filename;
    var data = Buffer.from(fs.readFileSync(req.file.path));

    async function ipfsClient() {
        const { create } = await import('ipfs-http-client')
        const client = await create(
            {
                host: "ipfs.infura.io",
                port: 5001,
                protocol: "https",
                headers: {
                    "Authorization": `Basic ${Buffer.from(projectId + ':' + projectSecret).toString("base64")}`
                }
            });
            let doc = await client.add(data).then((res) => {
            datahash = res.path;
            fs.writeFile(filepath,res.path,(err) => {
                if(err){
                    console.log(err)
                }
                console.log(data)
            })
        });
        // vc = datahash;
        console.log(datahash); 
        //res.sendFile(__dirname + '/public/EvidenceList.html'); 
    }
    ipfsClient()
    console.log(req.file.filename);
})


app.get('/download/:ID', function (req, res) {
    console.log(req.params.ID);
})

app.listen(3000)