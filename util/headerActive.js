module.exports = (links = [], page = 'shop') => links.map(l => {
    if(l.id === page){
        l.class = 'active';
    }else{
        l.class = '';
    }    
    return l;
});