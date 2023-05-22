export var eventSlide = function () {
    var slideContainer = document.querySelectorAll("event-container")[0]; // getElementsByClassName는 style 속성을 포함하지 않고 반환하기 때문에 querySelector 사용.
    var prevBtn = document.querySelector(".prev");
    var nextBtn = document.querySelector(".next");
    var slideTotal = document.querySelectorAll(".slide-item").length / 2 - 1;
    var slideIndex = 0;
    function nextSlide() {
        if (slideIndex === slideTotal) {
            slideContainer.style.transform = "translateX(".concat(0, "px)");
            slideIndex = 0;
        }
        else {
            slideIndex += 1;
            slideContainer.style.transform = "translateX(".concat(slideIndex * -1200, "px)");
        }
    }
    function prevSlide() {
        if (slideIndex === 0) {
            slideIndex = slideTotal;
            slideContainer.style.transform = "translateX(".concat(slideTotal * -1200, "px)");
        }
        else {
            slideIndex -= 1;
            slideContainer.style.transform = "translateX(".concat(slideIndex * -1200, "px)");
        }
    }
    // 자동 슬라이드
    var interval = setInterval(nextSlide, 2000);
    // 마우스 오버 시 멈춤
    var mouse = [slideContainer, prevBtn, nextBtn];
    mouse.forEach(function (e) {
        e.addEventListener("mouseleave", function () {
            interval = setInterval(nextSlide, 2000);
        });
        e.addEventListener("mouseenter", function () {
            clearInterval(interval);
        });
    });
    // 버튼 클릭 시 이전 이후 이동
    nextBtn.addEventListener("click", function () {
        nextSlide();
    });
    prevBtn.addEventListener("click", function () {
        prevSlide();
    });
};
