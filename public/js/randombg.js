const body = document.body

// const bgs = [
//     // "academic-cap.svg",
//     "adjustments.svg",
//     "annotation.svg",
//     "archive.svg",
//     "arrows-expand.svg",
//     "bell.svg",
//     "bookmark.svg",
//     "bookmark-alt.svg",
//     "briefcase.svg",
//     "calculator.svg",
//     "cash.svg",
//     "chart-bar.svg",
//     "chat.svg",
//     "check.svg",
//     "clock.svg",
//     "gift.svg",
//     "lightning-bolt.svg",
//     "moon.svg",
// ]
const bgs = [
    "check.svg",
    "chevron-down.svg",
    "chevron-left.svg",
    "chevron-right.svg",
    "chevron-up.svg",
]

body.style.backgroundImage = `url(./public/img/backgrounds/${bgs[Math.floor(Math.random() * bgs.length)]})`

setInterval(() => {
    body.style.backgroundPositionY = `${scrollY / 3}px`
})