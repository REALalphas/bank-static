const presentation = document.getElementById('presentation')
const postPresentation = document.getElementById('post-presentation')
const content = document.querySelector('.content')

setInterval(() => {
    // Main
    scrollCeil = Math.ceil((scrollY - 220) / 20)
    imageIndex = Math.max(Math.min(scrollCeil, 90), 1)
    presentation.src = `./public/img/cards/presentation/${imageIndex}.png`
    if (scrollY > 2120)
        presentation.style.transform = `scale(0.6)`
    else
        presentation.style.transform = `scale(1)`

    // Post
    if (scrollY > 2300) {
        content.style.background = `#090909`
        postPresentation.style.transform = `translateY(-10vh)`
        postPresentation.style.opacity = `1`
    }
    else {
        content.style.background = `#0000`
        postPresentation.style.transform = `translateY(0)`
        postPresentation.style.opacity = `0`
    }
}, 10)