import infoService from '../services/info-service';
import infoView from '../views/info-view';

let externals = {}

externals.start = () => {
    console.log('info-ctrl start');
    
    /** 
     * refactor to asyn-await
    */
    infoService.getInfoContent( (err,data) => {

        let infoContent = err ? err : data ;

        console.log(infoContent);

        infoView.render(infoContent);
    });    
}

export default externals;