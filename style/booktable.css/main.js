const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section');
sections[0].classList.add('active');
sections[1].classList.add('active');
document.addEventListener('scroll', function(e){
    if(window.scrollY>200){
        nav.classList.add('fixedTop');
    }else{
        nav.classList.remove('fixedTop');
    }
    sections.forEach(function(item){
        if (item.offsetTop - window.scrollY < 350) {
          item.classList.add("active");
        }
      });
})