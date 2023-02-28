import routes from './js/router';
import { setUpTextAnimations } from './js/animations/intro-animation';
import { setUpLanding } from './js/views/landing';
import setUpMoonAnimation from './js/3d/moon-animation';

//setUpTextAnimations();
setUpLanding();
setUpMoonAnimation();
routes.start();