import "../../css/contact-view.css";

let externals = {};

externals.render = (data) => {
  loadContent(data);
};

const loadContent = (data) => {
  $(".content").append(
    '<div id="contact">' +
      '<p class="contact-form-text">get in touch!</p>' +
      '<div class="contact-form">' +
      '<div class="form-name">' +
      '<input id="name" type="text" placeholder="Name"></input>' +
      '<div id="line"></div>' +
      "</div>" +
      '<div class="form-email">' +
      '<input id="email" type="email" placeholder="Email"></input>' +
      '<div id="line"></div>' +
      "</div>" +
      '<div class="form-subject">' +
      '<input id="subject" type="text" placeholder="Subject"></input>' +
      '<div id="line"></div>' +
      "</div>" +
      '<div class="form-message">' +
      '<textarea id="message" placeholder="Message"></textarea>' +
      '<div id="line"></div>' +
      "</div>" +
      '<button class="send-button">Send</button>' +
      "</div>"
  );

  $(".send-button").on("click", () => {
    const name = $("#name").val();
    const email = $("#email").val();
    const subject = $("#subject").val();
    const message = $("#message").val();

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    window.location.href = mailtoLink;
  });
};

export default externals;
