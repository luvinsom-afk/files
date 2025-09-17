document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

window.addEventListener('keydown', function(event) {
    var key = event.key.toLowerCase();

    if (key === 'f12') {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && key === 'i') {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && key === 'j') {
        event.preventDefault();
    }

    if (event.ctrlKey && key === 'u') {
        event.preventDefault();
    }

    if (event.ctrlKey && key === 's') {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && key === 's') {
        event.preventDefault();
    }

    if (event.ctrlKey && key === 'p') {
        event.preventDefault();
    }
});
