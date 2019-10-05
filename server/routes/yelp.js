const express = require("express");
const router = express.Router();

const axios = require("axios");
const yelp = require("yelp-fusion");

const CLIENT_ID = "tswk22sopnh_m3rLghtuQg";
const client = yelp.client(
  "vVStPK0Sq1psk4vzKpkMNXABbo_sawEac6QI76sldewazU5-YV8ZHKAv0_6-OZ7MzN2eFYEicAfz2HLw5_PElG9nEUJoeNQoDQbA_E2MgDqsHa-uvC68JPEjESiXXXYx"
);

router.get("/", (req, res) => {
  res.send("Yelp Home");
  console.log("cool");
});

router.get("/:term/:location", (req, res) => {
  console.log("beans");
  client
    .search({
      term: `${req.params.term}`,
      location: `${req.params.location}`
    })
    .then(response => {
      res.send(response.jsonBody.businesses);
    })
    .catch(e => {
      console.log(e);
    });
});

module.exports = router;
