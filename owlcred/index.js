const fetch = require('node-fetch');

fetch(
    `https://owlbot.info/api/v4/dictionary/apple`,
    { headers: { Authorization: `Token ${{secrets.OWL_TOKEN}}` } }
)
.then(res => res.json())
.then(r => console.log(r))
