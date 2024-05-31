document.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:{
      delay:2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
/* ----------------địa chỉ nhận hàng------------------------- */

  document.getElementById('open-address-form').addEventListener('click', function() {
    document.getElementById('address-form-container').style.display = 'flex';
  });
  
  document.getElementById('address-close').addEventListener('click', function() {
    document.getElementById('address-form-container').style.display = 'none';
  });
  
/* ----------------đăng nhập------------------------- */
// const formOpenBtn = document.querySelector("#form-open"),
// home = document.querySelector(".home"),
// formContainer = document.querySelector(".form-container"),
// formCloseBtn = document.querySelector(".login-close");


// formOpenBtn.addEventListener("click",() => home.classList.add("show"))
// formCloseBtn.addEventListener("click",() => home.classList.remove("show"))


