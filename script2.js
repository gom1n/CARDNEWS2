// script2.js

document.addEventListener("DOMContentLoaded", function () {
    // 현재 페이지 URL에서 query 문자열을 가져옴
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // "imageSrc" 파라미터 값을 읽어옴
    const imageSrc = urlParams.get("imageSrc");

    // Swiper 초기화 코드 추가
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    if (imageSrc) {
        // 이미지 경로가 존재하는 경우 해당 이미지를 표시
        const swiperSlide = document.querySelector(".swiper-slide img");
        swiperSlide.src = imageSrc;
    }
});

// 다음화 보러 가기 버튼
function goToPage2(htmlLink) {
    window.location.href = `${htmlLink}`;
}

// 뒤로가기
function goBack() {
    window.history.back();
}

// 메인으로 가기
function goMain() {
    window.location.href = 'index.html';
}