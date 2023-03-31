export const eventSlide = () => {
  const slideContainer = document.getElementsByClassName("slide-container")[0];
  let slideItem = document.querySelectorAll(".slide-item");
  let slideTotal = slideItem.length / 2 - 1;
  let slideIndex = 0;
  const prevBtn = document.querySelectorAll(".prev")[0];
  const nextBtn = document.querySelectorAll(".next")[0];

  function nextSlide() {
    if (slideIndex == slideTotal) {
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
