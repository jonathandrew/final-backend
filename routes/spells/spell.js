const express = require("express");
const router = express.Router();
const api_key = process.env.API_KEY;
const axios = require("axios");
router.get("/", (req, res, next) => {
  const url = {
    characters: `https://www.potterapi.com/v1/characters?key=${api_key}`,
    spells: `https://www.potterapi.com/v1/spells?key=${api_key}`,
  };
  axios.get(url.spells).then((info) => {
    let newArray = [];
    info.data.map((item) => {
      console.log(item);
      newArray.push(item);
    });
    res.json(newArray);
  });
});

module.exports = router;
