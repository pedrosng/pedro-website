let externals = {};

let data = 'git hub, linked in, instagram';

externals.getInfoContent = cb => {
    
    /**
     * replace for ajax request 
    */
    cb(null, data); 
}

export default externals;
