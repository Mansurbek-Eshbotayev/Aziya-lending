let elCarouselList = document.querySelector(".count__cover");
let listFragment = new DocumentFragment();

function GetCount() {
  // elCarouselList.innerHTML = "";

  fetch("http://172.20.10.5:8080/api/school-info")
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        // console.log(data);
        let newItem = document.createElement("div");
        newItem.setAttribute("class", "count__list");
        let info = `
        <div class="count__item">
              ${data.graduateAmount}
              <span> Выпускников </span>
            </div>
            <div class="count__item">
            ${data.branchAmount}
              <span> Филлиала </span>
            </div>
            <div class="count__item">
            ${data.studentAmount}
              <span> Учеников </span>
            </div>
            <div class="count__item">
            ${data.mediumOptScore}
              <span> Средний балл ОРТ </span>
            </div>
        `;
        newItem.innerHTML = info;
        listFragment.appendChild(newItem);
      }
      elCarouselList.appendChild(listFragment);
    })
    .catch((err) => console.log(err));
}

GetCount();

// Get Video
let elVideo = document.querySelector(".about__cover");
let VideoFragment = new DocumentFragment();

function GetVideo() {
  elVideo.innerHTML = "";

  fetch("http://172.20.10.5:8080/api/video", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        // console.log(data);
        let newItem = document.createElement("div");
        newItem.setAttribute("class", "about__video");
        let info = `
        <iframe
        src="https://www.youtube.com/embed/${data.url}"
        title="Mortal Kombat 1 - Official It’s In Our Blood Trailer ft. Dave Bautista"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
        `;
        newItem.innerHTML = info;
        VideoFragment.appendChild(newItem);
      }
      elVideo.appendChild(VideoFragment);
    })
    .catch((err) => console.log(err));
}

GetVideo();

// Get Student
let elStudentList = document.querySelector(".student__list");
let StudentFragment = new DocumentFragment();

function GetStudent() {
  // elStudentList.innerHTML = "";

  fetch("http://172.20.10.5:8080/api/student/get-all", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        // console.log(data);
        data.forEach((item) => {
          let newItem = document.createElement("li");
          newItem.setAttribute("class", "student__item");
          let info = `
          <div>
          <img
            class="student__img"
            src="data:image/jpeg;base64,${item.image.data}"
            alt="student"
          />
          <div class="item__info">
            <h3 class="item__title">${item.fullName}</h3>
            <p class="item__text">Ученик ${item.level} класса</p>
          </div>
          `;
          newItem.innerHTML = info;
          StudentFragment.appendChild(newItem);
        });
        elStudentList.appendChild(StudentFragment);
      }
    })
    .catch((err) => console.log(err));
}

GetStudent();

// Get News
let elSNewsList = document.querySelector(".news__list");
let NewsFragment = new DocumentFragment();

function GetNews() {
  // elSNewsList.innerHTML = "";

  fetch("http://172.20.10.5:8080/api/news/get-all", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log(data);
        data.forEach((item) => {
          let newItem = document.createElement("li");
          newItem.setAttribute("class", "student__item");
          let info = `
          <div class="news__wrap">
          <div class="news__info info">
            <h3 class="info__title">
            ${item?.title}
            </h3>
            <p class="info__text">
            ${item?.content}
            </p>
            <span class="info__data">${item?.createdAt}</span>
          </div>

          <div class="news__cover">
            <img
              class="news__img"
              src="data:image/jpeg;base64,${item?.image?.data}"
              alt="news"
            />
          </div>
        </div>
          `;
          newItem.innerHTML = info;
          NewsFragment.appendChild(newItem);
        });
        elSNewsList.appendChild(NewsFragment);
      }
    })
    .catch((err) => console.log(err));
}

GetNews();

// why Us

let elBtnOne = document.querySelector(".item__plus--one");
let elBtnTwo = document.querySelector(".item__plus--two");
let elBtnThree = document.querySelector(".item__plus--three");
let elBtnFour = document.querySelector(".item__plus--four");
let elBtnFive = document.querySelector(".item__plus--five");
let elBoxOne = document.querySelector(".item__box--one");
let elBoxTwo = document.querySelector(".item__box--two");
let elBoxThree = document.querySelector(".item__box--three");
let elBoxFour = document.querySelector(".item__box--four");
let elBoxFive = document.querySelector(".item__box--five");

elBtnOne.addEventListener("click", function () {
  elBoxOne.classList.add("showing");
});
elBoxOne.addEventListener("click", function () {
  elBoxOne.classList.remove("showing");
});
// second
elBtnTwo.addEventListener("click", function () {
  elBoxTwo.classList.add("showing");
});
elBoxTwo.addEventListener("click", function () {
  elBoxTwo.classList.remove("showing");
});

// three
elBtnThree.addEventListener("click", function () {
  elBoxThree.classList.add("showing");
});
elBoxThree.addEventListener("click", function () {
  elBoxThree.classList.remove("showing");
});
// four
elBtnFour.addEventListener("click", function () {
  elBoxFour.classList.add("showing");
});
elBoxFour.addEventListener("click", function () {
  elBoxFour.classList.remove("showing");
});
// five
elBtnFive.addEventListener("click", function () {
  elBoxFive.classList.add("showing");
});
elBoxFive.addEventListener("click", function () {
  elBoxFive.classList.remove("showing");
});

// header drop

elHeaderDroop = document.querySelector(".header__drop");
elOpenDroopBtn = document.querySelector(".sent__btn");
elCloseDroopBtn = document.querySelector(".drop__exit");

elOpenDroopBtn.addEventListener("click", function () {
  elHeaderDroop.classList.add("header__drop--on");
});
elCloseDroopBtn.addEventListener("click", function () {
  elHeaderDroop.classList.remove("header__drop--on");
});

// Modl form

elModal = document.querySelector(".modal");
elOpenModalBtn = document.querySelector(".hero__btn");
elSecondOpenModalBtn = document.querySelector(".item__btn");
elCloseModalBtn = document.querySelector(".info__exit");

elOpenModalBtn.addEventListener("click", function () {
  elModal.classList.add("modal-on");
});

elSecondOpenModalBtn.addEventListener("click", function () {
  elModal.classList.add("modal-on");
});

elCloseModalBtn.addEventListener("click", function () {
  elModal.classList.remove("modal-on");
});
