var types = document.querySelectorAll('.type a');


types.forEach(item => {
    item.addEventListener('click', function(){
        unActive = document.querySelector('.type .active');
        unActive.classList.remove('active');
        item.classList.add('active');
    })
});

const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section');
const animations = document.querySelectorAll('.ani');
animations[0].classList.add('active');
animations[1].classList.add('active');
sections[0].classList.add('active');
document.addEventListener('scroll', function(e){
    if(window.scrollY>200){
        nav.classList.add('fixedTop');
    }else{
        nav.classList.remove('fixedTop');
    }
    animations.forEach(function(item){
      if (item.offsetTop - window.scrollY < 350) {
        item.classList.add("active");
      }
    });
    sections.forEach(function(item){
      if (item.offsetTop - window.scrollY < 350) {
        item.classList.add("active");
      }
    });
})


const tabControls = document.querySelectorAll('.tab-control');
const tabPanels = document.querySelectorAll('.tab-panel');
tabControls[0].classList.add('active');
tabPanels[0].classList.add('active');
tabControls.forEach(item => {
    item.addEventListener('click', () => {
      console.log(item);
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
      });

      // Hiển thị tab panel tương ứng với tab được click
      const panelId = item.getAttribute('aria-controls');
      console.log(panelId);
      const targetPanel = document.getElementById(panelId);
      targetPanel.classList.add('active');
    });
  });