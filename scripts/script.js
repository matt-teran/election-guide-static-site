document.querySelector('#hamburger').onclick = () => {
    console.log('f')
    if (document.querySelector('#menu').style.display === 'none'){
        document.querySelector('#menu').style.display = 'block';
        document.querySelector('#header-divider').style.display = 'none';
    } else {
        document.querySelector('#menu').style.display = 'none'
        document.querySelector('#header-divider').style.display = 'block';
    }
}