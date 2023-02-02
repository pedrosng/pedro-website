import homeService from '../services/home-service';

let externals = {}

externals.start = () => {
    console.log('home-ctrl start');
    
    /** 
     * refactor to asyn-await
    */
    homeService.getHomeContent( (err,data) => {

        let homeContent = err ? { error : err } : { data : data };

        console.log(homeContent);

        homeView.render(homeContent);
    });    
}

export default externals;