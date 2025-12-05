

document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementsByClassName('typing-name');
    const text = 'Mohamed Amine Doutar';
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
});
const originalTitle = document.title;
const awayTitle = 'come back to know more about me :>';
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