

document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing-name');
    const text = 'Mohamed Amine Doutar';
    let index = 0;
    typingElement.textContent = ''; 
    function typeWriter() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150); // Adjust speed (150ms per character)
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