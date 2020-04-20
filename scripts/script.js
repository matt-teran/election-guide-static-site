document.querySelector('#hamburger').onclick = () => {
    console.log('f')
    if (document.querySelector('#menu').style.display === 'none'){
        document.querySelector('#menu').style.display = 'block'
    } else {
        document.querySelector('#menu').style.display = 'none'
    }
}