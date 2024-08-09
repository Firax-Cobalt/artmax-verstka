function header__button_open() {
  document.getElementById("mySidebar").style.transform = "translateX(0)";
  document.getElementById("header-button").style.display = "none";
  document.getElementById("sidebar-background").style.opacity = "0.6";
  document.body.style.overflow = "hidden"; // Запретить прокрутку
}

function header__button_close() {
  document.getElementById("mySidebar").style.transform = "translateX(-100%)";
  document.getElementById("header-button").style.display = "flex";
  document.getElementById("sidebar-background").style.opacity = "0";
  document.body.style.overflow = ""; // Разрешить прокрутку
}

function serviceServices(evt, serviceName) {
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
  document.getElementById(serviceName).style.display = "flex";
  evt.currentTarget.className += " active";
}