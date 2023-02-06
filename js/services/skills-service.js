let externals = {};

let data = 'my technique is very necessary';

externals.getSkillsContent = cb => {
    
    /**
     * replace for ajax request 
    */
    cb(null, data); 
}

export default externals;
