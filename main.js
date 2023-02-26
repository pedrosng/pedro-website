import routes from './js/router';
import setUpMoonAnimation from './js/3d/moon-animation';
import { setUpTextAnimations } from './js/animations/intro-animation';

setUpTextAnimations();
setUpMoonAnimation();
routes.start();