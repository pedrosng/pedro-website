import "../../css/arrows-animation.css";

export const setUpArrows = () => {
  $(".skills-card")
    .before(
      '<div class="arrows" id="backward">' +
        '<div class="arrow" id="left"></div>' +
        '<div class="arrow" id="left"></div>' +
        '<div class="arrow" id="left"></div>' +
        "</div>"
    )
    .after(
      '<div class="arrows" id="forward">' +
        '<div class="arrow" id="right"></div>' +
        '<div class="arrow" id="right"></div>' +
        '<div class="arrow" id="right"></div>' +
        "</div>"
    );
  
};
