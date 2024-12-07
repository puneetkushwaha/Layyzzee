document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.learn-btn').forEach((button) => {
      button.addEventListener('click', () => {
          alert('Happy Learning!');
      });
  });
});
function clickkar(){
  document.getElementById("nav-links").classList.toggle("change")
}