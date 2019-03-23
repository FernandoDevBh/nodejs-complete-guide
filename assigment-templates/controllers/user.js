const { activeLink } = require('./links');

const users = [];

// / add new user
exports.root = (req, res, next) => {
    res.render('add-user', {
        pageTitle: 'Add User',
        links: activeLink()
    })
};

exports.addUser = (req, res, next) => {
    console.log(req.body)
    const { name } = req.body;
    users.push({name});
    res.redirect('/users');
};

exports.getAllUsers = (req, res, next) =>{
    res.render('added-users', { 
        users, 
        pageTitle: 'Added Users', 
        links: activeLink('users')
    });   
}