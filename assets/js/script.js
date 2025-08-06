window.onload = () => {
    var collapse = document.getElementById('collapse')
    var nav = document.getElementById('header-left')
    var lien = document.getElementsByClassName('lien')
    if (collapse) {
        collapse.addEventListener('click', () => {
            if (nav.style.display === 'block') {
                nav.style.display = 'none'
            } else {
                nav.style.display = 'block'
            }
        })

        nav.addEventListener('mouseleave', () => {
            nav.style.display = 'none'
        })

        for(var i=0; i< lien.length; i++){
            lien[i].addEventListener('click', () => {
                nav.style.display = 'none'
            })
        }


    }
}