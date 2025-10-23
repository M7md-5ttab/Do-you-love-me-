const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});
// no button functionality
// no button functionality
noBtn.addEventListener("click", () => {
  // يهز الجهاز (لو مدعوم)
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }

  // يهز الزرار نفسه
  noBtn.classList.add("shake");

  // يشيل الكلاس بعد الأنيميشن يخلص
  setTimeout(() => {
    noBtn.classList.remove("shake");
  }, 300);

  // ينقل الزرار لمكان عشوائي جديد
  const newX = Math.floor(Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight));

  noBtn.style.position = "absolute"; // مهم علشان يتحرك جوه الـ container
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});
// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});


let noClickCount = 0; // عداد ضغطات زرار No

// no button functionality
function handleNoClick() {
  // يهز الجهاز (لو مدعوم)
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }

  // يهز الزرار نفسه
  noBtn.classList.add("shake");
  setTimeout(() => {
    noBtn.classList.remove("shake");
  }, 300);

  // ينقل الزرار لمكان عشوائي جديد
  const newX = Math.floor(Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight));

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  // زود عدد الضغطات
  noClickCount++;

  // بعد 5 مرات يتبدل
  if (noClickCount === 3) {
    // شيل الـ event بتاع no
    noBtn.removeEventListener("click", handleNoClick);

    // غير النص والشكل (اختياري)
    noBtn.textContent = "Yes 😍";
    noBtn.style.backgroundColor = "#ef4444"; // أخضر زي yes

    // ضيف event yes للزرار
    noBtn.addEventListener("click", () => {
      questionContainer.style.display = "none";
      heartLoader.style.display = "inherit";

      setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "inherit";
        gifResult.play();
      }, 3000);
      setTimeout(() => {
      const phone = "201062947198"; // الرقم بدون +
      const message = "بحبك ياحموكشة 😍";
      window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    }, 5000);
    });
  }
}

// اربط noBtn بالوظيفة
noBtn.addEventListener("click", handleNoClick);

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();

    // بعد ظهور النتيجة بـ 3 ثواني، اعمل إعادة توجيه لواتساب
    setTimeout(() => {
      const phone = "201062947198"; // الرقم بدون +
      const message ="توووووووحفة ياحموكشة ❤️😍";
      window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    }, 1000);

  }, 3000);
});

