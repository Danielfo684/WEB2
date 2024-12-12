let text = document.getElementById('main-tag');
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    console.log(value);
    text.style.marginTop = value * 1 + 'px';
});