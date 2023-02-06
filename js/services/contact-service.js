let externals = {};

let data = 'display contact form';

externals.getContactContent = cb => {
    
    /**
     * replace for ajax request 
    */
    cb(null, data); 
}

export default externals;
