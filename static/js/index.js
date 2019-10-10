$(function(){
     //Calls the tocify method on your HTML div.
    $("#toc").tocify();
})
function watchFullScreen(imgUrl) {
    let div = document.createElement('div')
    let img = document.createElement('img')
    let styleObj = {
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'backgroundColor': 'black',
        'display': 'flex',
        'align-items': 'center',
    }
    let attrObj = {
        src: imgUrl,
    }
    for (let style in styleObj) {
        div.style[style] = styleObj[style];
    }
    for (let attr in attrObj) {
        img.setAttribute(attr, attrObj[attr])
    }
    div.onclick = closeDialog.bind(div),
        div.setAttribute('id', 'dialog')
    img.style.width = '100%'
    div.appendChild(img);
    document.body.appendChild(div);
}

function closeDialog(dom, aaa) {
    document.body.removeChild(document.querySelector('#dialog'))
    console.log('============')
}

function copyText(event) {
    const input = document.createElement('input')
    input.setAttribute('display', 'none')
    document.body.appendChild(input)
    input.setAttribute('type', 'text')
    const copyValue = document.querySelector('#content').innerText
    input.setAttribute('value', copyValue)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
}