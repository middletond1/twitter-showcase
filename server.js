const path = require('path');
const express = require("express");
const axios = require('axios');
axios.defaults.headers.common = {'Authorization': `Bearer AAAAAAAAAAAAAAAAAAAAALovagEAAAAAp5uks%2BgOoD4VU1KSH%2BrKWiUabLs%3DUWE4sZzNEcOYEANOGPoDWVi61UolFk3jLatiIVMRKOjsT1WQKP`}

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

// axios.post(`https://api.twitter.com/oauth2/token`, { 'AtiyajZcVwqFcygJi1vpSKhjf': 'gLVZGDpzZulLh434MJdfQRIaNjcma9rplmRU25gmG2VjlmQhsH' })
//   .then(res => {
//     console.log(res);
//     console.log(res.data)
//   })

axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=from:danryckert`)
  .then(res => {
    console.log(res);
    console.log(res.data)
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// runs heroku build