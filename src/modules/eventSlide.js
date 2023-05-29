export const eventSlide = () => {
  const slideContainer = document.querySelectorAll(".event-container")[0]; // getElementsByClassName는 style 속성을 포함하지 않고 반환하기 때문에 querySelector 사용.
  const prevBtn = document.querySelectorAll(".prev")[0];
  const nextBtn = document.querySelectorAll(".next")[0];
  let slideTotal = document.querySelectorAll(".slide-item").length / 2 - 1;
  let slideIndex = 0;

  function nextSlide() {
    if (slideIndex === slideTotal) {
      slideContainer.style.transform = `translateX(${0}px)`;
      slideIndex = 0;
    } else {
      slideIndex += 1;
      slideContainer.style.transform = `translateX(${slideIndex * -1200}px)`;
    }
  }

  function prevSlide() {
    if (slideIndex === 0) {
      slideIndex = slideTotal;
      slideContainer.style.transform = `translateX(${slideTotal * -1200}px)`;
    } else {
      slideIndex -= 1;
      slideContainer.style.transform = `translateX(${slideIndex * -1200}px)`;
    }
  }

  // 자동 슬라이드
  let interval = setInterval(nextSlide, 2000);

  // 마우스 오버 시 멈춤
  const mouse = [slideContainer, prevBtn, nextBtn];
  mouse.forEach((e) => {
    e.addEventListener("mouseleave", () => {
      interval = setInterval(nextSlide, 2000);
    });
    e.addEventListener("mouseenter", () => {
      clearInterval(interval);
    });
  });

  // 버튼 클릭 시 이전 이후 이동
  nextBtn.addEventListener("click", () => {
    nextSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
  });
};
