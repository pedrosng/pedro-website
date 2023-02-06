import homeService from '../services/home-service';
import homeView from '../views/home-view';

let externals = {}

externals.start = () => {
    console.log('home-ctrl start');
    
    /** 
     * refactor to asyn-await
    */
    homeService.getHomeContent( (err,data) => {

        let homeContent = err ? err : data ;

        console.log(homeContent);

        homeView.render(homeContent);
    });    
}

export default externals;