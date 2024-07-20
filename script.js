let boxes = document.querySelector(".container").children ;



function getRandomColor(){
    let val1 = Math.floor( Math.random()* (255-0+1))+1;
    let val2 = Math.floor( Math.random()* (255-0+1))+1;
    let val3 = Math.floor( Math.random()* (255-0+1))+1;
    return `rgb(${val1}, ${val2}, ${val3})`
}


function color()
{
    Array.from(boxes).forEach(e=>{
        e.style.backgroundColor = getRandomColor()
        e.style.color = getRandomColor()
    })
}

let a = setInterval(() => {color()
}, 1000);