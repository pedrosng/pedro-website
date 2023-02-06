import contactService from '../services/contact-service';
import contactView from '../views/contact-view';

let externals = {}

externals.start = () => {
    console.log('contact-ctrl start');
    
    /** 
     * refactor to asyn-await
    */
    contactService.getContactContent( (err,data) => {

        let contactContent = err ? err : data ;

        console.log(contactContent);

        contactView.render(contactContent);
    });    
}

export default externals;