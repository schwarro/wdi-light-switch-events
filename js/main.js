document.addEventListener('DOMContentLoaded', function(e){
  var status = document.querySelector(".status");
  var body = document.querySelector("body");
  var button = document.querySelector(".switch.on");

  button.addEventListener("click", switchModes, false);

  function switchModes() {
    this.classList.toggle("on");
    this.classList.toggle("off");
    body.classList.toggle("light");
    body.classList.toggle("dark");

    if (button.classList.contains("on")) {
      status.innerHTML = "It's so bright in here!";
    } else if (button.classList.contains("off")) {
      status.innerHTML = "It's so dark in here!";
    }
  }
});
