var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    responsive: {
      540: {
        slidesPerView: 1
      },
      749: {
        slidesPerView: 1
      }
    },
});

const main = document.querySelector('.main');
const header = document.getElementById("header");
const sections = document.querySelectorAll('section[id]');
const menuOpen = document.querySelector('.navOpen-btn');
const menuClose = document.querySelector('.navClose-btn')
const menu = document.querySelector(".menu-content");
const links = document.querySelectorAll(".nav-link");
const bannerSliderObj = [
  {
    "id": 1,
    "image": "img/homeImg1.jpg",
    "subtitle": "We really like what we do.",
    "title": "Coffee Beans with a <br>Perfect Aroma"
  },
  {
    "id": 2,
    "image": "img/homeImg2.jpg",
    "subtitle": "Enjoy the finest coffee drinks.",
    "title": "Enjoy our exclusive <br>Coffee and Cocktails"
  },
  {
    "id": 3,
    "image": "img/homeImg3.jpg",
    "subtitle": "Making our coffee with love.",
    "title": "Alluring and Fragrant <br>Coffee Aroma"
  }
]
const ourMenu = [
  {
    "id": 1,
    "image": "img/menuImg2.jpg",
    "name": "Brewed Coffee",
    "content": "Your choice of freshly brewed coffee. Refills at $2 each.",
    "discount": 2.50,
    "real": 2.75
  },
  {
    "id": 2,
    "image": "img/menuImg3.jpg",
    "name": "Espresso Frappe",
    "content": "Espresso blended with milk and ice. Topped with whipped cream.",
    "discount": 4.25,
    "real": 4.95
  },
  {
    "id": 3,
    "image": "img/menuImg4.jpg",
    "name": "Hazelnut Mocha",
    "content": "House of blended roast coffee, chocolate, hazelnut, milk and ice",
    "discount": 4.75,
    "real": 5.25
  },
  {
    "id": 4,
    "image": "img/menuImg2.jpg",
    "name": "Cappucino",
    "content": "Espresso and steamed milk (A little more foam)",
    "discount": 5.02,
    "real": 5.25
  }
]
const timeLists = [
  {
    "day": "Sunday",
    "time": "Closed"
  },
  {
    "day": "Monday",
    "time": "7.00am - 3.00pm"
  },
  {
    "day": "Tuesday",
    "time": "7.00am - 3.00pm"
  },
  {
    "day": "Wednesday",
    "time": "7.00am - 3.00pm"
  },
  {
    "day": "Thursday",
    "time": "7.00am - 3.00pm"
  },
  {
    "day": "Friday",
    "time": "7.00am - 3.00pm"
  },
  {
    "day": "Saturday",
    "time": "9.00am - 2.00pm"
  }
]
const brandImages = ['img/brandImg1.png', 'img/brandImg2.png', 'img/brandImg3.png', 'img/brandImg4.png', 'img/brandImg5.png'];
const reviews = [
  {
    "image": "img/profileImg1.jpg",
    "name": "Mona Lott",
    "feedback": "I like it a Latte! Excellent service, delicious caffienated beverages and clean/calm atmosphere.",
    "designation": "Managing Director"
  },
  {
    "image": "img/profileImg2.jpg",
    "name": "Isla White",
    "feedback": "Great friends, great atmosphere, and Liquid Gold....oh my....good stuff!",
    "designation": "CEO"
  },
  {
    "image": "img/profileImg3.jpg",
    "name": "Patrick Blanco",
    "feedback": "Loved it! Friendly people, beautiful artwork, comfy chairs and great coffee! We will be back.",
    "designation": "Software Developer"
  }
]

window.onscroll = () => {
  if(main.offsetTop < window.scrollY){
    header.classList.add("header-active");
  }
  else{
    header.classList.remove("header-active");
  }

  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset)- 100;
    let sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.navigation a[href*=' + sectionId + ']').classList.add('active-navlink');
    }
    else{
      document.querySelector('.navigation a[href*=' + sectionId + ']').classList.remove('active-navlink');
    }
  })
}

menuOpen.addEventListener('click', () => {
  menu.classList.add('open');
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('open');
})

links.forEach(function(link){
  link.addEventListener('click', (e) => {
    if(e.target.classList.contains('active-navlink')){
      e.target.classList.add('active-navlink');
    }
    else{
      e.target.classList.add('active-navlink');
      links.forEach((l) => {
        if(l !== e.target){
          l.classList.remove('active-navlink');
        }
      })
    }
  })
})

for(let i = 0; i< bannerSliderObj.length; i++){
  const bannerSlider = document.getElementById('bannerSlider');
  const child = document.createElement('div');
  child.classList.add('sliderItem', 'swiper-slide');
  child.innerHTML = 
  `<img src="${bannerSliderObj[i].image}" alt="Home image-${bannerSliderObj[i].id}" class="home-img">
  <div class="home-details">
      <div class="home-text">
          <h4 class="homeSubtitle">${bannerSliderObj[i].subtitle}</h4>
          <h2 class="homeTitle">${bannerSliderObj[i].title}</h2>
      </div>
      <button class="button">Explore</button>
  </div>`;
  bannerSlider.appendChild(child);
}

for(let i = 0; i < ourMenu.length; i++ ){
  const coffeeItem = document.getElementById('menu_items');
  const singleCoffee = document.createElement('div');
  singleCoffee.classList.add('menu-item', 'flex');
  singleCoffee.innerHTML = 
  `<img src="${ourMenu[i].image}" alt="Menu Image-${ourMenu[i].id}" class="menu-img">
  <div class="menuItem-details">
      <h4 class="menuItem-name">${ourMenu[i].name}</h4>
      <p class="menuItem-desc">${ourMenu[i].content}</p>
  </div>
  <div class="menuItem-price flex">
      <span class="discount-price">$${ourMenu[i].discount}</span>
      <span class="real-price">$${ourMenu[i].real}</span>
  </div>`;
  coffeeItem.appendChild(singleCoffee);
}

for(let i = 0; i < timeLists.length; i++){
  const timeListsWrapper = document.getElementById('time_lists');
  const singleTime = document.createElement('li');
  singleTime.classList.add('time-list', 'flex');
  singleTime.innerHTML = 
  `<span class="open-day">${timeLists[i].day}</span>
  <span class="open-time">${timeLists[i].time}</span>`;
  timeListsWrapper.appendChild(singleTime)
}

for(let i = 0; i < brandImages.length; i++){
  const brandImageWrapper = document.getElementById('brand_wrapper');
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('brand-image');
  imageDiv.innerHTML = 
  `<img src="${brandImages[i]}" alt="Brand image">`;
  brandImageWrapper.appendChild(imageDiv);
}

for(let i = 0; i < reviews.length; i++){
  const reviewsWrapper = document.getElementById('reviews_wrapper');
  const reviewItem = document.createElement('div');
  reviewItem.classList.add('swiper-slide', 'flex', 'flex-col', 'align-center', 'review-content');
  reviewItem.innerHTML = 
  `<img src="${reviews[i].image}" alt="Profile Image">
  <p class="section-description relative text-center"><i class="bx bxs-quote-alt-left quote-icon absolute"></i>${reviews[i].feedback}</p>
  <div class="author-details flex flex-col">
      <span class="author-name font-semibold">${reviews[i].name}</span>
      <span class="author-desig text-slate-500">${reviews[i].designation}</span>
  </div>`;
  reviewsWrapper.appendChild(reviewItem);
}