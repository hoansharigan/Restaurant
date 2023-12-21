const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section');
const animations = document.querySelectorAll('.ani');
sections[0].classList.add('active');
console.log(animations);

document.addEventListener('scroll', function(e){
    if(window.scrollY>200){
        nav.classList.add('fixedTop');
    }else{
        nav.classList.remove('fixedTop');
    }
    animations.forEach(function(item){  
      if (item.offsetTop - window.scrollY < 800) {
        item.classList.add("active");
      }
    });
    sections.forEach(function(item){
      if (item.offsetTop - window.scrollY < 350) {
        item.classList.add("active");
      }
    });
})

