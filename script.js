var factHTML;
var runButton;
var outputText;

// Carousel
const config = {
  type: "carousel",
  perView: 3,
  breakpoints: {
    1024: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
};

new Glide(".glide", config).mount();

// Ability Tabs
function openAbility(evt, abilityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(abilityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Fun Facts Generator
document.addEventListener("DOMContentLoaded", function () {
  factHTML = document.getElementById("factText");
  runButton = document.getElementById("runButton");
});
