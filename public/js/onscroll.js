app = document.querySelector('.app')

setInterval(() => {
    if (scrollY > 128)
        app.className = 'app scrolled'
    else if (scrollY < 64)
        app.className = 'app'
}, 100)
