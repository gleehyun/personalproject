document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./coverletter/img/artwork/Ellipse1.png",
    "./coverletter/img/artwork/Ellipse2.png",
    "./coverletter/img/artwork/Ellipse3.png",
    "./coverletter/img/artwork/Ellipse4.png",
    "./coverletter/img/artwork/Ellipse5.png",
    "./coverletter/img/artwork/Ellipse6.png",
    "./coverletter/img/artwork/Ellipse7.png",
    "./coverletter/img/artwork/Ellipse8.png",
    "./coverletter/img/artwork/Ellipse9.png",
    "./coverletter/img/artwork/Ellipse10.png",
  ];

  const artSlide = document.querySelector(".art_slide");
  let currentIndex = 0;
  const visibleImageCount = 5; // 화면에 보이는 이미지 수
  const artImage = document.querySelector("#art");

  function showImages(startIndex) {
    artSlide.innerHTML = "";
    for (let i = 0; i < visibleImageCount; i++) {
      const imageIndex = (startIndex + i) % images.length;
      const img = document.createElement("img");
      img.src = images[imageIndex];
      img.alt = "Artwork";
      img.addEventListener("click", function () {
        const imageSrc = this.src;

        // 기존 이미지를 서서히 페이드 아웃
        artImage.style.transition = "opacity 1.1s"; // 트랜지션 시간 설정 (1.1초)
        artImage.style.opacity = 0;

        setTimeout(function () {
          // 이미지 교체
          artImage.src = imageSrc;

          // 새 이미지를 서서히 페이드 인
          setTimeout(function () {
            artImage.style.opacity = 1;
          }, 50); // 50밀리초(0.05초) 지연 후 새 이미지를 표시
        }, 300); // 1100밀리초(1.1초) 지연 후 이미지를 변경합니다.
      });
      artSlide.appendChild(img);
    }
  }

  function nextImages() {
    currentIndex = (currentIndex + visibleImageCount) % images.length;
    showImages(currentIndex);
  }

  function prevImages() {
    currentIndex =
      (currentIndex - visibleImageCount + images.length) % images.length;
    showImages(currentIndex);
  }

  // 초기 이미지 표시
  showImages(currentIndex);

  // 다음 이미지 표시
  const nextButton = document.getElementById("next_button");
  nextButton.addEventListener("click", nextImages);

  // 이전 이미지 표시
  const prevButton = document.getElementById("pre_button");
  prevButton.addEventListener("click", prevImages);
});



//*page3

document.addEventListener("DOMContentLoaded", function () {
  const objects = document.querySelectorAll(".object");
  const conceptTexts = document.querySelectorAll(".concept_text");

  objects.forEach((object) => {
    object.addEventListener("click", () => {
      const conceptClass = object.classList[1];

      // 모든 concept_text 숨김 (opacity 0)
      conceptTexts.forEach((text) => {
        text.style.display = "none";
        text.style.opacity = 0;
      });

      // 클릭된 concept_text 서서히 나타남 (opacity 1)
      const clickedText = document.querySelector(
        `.concept_text.${conceptClass}`
      );
      clickedText.style.display = "block";
      setTimeout(function () {
        clickedText.style.opacity = 1;
      }, 100); // 50 밀리초 지연 후 나타납니다.
    });
  });
});
