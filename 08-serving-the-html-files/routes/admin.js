const path = require('path');

const express = require('express');

const headerActive =require('./../util/headerActive');

const router = express.Router();

const products = [];
const links = [
  { id: 'shop', label: 'Shop', class: '', href: '/' },
  { id: 'add-product', label: 'Add Product', class: '', href: '/admin/add-product' }
]

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {  
    pageTitle: 'Add Product', 
    links: headerActive(links, 'add-product'),
    productCSS: true,
    formCSS: true
  });  
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
exports.links = links;
