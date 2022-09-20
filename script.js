///header///
// tag a header
const header1 = document.querySelector("header");
const aHeader = document.querySelector(".logo");

const imgHeader = document.createElement("img");
imgHeader.setAttribute("src", "img/logo.svg");
aHeader.appendChild(imgHeader);

//tag ul header
const ulHeader = document.querySelector(".navbar");
let Counter = "";
let liArray = ["home", "categories", "courses", "about", "contact"];
for (let i = 0; i < liArray.length; i++) {
  Counter += `<li><a href="#${liArray[i]}">${liArray[i]}</a></li>`;
}
ulHeader.innerHTML = Counter;

// header icon

const iconHeaders = document.querySelector(".header-icons");
const aIconn = ["bi bi-person", "bi bi-balloon-heart", "bi bi-cart"];
aIconn.forEach((item) => {
  const aHeaders = document.createElement("a");
  const iHeaders = document.createElement("i");
  iHeaders.className = item;
  aHeaders.appendChild(iHeaders);
  iconHeaders.append(aHeaders);
});

const ol = document.createElement("div");
ol.className = "bx bx-menu";
ol.setAttribute("id", "menu-icon");
const iOl = document.createElement("i");
iOl.className = "bi bi-list";

ol.appendChild(iOl);
iconHeaders.appendChild(ol);
console.log(iconHeaders);

/////////////////////////////////////////////////////////////

//section home
const home = document.querySelector(".home");
const homeText = document.createElement("div");
homeText.className = "home-text";

const h6HomoText = document.createElement("h6");
h6HomoText.innerText = "Best online learning platform";
homeText.appendChild(h6HomoText);

const h1HomoText = document.createElement("h1");
h1HomoText.innerText = "Accessible Online Courses For All";
homeText.appendChild(h1HomoText);

const pHomoText = document.createElement("p");
pHomoText.innerText = "Own your future learning new skills online";
homeText.appendChild(pHomoText);

const latter = document.createElement("div");
latter.className = "latter";
const inputLatter = [
  {
    type: "email",
    placeholder: "write your Email",
  },
  {
    type: "submit",
    placeholder: "Let's Start",
  },
];

inputLatter.forEach((i) => {
  const inputL = document.createElement("input");
  inputL.setAttribute("type", i.type);
  inputL.setAttribute("placeholder", i.placeholder);
  latter.appendChild(inputL);
});

homeText.appendChild(latter);

home.appendChild(homeText);

const homeImg = document.createElement("div");
homeImg.className = "home-img";

const homeI = document.createElement("img");
homeI.setAttribute("src", "img/home.png");
homeImg.appendChild(homeI);

home.appendChild(homeImg);

/////////////////////////////////////////////////////////////

//section container

const container = document.querySelector(".container");

const containerBox = [
  "img/con1.svg",
  "img/con2.svg",
  "img/con3.svg",
  "img/con4.svg",
];
containerBox.forEach((b) => {
  const cBox = document.createElement("div");
  cBox.className = "container-box";

  const containerImg = document.createElement("div");
  containerImg.className = "container-img";

  const cImg = document.createElement("img");
  cImg.setAttribute("src", b);

  containerImg.appendChild(cImg);

  cBox.appendChild(containerImg);

  const containerText = document.createElement("div");
  containerText.className = "container-text";

  const h4CT = document.createElement("h4");
  h4CT.innerText = "5K";
  containerText.appendChild(h4CT);

  const pCT = document.createElement("p");
  pCT.innerText = "Online Courses";
  containerText.appendChild(pCT);

  cBox.appendChild(containerText);

  container.appendChild(cBox);
});

/////////////////////////////////////////////////////////////

//section categories

const categories = document.querySelector(".categories");

const centerText = document.createElement("div");
centerText.className = "center-text";

const h5CenterText = document.createElement("h5");
h5CenterText.innerText = "CATEGORIES";
centerText.appendChild(h5CenterText);

const h2CenterText = document.createElement("h2");
h2CenterText.innerText = "Popular Categories";
centerText.appendChild(h2CenterText);

categories.appendChild(centerText);

const categoriesContent = document.createElement("div");
categoriesContent.className = "categories-content";

const categoriesBox = [
  {
    img: "img/cate1.png",
    h3: "dolphin Development",
    p: "1 Courses",
  },
  {
    img: "img/cate2.png",
    h3: "Angular Development",
    p: "5 Courses",
  },
  {
    img: "img/cate3.png",
    h3: "Node Js Development",
    p: "10 Courses",
  },
  {
    img: "img/cate1.png",
    h3: "Swift Development",
    p: "7 Courses",
  },
];

categoriesBox.forEach((boxes) => {
  const box = document.createElement("div");
  box.className = "box";

  const imgBox = document.createElement("img");
  imgBox.setAttribute("src", boxes.img);
  box.appendChild(imgBox);

  const h3Box = document.createElement("h3");
  h3Box.innerText = boxes.h3;
  box.appendChild(h3Box);

  const pBox = document.createElement("p");
  pBox.innerText = boxes.p;
  box.appendChild(pBox);

  categoriesContent.appendChild(box);
});

categories.appendChild(categoriesContent);

const mainBtn = document.createElement("div");
mainBtn.className = "main-btn";

const btn1 = document.createElement("a");
btn1.setAttribute("href", "#");
btn1.className = "btn";
btn1.innerText = "All Categories";
mainBtn.appendChild(btn1);

categories.appendChild(mainBtn);

/////////////////////////////////////////////////////////////

//section courses

const courses = document.querySelector(".courses");

const centerText2 = document.createElement("div");
centerText2.className = "center-text";

const h2CenterText2 = document.createElement("h2");
h2CenterText2.innerText = "Explore Popular Courses";
centerText2.appendChild(h2CenterText2);

courses.appendChild(centerText2);

const coursesContent = document.createElement("div");
coursesContent.className = "courses-content";
courses.appendChild(coursesContent);

const rowInformation = [
  {
    img: "img/js.jpg",
    h5: "$99.00",
    h3: "The Complete HTML CSS JS Course 2022",
    h6: "40 hours",
    p: "{9654 Reviews}",
    star: `<a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-half"></i></a>`,
  },
  {
    img: "img/C-Complete-Course-For-Beginners-2021.png",
    h5: "$60.00",
    h3: "C# Complete Course For Beginners 2021",
    h6: "23 hours 10 minutes",
    p: "{460 Reviews}",
    star: `<a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star"></i></a>
    <a href="#"><i class="bi bi-star"></i></a>`,
  },
  {
    img: "img/angular-JS-online-training-nareshit.jpg",
    h5: "$20.00",
    h3: "Complete AngularJS Course 2022",
    h6: "09 hours 20 minutes",
    p: "{1150 Reviews}",
    star: `<a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star"></i></a>`,
  },
  {
    img: "img/react-js-tutorial-for-beginners.png",
    h5: "$20.00",
    h3: "The Complete ReactJS Course 2022",
    h6: "45 hours 30 minutes",
    p: "{8420 Reviews}",
    star: `<a href="#"><i class="bi bi-star-fill"></i></a>
   <a href="#"><i class="bi bi-star-fill"></i></a>
   <a href="#"><i class="bi bi-star-fill"></i></a>
   <a href="#"><i class="bi bi-star-fill"></i></a>
   <a href="#"><i class="bi bi-star-fill"></i></a>`,
  },
  {
    img: "img/Kotlin.jpg",
    h5: "$20.00",
    h3: "The Complete Kotlin Course 2020",
    h6: "12 hours 20 minutes",
    p: "{2341 Reviews}",
    star: `<a href="#"><i class="bi bi-star-fill"></i></a>
   <a href="#"><i class="bi bi-star-fill"></i></a>
   <a href="#"><i class="bi bi-star-fill"></i></a>
   <a href="#"><i class="bi bi-star-fill"></i></a>
   <a href="#"><i class="bi bi-star-half"></i></a>`,
  },
  {
    img: "img/32362dd9-7187-4ca7-83e2-b9c5e8343de2.jpg",
    h5: "$20.00",
    h3: "The Complete VueJS Course 2019",
    h6: "10 hours 35 minutes",
    p: "{4685 Reviews}",
    star: `<a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star-fill"></i></a>
    <a href="#"><i class="bi bi-star"></i></a>
    <a href="#"><i class="bi bi-star"></i></a>
    <a href="#"><i class="bi bi-star"></i></a>`,
  },
];

rowInformation.forEach((items) => {
  const row = document.createElement("div");
  row.className = "row";

  const imgRow = document.createElement("img");
  imgRow.setAttribute("src", items.img);
  row.appendChild(imgRow);

  const coursesText = document.createElement("div");
  coursesText.className = "courses-text";
  row.appendChild(coursesText);

  const h5CoursesText = document.createElement("h5");
  h5CoursesText.innerText = items.h5;
  coursesText.appendChild(h5CoursesText);

  const h3CoursesText = document.createElement("h3");
  h3CoursesText.innerText = items.h3;
  coursesText.appendChild(h3CoursesText);

  const h6CoursesText = document.createElement("h6");
  h6CoursesText.innerText = items.h6;
  coursesText.appendChild(h6CoursesText);

  const rating = document.createElement("div");
  rating.className = "rating";
  coursesText.appendChild(rating);

  const star = document.createElement("div");
  star.className = "star";
  star.innerHTML = items.star;
  rating.appendChild(star);

  const review = document.createElement("div");
  review.className = "review";
  const pReview = document.createElement("p");
  pReview.innerHTML = items.p;
  review.appendChild(pReview);
  rating.appendChild(review);

  coursesContent.appendChild(row);
});

const mainBtn2 = document.createElement("div");
mainBtn2.className = "main-btn";

const btn2 = document.createElement("a");
btn2.setAttribute("href", "#");
btn2.className = "btn";
btn2.innerText = "Buy Now";
mainBtn2.appendChild(btn2);

courses.appendChild(mainBtn2);

/////////////////////////////////////////////////////////////

//section logo

const logos = document.querySelector(".logos");

const cTxt = document.createElement("div");
cTxt.className = "center-text";

const h5Ctxt = document.createElement("h5");
h5Ctxt.innerText = "Trusted By";
cTxt.appendChild(h5Ctxt);

const h2Ctxt = document.createElement("h2");
h2Ctxt.innerText = "500+ Leading Universities And Companies";
cTxt.appendChild(h2Ctxt);

logos.appendChild(cTxt);

const logosContent = document.createElement("div");
logosContent.className = "logo-content";
logos.appendChild(logosContent);

const logosImg = [
  "img/cta1.png",
  "img/cta2.png",
  "img/cta3.png",
  "img/cta4.png",
  "img/cta5.png",
];
logosImg.forEach((logo) => {
  const logoImg = document.createElement("div");
  logoImg.className = "logo-img";
  logosContent.appendChild(logoImg);

  const imgs = document.createElement("img");
  imgs.setAttribute("src", logo);

  logoImg.appendChild(imgs);
});

/////////////////////////////////////////////////////////////

//section about

const about = document.querySelector(".about");

const aboutImg = document.createElement("div");
aboutImg.className = "about-img";
about.appendChild(aboutImg);

const aboutI = document.createElement("img");
aboutI.setAttribute("src", "img/about.png");
aboutImg.appendChild(aboutI);

const aboutText = document.createElement("div");
aboutText.className = "about-text";
about.appendChild(aboutText);

const aboutH2 = document.createElement("h2");
aboutH2.innerText = "Want to share your knowledge? Join us a Mentor";
aboutText.appendChild(aboutH2);

const aboutP = document.createElement("p");
aboutP.innerText = `High-definition video is video of higher resolution and quality than
standard-definition. While there is no standardized meaning for
high-definition, generally any video.`;
aboutText.appendChild(aboutP);

const aboutH4 = document.createElement("h4");
aboutH4.innerText = "Best Courses";
aboutText.appendChild(aboutH4);

const aboutH5 = document.createElement("h5");
aboutH5.innerText = "Top rated Instructors";
aboutText.appendChild(aboutH5);

const aboutA = document.createElement("a");
aboutA.className = "btn";
aboutA.innerText = "Read More";
aboutText.appendChild(aboutA);

/////////////////////////////////////////////////////////////

//Footer

const footer = document.querySelector("footer");

const mainFooter = document.createElement("div");
mainFooter.className = "main-footer";
footer.appendChild(mainFooter)
const contentF = [
     `<li>
      <a href="#"><img src="img/logo.svg" /></a>
      </li>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Twitter</a></li>`,
     `<li><a href="#">Home</a></li>
      <li><a href="#">Categories</a></li>
      <li><a href="#">Courses</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>`,
      ` 
      <li><a href="#">Profile</a></li>
      <li><a href="#">Login</a></li>
      <li><a href="#">Register</a></li>
      <li><a href="#">Instructor</a></li>
      <li><a href="#">Dashboard</a></li>`,
      ` <li>
      <a href="#">San Francisco, California <br />, CA 94108</a>
      </li>
      <li><a href="#">dreamslms@example.com</a></li>
      <li><a href="#">01646895741</a></li>
      <br /><br /><br />`
];

contentF.forEach((x)=>{
  const footerContent = document.createElement('div')
  footerContent.className = 'footer-content';
  footerContent.innerHTML = x;
  mainFooter.appendChild(footerContent)
})




/////////////////////////////////////////////////////////////

//llast end

const lastText = document.querySelector('.last-text');

const pLast = document.createElement('p');
pLast.innerText = '2022 Mahdi Rezaei All rights reserved.'

lastText.appendChild(pLast)





/////////////////////////////////////////////////////////////
// dynamic navbar
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
  nav.classList.remove("open");
});

const Menu = document.querySelector("#menu-icon");
const nav = document.querySelector(".navbar");

Menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});
