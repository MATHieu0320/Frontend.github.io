const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const hamburger = document.getElementById("hamburger");
const affichage = document.querySelector(".header-Container-1");
const P = document.querySelector("#Paragraphe");
///////////////

const ul = document.querySelector("nav ul ");
const li = document.querySelectorAll("nav ul li");
const navA = document.querySelectorAll("nav a");
const Close = document.getElementById("close");

// navvbarrr
hamburger.addEventListener("click", () => {
  Close.style.display = "block";
  ul.classList.add("clickul");

  // ul.classList.remove("clickul2");_
  li.forEach((li) => {
    li.classList.add("clickLi");
  });
  navA.forEach((li) => {
    li.style.color = "black ";
  });
});
Close.addEventListener("click", () => {
  Close.style.display = "none";

  ul.classList.remove("clickul");

  ul.style.transition = "0.5s";
  li.forEach((li) => {
    li.classList.remove("clickLi");
  });
  navA.forEach((li) => {
    li.style.color = "white ";
  });
});

// slide
let result = 1;
function ChangementTexte(resulte) {
  if (resulte == 1) {
    // if (innerWidth < 1115) {
    //   br.style.display = "none";
    // }
    P.innerHTML = `       
         <p id="Paragraphe">
          We provide unmatched quality, confort, and style for properte<br />
          awners across the contry. Our experts comnine form and <br />
          function in bringing your vision to life. Create a room in your <br />
          own style with our collection and make your property a <br />
          reflection of you and what you love.
        </p>
       `;
  }
  if (resulte == 2) {
    P.innerHTML = `   
        <p id="Paragraphe">
      With stores all over the world, it's easy for you to find furniture<br> for your home or place of business.
      Locally , we're in most<br> major cities throughout the country.
      Find the branch nearest<br>you using our store locator. Any question? Don't hesitate to <br> concact us today.   </p>`;
  }
  if (resulte == 3) {
    P.innerHTML = `  
     <p id="Paragraphe">
    Lorem ipsum dolor sit, amet consectetur<br> adipisicing elit. Cumque consectetur beatae provident quae<br>
     pariatur aliquid saepe voluptatum nam ipsa reiciendis alias fugiat!<br>
      Quidem, suscipit asperiores minus reiciendis accusamus ad error rerum, <br>
      eligendi ratione distinctio eveniet.</p> `;
  }
}

btn1.addEventListener("click", () => {
  result--;

  if (result == 0) {
    result = 3;
  }
  if (innerWidth > 500) {
    ChangementTexte(result);
    affichage.style.background = `url("./room-homepage-master/images/${result}.jpg")`;

    // affichage.innerHTML = `<img src="./room-homepage-master/images/${result}.jpg" height = "100%" width = "100%" />`;
  } else if (innerWidth < 500) {
    ChangementTexte(result);
    affichage.style.background = `url("./room-homepage-master/images/mobile-image-hero-${result}.jpg")`;

    // affichage.innerHTML = `
    // <img src="./mobile-image-hero-${result}.jpg" height = "100%" width = "100%" class = ".JSimgmobile"/>
    // `;
  }
});

btn2.addEventListener("click", () => {
  result++;
  if (result == 4) {
    result = 1;
  }
  if (innerWidth > 500) {
    ChangementTexte(result);
    affichage.style.background = `url("./room-homepage-master/images/${result}.jpg")`;

    // affichage.innerHTML = `

    // <img src="./room-homepage-master/images/${result}.jpg" height = "100%" width = "100%" />`;
  } else if (innerWidth < 500) {
    ChangementTexte(result);

    affichage.style.background = `url("./room-homepage-master/images/mobile-image-hero-${result}.jpg")`;

    // affichage.innerHTML = `
    // <img src="./mobile-image-hero-${result}.jpg" height = "100%" width = "100%" class = ".JSimgmobile"/>
    // `;
  }
});
