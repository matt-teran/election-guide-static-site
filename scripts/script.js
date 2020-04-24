document.querySelector('#hamburger').onclick = () => {
    if (document.querySelector('#menu').style.display === 'none'){
        document.querySelector('#menu').style.display = 'block';
    } else {
        document.querySelector('#menu').style.display = 'none'
    }
}