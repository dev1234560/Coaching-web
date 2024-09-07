var iframe = document.querySelector('iframe');

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 's' || event.key === 'p')) {
        event.preventDefault();
        alert("Saving and printing are disabled.");
    }
});



document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
iframe.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
