

// console.log('I am in idex.js')

// const canvas = new fabric.Canvas('canvas',{
//     width: 800,
//     height: 500,
// });

// canvas.renderAll();

// fabric.Image.fromURL('https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png', (img) =>{
//     canvas.backgroundImage = img
//     canvas.renderAll()
// })

const initCanvas = (id) =>{
    return new fabric.Canvas(id, {
        width: 800,
        height: 500,
    });
}

const setBackground = (url, canvas) =>{
    
fabric.Image.fromURL(url, (img) =>{
    canvas.backgroundImage = img
    canvas.renderAll()
})

}
const canvas = initCanvas('canvas');

setBackground('https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png', canvas);

// mouse: over
canvas.on('mouse:over', (e) => {
   console.log(e)
})