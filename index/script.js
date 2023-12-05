document.getElementById('oval').addEventListener('click', function() {
    document.body.classList.toggle('inverted');
    document.querySelectorAll('.box, .oval, .box1, .bottom-list, .top-list').forEach(function(element) {
        element.classList.toggle('inverted');
    });
});