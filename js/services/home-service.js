let externals = {};

let data = 'get home content data';

externals.getHomeContent = cb => {
    
    /**
     * replace for ajax request 
    */
    cb(null, data); 
}

export default externals;
