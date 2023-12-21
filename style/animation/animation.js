const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section');
sections[0].classList.add('active');
document.addEventListener('scroll', function(e){
    if(window.scrollY>200){
        nav.classList.add('fixedTop');
    }else{
        nav.classList.remove('fixedTop');
    }
    sections.forEach(function(item){
        sections[0];
        
      if (item.offsetTop - window.scrollY < 350) {
        item.classList.add("active");
      }
    });
})


const year = document.querySelector('.year');
const dish = document.querySelector('.dish');
const staff = document.querySelector('.staff');
const people = document.querySelector('.people');
// console.log(year , dish , staff , people);

function change (name , number , timeDuration , index) {
    var interval = setInterval(function(){
        name.innerHTML = index;
        if(index === number){
            clearInterval(interval);
        }
        index++;
    } , timeDuration)
}

change(year , 18 ,200 ,0);
change(dish , 100 ,50 ,0);
change(staff , 50 ,100 ,0);
change(people , 15000 ,0.2 , 14000);



function activeNav() {
    var nav = document.querySelectorAll('.nav-item a');
    var unActive = document.querySelector('.nav-item a.active');
    unActive.classList.remove('active');
    nav.forEach(item => {
        console.log(item);
        item.addEventListener('click', function(e) {
            item.classList.add('active');
            console.log(item.id);
        });
    });
    console.log(nav);
}
activeNav();

// Lưu trạng thái trang
function savePageState() {
    // Lấy URL của trang hiện tại
    var currentPage = window.location.href;
    
    // Lưu URL vào Local Storage hoặc Session Storage
    localStorage.setItem('currentPage', currentPage);
    // hoặc sessionStorage.setItem('currentPage', currentPage);
}

// Khôi phục trạng thái trang khi trang được tải lại
function restorePageState() {
    // Lấy URL từ Local Storage hoặc Session Storage
    var savedPage = localStorage.getItem('currentPage');
    // hoặc var savedPage = sessionStorage.getItem('currentPage');

    // Kiểm tra xem có URL được lưu trữ không
    if (savedPage) {
        // Nếu có, chuyển hướng trình duyệt đến trang đã lưu
        window.location.href = savedPage;
    }
}



