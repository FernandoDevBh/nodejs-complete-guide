const links = [
    { id: 'add-user', label: 'Add New User', class: '', href: '/' },
    { id: 'users', label: 'Added Users', class: '', href: '/users' }
]

exports.activeLink = (page = 'add-user') => links.map(l => {
    if(l.id === page){
        l.class = 'active';
    }else{
        l.class = '';
    }    
    return l;
});