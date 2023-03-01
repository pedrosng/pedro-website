import "../../css/arrows-animation.css";

export const setUpArrows = () => {
  $(".skills-card")
    .before(
      '<div class="arrows">' +
        '<div class="arrow" id="left"></div>' +
        '<div class="arrow" id="left"></div>' +
        '<div class="arrow" id="left"></div>' +
        "</div>"
    )
    .after(
      '<div class="arrows">' +
        '<div class="arrow" id="right"></div>' +
        '<div class="arrow" id="right"></div>' +
        '<div class="arrow" id="right"></div>' +
        "</div>"
    );
  console.log("arrowssetup");
};
