const tombolMenu = document.querySelector('.tombol-list');
const nav = document.querySelector('.li-mobile');
const back = document.querySelector('.back');

window.onload = ()=> { 

    tombolMenu.onclick = function() {
        nav.classList.add('d')
        back.classList.add('show')
        back.classList.remove('none')
    }
    back.onclick = function() {
        nav.classList.remove('d')
        back.classList.add('none')
        back.classList.remove('show')
    }

    // mode light & dark
    const tombolMode = document.querySelectorAll('.tombol-mode');
    for(let i=0;i<tombolMode.length;i++){
        tombolMode[i].addEventListener('click', function() {
            document.body.classList.toggle('darkMode');
            if(document.body.classList.contains('darkMode')){
                tombolMode[i].classList.remove('bi-moon')
                tombolMode[i].classList.add('bi-sun')
            }else{
                tombolMode[i].classList.remove('bi-sun')
                tombolMode[i].classList.add('bi-moon')
            }         
        })
    }

    // navigasi aktip
    const filterLi = document.querySelectorAll('.filterLi');   
    for(let i = 0; i < filterLi.length; i++){
        filterLi[i].onclick = (selectAktip)=> {
            if(selectAktip.target.classList.contains('li')) {   
                filterLi[i].querySelector('.aktip').classList.remove('aktip')
                selectAktip.target.classList.add('aktip')
            }
        }
    }
    

    // tombol back fungisi ketika di klik nav ul hilang
    const liMobile = document.querySelectorAll('.li-mobile .li');
    for(let i = 0; i < liMobile.length; i++){
        liMobile[i].onclick = function() {
            nav.classList.remove('d')
            back.classList.add('none')
            back.classList.remove('show')
        }
    }

    // Smooth ketika scroll otomatis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e){
            e.preventDefault()
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior : "smooth"
            })
        })
    })   
    
    // fungsi fitur selengkapnya tentang journey
    const lihatJourney = document.querySelectorAll('.')


}























// const tombolMode = document.querySelectorAll('.tombol-mode');
// const bgLight = document.querySelectorAll('.bg-light');
// const fontdark = document.querySelectorAll('.font-dark');
// for(let i = 0; i < tombolMode.length; i++){
//     tombolMode[i].onclick = function() {
//         for(let a = 0; a < bgLight.length; a++){
//             bgLight[a].classList.add('bg-dark');
//             bgLight[a].classList.remove('bg-light');
//         }
//         for(let u = 0; u < fontdark.length; u++){
//             fontdark[u].classList.add('font-light')
//             fontdark[u].classList.remove('font-dark')
//         }
//         tombolMode[i].classList.add('bi bi')
       
//     }
// }
