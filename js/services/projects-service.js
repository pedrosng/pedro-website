let externals = {};

let data = 'wow so many amazing projects';

externals.getProjectsContent = cb => {
    
    /**
     * replace for ajax request 
    */
    cb(null, data); 
}

export default externals;
