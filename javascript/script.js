import { data } from "./data.js";

//automatically keeps copy right year up to date //
const copyRightYearEl = document.querySelector(".year");
const curYear = new Date().getFullYear();
copyRightYearEl.textContent = curYear;

////////////////////////////////////////////////////////////
// Make mobile navigatoion work //
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////////
// Smooth scrolling animation //
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        rootMargin: "-80px",
      });
    }
    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //Close  mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
////////////////////////////////////////////////////////////
// Sticky Navigation //
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
  }
);
observer.observe(sectionHeroEl);
/////////////////////////////////////////////////////////////
//Dynamically Generate Appetizer Menu
const renderAppetizers = () => {
  let appetizersHtml = "";
  let menuEl = document.querySelector(".appetizers");
  data.appetizers.forEach((item) => {
    appetizersHtml += `  
        <div class="menu">
            <img src="${item.image}" class="menu-img" alt="Japanese-Gyoza" />
            <div class="menu-content">
              <div class="menu-tags"> <span class="tag tag--${item.tag}">${item.tagTitle}</span></div>
              <p class="menu-title">${item.title}</p>
              <ul class="menu-attributes">
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="flame-outline"></ion-icon><span><strong>${item.description}</strong></span>
                </li>
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="restaurant-outline"></ion-icon><span>
                    <strong>&#36; ${item.price}</strong></span>
                </li>
              </ul>
            </div>
          </div>
      `;
  });

  return (menuEl.innerHTML = appetizersHtml);
};
renderAppetizers();
/////////////////////////////////////////////////////////////
//Dynamically Generate A La Carte/Entrees Menu
const desserts = () => {
  let bevAndDesHtml = "";
  let menuEl = document.querySelector(".desserts");
  data.desserts.forEach((item) => {
    bevAndDesHtml += `  
        <div class="menu">
            <img src="${item.image}" class="menu-img" alt="Japanese-Gyoza" />
            <div class="menu-content">
              <div class="menu-tags"> <span class="tag tag--${item.tag}">${item.tagTitle}</span></div>
              <p class="menu-title">${item.title}</p>
              <ul class="menu-attributes">
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="flame-outline"></ion-icon><span><strong>${item.description}</strong></span>
                </li>
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="restaurant-outline"></ion-icon><span>
                    <strong>&#36; ${item.price}</strong></span>
                </li>
              </ul>
            </div>
          </div>
      `;
  });

  return (menuEl.innerHTML = bevAndDesHtml);
};
desserts();
/////////////////////////////////////////////////////////////
//Dynamically Generate A La Carte/Entrees Menu
const renderEntrees = () => {
  let entriesHtml = "";
  let menuEl = document.querySelector(".entrees");
  data.entrees.forEach((item) => {
    entriesHtml += `  
        <div class="menu">
            <img src="${item.image}" class="menu-img" alt="Japanese-Gyoza" />
            <div class="menu-content">
              <div class="menu-tags"> <span class="tag tag--${item.tag}">${item.tagTitle}</span></div>
              <p class="menu-title">${item.title}</p>
              <ul class="menu-attributes">
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="flame-outline"></ion-icon><span><strong>${item.description}</strong></span>
                </li>
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="restaurant-outline"></ion-icon><span>
                    <strong>&#36; ${item.price}</strong></span>
                </li>
              </ul>
            </div>
          </div>
      `;
  });

  return (menuEl.innerHTML = entriesHtml);
};
renderEntrees();
/////////////////////////////////////////////////////////////
//Dynamically Generate Fried Rice Menu
const renderFriedRice = () => {
  let friedRiceHtml = "";
  let menuEl = document.querySelector(".fried-rice");
  data.rice.forEach((item) => {
    friedRiceHtml += `  
        <div class="menu">
            <img src="${item.image}" class="menu-img" alt="Japanese-Gyoza" />
            <div class="menu-content">
              <div class="menu-tags"> <span class="tag tag--${item.tag}">${item.tagTitle}</span></div>
              <p class="menu-title">${item.title}</p>
              <ul class="menu-attributes">
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="flame-outline"></ion-icon><span><strong>${item.description}</strong></span>
                </li>
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="restaurant-outline"></ion-icon>
                    <strong>&#36; ${item.price}</strong></span>
                </li>
              </ul>
            </div>
          </div>
      `;
  });

  return (menuEl.innerHTML = friedRiceHtml);
};
renderFriedRice();
/////////////////////////////////////////////////////////////
//Dynamically Generate Noodles Menu
const renderNoodles = () => {
  let noodlesHtml = "";
  let menuEl = document.querySelector(".noodles");
  data.noodles.forEach((item) => {
    noodlesHtml += `  
        <div class="menu">
            <img src="${item.image}" class="menu-img" alt="Japanese-Gyoza" />
            <div class="menu-content">
              <div class="menu-tags"> <span class="tag tag--${item.tag}">${item.tagTitle}</span></div>
              <p class="menu-title">${item.title}</p>
              <ul class="menu-attributes">
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="flame-outline"></ion-icon><span><strong>${item.description}</strong></span>
                </li>
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="restaurant-outline"></ion-icon><span>
                    <strong>&#36; ${item.price}</strong></span>
                </li>
                <li class="menu-attribute">
                <ion-icon class="menu-icon" name="star-outline"></ion-icon><span><strong>${item.options}</strong></span>
              </li>
              </ul>
            </div>
          </div>
      `;
  });

  return (menuEl.innerHTML = noodlesHtml);
};
renderNoodles();
/////////////////////////////////////////////////////////////
//Dynamically Generate Salads Menu
const renderSalads = () => {
  let saladsHtml = "";
  let menuEl = document.querySelector(".salads");
  data.salads.forEach((item) => {
    saladsHtml += `  
        <div class="menu">
            <img src="${item.image}" class="menu-img" alt="Japanese-Gyoza" />
            <div class="menu-content">
              <div class="menu-tags"> <span class="tag tag--${item.tag}">${item.tagTitle}</span></div>
              <p class="menu-title">${item.title}</p>
              <ul class="menu-attributes">
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="flame-outline"></ion-icon><span><strong>${item.description}</strong></span>
                </li>
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="restaurant-outline"></ion-icon><span>
                    <strong>&#36; ${item.price}</strong></span>
                </li>
              </ul>
            </div>
          </div>
      `;
  });

  return (menuEl.innerHTML = saladsHtml);
};

renderSalads();
/////////////////////////////////////////////////////////////
//Dynamically Generate Soup Menu
const renderSoups = () => {
  let soupsHtml = "";
  let menuEl = document.querySelector(".soups");
  data.soups.forEach((item) => {
    soupsHtml += `  
        <div class="menu">
            <img src="${item.image}" class="menu-img" alt="Japanese-Gyoza" />
            <div class="menu-content">
              <div class="menu-tags"> <span class="tag tag--${item.tag}">${item.tagTitle}</span></div>
              <p class="menu-title">${item.title}</p>
              <ul class="menu-attributes">
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="flame-outline"></ion-icon><span><strong>${item.description}</strong></span>
                </li>
                <li class="menu-attribute">
                  <ion-icon class="menu-icon" name="restaurant-outline"></ion-icon><span>
                    <strong>${item.price}</strong></span>
                </li>
              </ul>
            </div>
          </div>
      `;
  });

  return (menuEl.innerHTML = soupsHtml);
};
renderSoups();
{
  /*snippet for future growth when ratings could be applied to dishes~to keep card uniformity each menu item in a row needs this attribute~use in any literal
 <li class="menu-attribute">
  <ion-icon class="menu-icon" name="star-outline"></ion-icon><span><strong>${item.rating}</strong> rating
    (537)</span>
</li> */
}
