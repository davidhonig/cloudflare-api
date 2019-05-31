const express = require('express');
const fetch =  require('node-fetch')

const config = require('./app/config');

const CFG = config();

const cf = require('cloudflare')({
    email: CFG.email,
    key: CFG.CFKey
  });

// Express listener
const app = express()
app.use(express.static('public'));

app.listen(3000, function(err) {
    if(err){
       console.log(err);
       } else {
       console.log("listen:3000");
    }
});

// Express router
app.get('/', function (req, res) {
    res.send('node up');
});

app.get('/info', async function (req, res) {
    let dataset = [];
    let weHaveMore = true;
    let pg = 1;
    const per_page = 50;
    while (weHaveMore) {
        try {
            let response = await cf.zones.browse({page: pg, per_page: per_page});
            dataset = dataset.concat(response.result);
            // console.log(response.result.length);
            pg += 1;
            if (response.result.length < per_page) {
                weHaveMore = false;
            }
        } catch(err) {
            weHaveMore = false;
        };
    };
    let page = '<html><head></head><body><table>'
    console.log('we have ' + dataset.length + ' domains');
    dataset.forEach(element => {
            page += '<tr><td>' + element.name + '</td><td>' + element.status + '</td><td>' + element.plan.name + '</td></tr>';
         });
    page += '</table></body></html>'
    res.send(page);
    // console.log(dataset[1]);
});

