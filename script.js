// const box= document.querySelectorAll(".contents")

// console.log(Math.round(Math.random() * (window.innerWidth - 0) + 0));

// const getRandomPosition = (min, max) => {
//     return Math.round(Math.random() * (max- min) + min) 
// }

// for(let i=0; i < box.length; i++) {
//     box[i].style.top = `${getRandomPosition(0,window.innerHeight)}px`
//     box[i].style.left = `${getRandomPosition(0,window.innerWidth)}px`
// }

$(".contents").draggable({
    cursor: "move",
    stack: ".contents",
});

