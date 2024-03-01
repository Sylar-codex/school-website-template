const toggle = () => {
  document.getElementById("nav-div").classList.toggle("show");
};

document.getElementById("menu_icon").addEventListener("click", toggle);

const removeCLass = () => {
  document.getElementById("nav-div").classList.remove("show");
};
document.getElementById("cancel").addEventListener("click", removeCLass);
