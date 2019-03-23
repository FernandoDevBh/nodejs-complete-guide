const path = require('path');

const express = require('express');

const headerActive = require('../util/headerActive')

const { products: prods, links } = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {  
  res.render('shop', { 
    prods, 
    pageTitle: 'Shop', 
    links: headerActive(links), 
    hasProducts: prods.length > 0,
    productCSS: true,    
  });
});

module.exports = router;
