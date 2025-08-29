import routes from "./js/router.js";
import { setUpTextAnimations } from "./js/animations/intro-animation.js";
import { setUpLanding } from "./js/views/landing.js";
import setUpMoonAnimation from "./js/3d/moon-animation.js";

setUpTextAnimations();
setUpLanding();
setUpMoonAnimation();
routes.start();
