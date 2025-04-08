import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `
  <div class="widget">
    ${cover}
    <img src="${variables.avatarURL}" class="photo" />
    <h1>${variables.name || "Nelcy"} ${variables.lastName || "García"}</h1>
    <h2>${variables.role || "Web developer"}</h2>
    <h3>${variables.city || "San Cristobal"}, ${variables.country || ""}</h3>
    <h3>${variables.country || "Venezuela"}, ${variables.country || ""}</h3>
    <ul class="${variables.socialMediaPosition}">
      <li><a href="https://twitter.com/${variables.twitter ||
        "frontendmentor"}" target="_blank"><i class="fa-brands fa-x-twitter" style="color: #3c6dc3;"></i>
      <li><a href="https://github.com/${variables.github ||
        "Nelgarpa"}" target="_blank"><i class="fa-brands fa-github" style="color: #3c6dc3;"></i>
      <li><a href="https://linkedin.com/${variables.linkedin ||
        "/in/nelcy-garc%C3%ADa-/"}" target="_blank"><i class="fa-brands fa-linkedin" style="color: #3c6dc3;"></i>
      <li><a href="https://instagram.com/${variables.instagram ||
        "nelcygp23"}" target="_blank"><i class="fa-brands fa-instagram" style="color: #3c6dc3;"></i>
    </ul>
  </div>
`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "public/assets/fondo.png",
    // this is the url for the profile avatar
    avatarURL: "public/assets/img/avatar_nelcy.png",
    // social media bar position (left or right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input

      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
