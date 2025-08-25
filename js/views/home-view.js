import "../../css/home-view.css";
import { typewriterAnimation } from "../animations/typewriter-animation";

let externals = {};

externals.render = (data) => {
  loadContent(data);
  typewriterAnimation(data);
};

const loadContent = (data) => {
  $(".content").append(
    '<div id="home">' +
      '<p class="header">' +
      "</p>" +
      '<p class="body">' +
      "</p>" +
      "</div>"
  );
};

export default externals;
