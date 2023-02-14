import routes from './js/router';
import moonAnimation from './js/3d/moon-animation';
import { startUpAnimation } from './js/animations/text-animation';

startUpAnimation();

moonAnimation();

routes.start();
