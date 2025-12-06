

document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementsByClassName('typing-name');
    const text = 'Mohamed Amine Doutar';
    function typing(){

      let index = 0;
      typingElement[0].textContent = ''; 
      typingElement[1].textContent = ''; 
      function typeWriter() {
        if (index < text.length) {
          typingElement[0].textContent += text.charAt(index);
          typingElement[1].textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 150); 
        }
      }
      typeWriter();
    }
    setInterval(typing, text.length * 150);
});
const originalTitle = document.title;
const awayTitle = 'come back I miss you :>';
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = awayTitle;
    } else {
        document.title = originalTitle;
    }
});
window.addEventListener('blur', function() {
    document.title = awayTitle;
});
window.addEventListener('focus', function() {
    document.title = originalTitle;
});


const headerButtons = document.querySelectorAll("header a");



const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
      
    }
  });

  headerButtons.forEach(btn => {
    btn.classList.remove("focus");
    if (btn.name === current ) {
        
      btn.classList.add("focus");
    }
  });
});
