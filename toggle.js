const toggle = () => {
  document.getElementById("nav-div").classList.toggle("show");
  console.log("I am being clicked");
};

document.getElementById("menu_icon").addEventListener("click", toggle);
