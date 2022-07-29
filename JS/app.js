// var monCard = document.getElementById('monCard')
// Services
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      Bullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

//Testimonials
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

let screenWidth = screen.width;
document.getElementById("menuBars")
document.getElementById("menuX")
// console.log(screen.width)
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("whiteBar").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("whiteBar").style.width = "0";
}

// Meet The Doctors Section

let profile1 = document.getElementById("firstProfile");
let profile2 = document.getElementById("secondProfile");
let img1 = document.getElementById("firstProfile").getElementsByTagName("img")[0];
let img2 = document.getElementById("secondProfile").getElementsByTagName("img")[0];
let title = document.getElementById("doctorInfo").getElementsByTagName("h4")[0];
let text = document.getElementById("doctorInfo").getElementsByTagName("p")[0];

profile1.addEventListener("click", function(){
    title.textContent = "Dr. Yahya Rasheed"
    //Zaki's
    // text.textContent = "Yahya F. Rasheed practices pediatrics between 6 and 10 years and obtained his medical degree from the University of Medicine & Health Sciences St. Kitts. After graduating he started to work with his father (Dr. Fouad Rasheed) here at Future Pediatric Group, trying to put as much effort as he can. He had several incidents where his patients would call him at 3:00 am on his day off. He would get up and cater to the mother and her child until their worries were eased. He hasn’t taken a true day off since he started working here at the practice. “No matter the hour, no matter the day. If a mother calls concerned about her child, it is my duty as a doctor to be there.”"

    //Mami's
    // text.textContent = "Dr. Fouad Rasheed, MB BCH, has been a doctor for over 47 years. In 1975, he received his medical degree from the Bani Swief Branch of the University of Cairo's Faculty of Medicine. “We welcome and celibrate people of all cultures, races, beliefs, and abilities and to our family centered medical home.”"

    //Ameenah's
    text.textContent = "Dr. Yahya F. Rasheed has been practicing pediatrics for 6 to 10 years. He obtained a medical degree from the University of Medicine & Health Sciences in St. Kitts. After graduation, he joined Future Pediatric Group, working closely with Dr. Fouad Rasheed (his father). A doctor like this is always available to help. “No matter the hour or day, if a mother calls concerned about her child, it is my duty as a doctor to be there.”"


    profile1.style.height="420px"
    profile2.style.height="320px"
    img1.style.bottom="0px"
    img2.style.bottom="-70px"

});

profile2.addEventListener("click", function(){
    title.textContent = "Dr. Fouad Rasheed"
    //Zaki's
    // text.textContent = "Dr. Fouad Rasheed, MB BCH, has been a doctor for over 47 years. In 1975, he received his medical degree from the Bani Swief Branch of the University of Cairo's Faculty of Medicine. He dedicates his life to treating children. One particular day, he saw a child 6 hours after calling. After treating the child, he realized that the mother was sicker than the child. This was because no doctor would see her, they were all booked for the week. He had no choice except to examine and treat her immediately.“Parents Expect us to go beyond with their child, so we always deliver.”"

    //Mami's
    // text.textContent = "Yahya F. Rasheed practices pediatrics between 6 and 10 years and obtained his medical degree from the University of Medicine & Health Sciences St. Kitts. After graduating he started to work with his father (Dr. Fouad Rasheed) here at Future Pediatric Group. “We pride ourselves on providing comprehensive, compationate care to infants, children and young adults.”"

    //Ameenah's
    text.textContent = "Dr. Fouad Rasheed, MB BCH, has been practicing medicine for over 47 years. He earned his medical degree from the University of Cairo's Faculty of Medicine's Bani Swief Branch in 1975. His professional life is dedicated to treating children. “Parents expect us to go beyond with their child, so we always deliver.”"


    profile1.style.height="320px"
    profile2.style.height="420px"
    img1.style.bottom="-40px"
    img2.style.bottom="0px"
});


//Contact Section
let areaTittle = document.getElementById("areaTitleName");
let areaNames = document.getElementById("areaNameContainer");
let areaClif = document.getElementById("areaNameContainer").getElementsByTagName('p')[0];
let areaPros = document.getElementById("areaNameContainer").getElementsByTagName('p')[2];

let weekContainer = document.getElementById("contactWeekContainer");
let cards = document.getElementsByClassName("weekCard");

let aTagNum = document.getElementById("numATag");
let aTagAddy = document.getElementById("addressATag");
let phoneNum = document.getElementById("phoneNum").getElementsByTagName('h4')[0];
let areaAddress = document.getElementById("address").getElementsByTagName('h4')[0];

let area1Btn = document.getElementById("clifBtn");
let area2Btn = document.getElementById("prosBtn");


area1Btn.addEventListener('click', function(){
    areaTittle.textContent="Clifton"
    areaClif.style.color="#14C777"
    areaPros.style.color="#6FF0B7"

    cards[0].childNodes[3].textContent="10:00am"
    cards[0].childNodes[5].textContent="7:00pm"

    cards[1].childNodes[3].textContent="10:00am"
    cards[1].childNodes[5].textContent="7:00pm"

    cards[2].childNodes[3].textContent="10:00am"
    cards[2].childNodes[5].textContent="7:00pm"

    cards[3].childNodes[3].textContent="10:00am"
    cards[3].childNodes[5].textContent="7:00pm"

    cards[4].childNodes[3].textContent="10:00am"
    cards[4].childNodes[5].textContent="7:00pm"

    cards[5].childNodes[3].textContent="9:00am"
    cards[5].childNodes[5].textContent="2:00pm"

    aTagNum.href="tel:9737726999"
    aTagAddy.href="https://www.google.com/search?client=firefox-b-1-d&q=future%20pediatric%20group&newwindow=1&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsa53mYDmSbrlgcko1vlDbmg5wCX3g:1658851888928&rflfq=1&num=10&rldimm=869784483567007609&lqi=ChZmdXR1cmUgcGVkaWF0cmljIGdyb3VwSKrts9rlgICACFokEAAQARACGAAYARgCIhZmdXR1cmUgcGVkaWF0cmljIGdyb3VwkgENbWVkaWNhbF9ncm91cA&ved=2ahUKEwih9cvs-Jb5AhU5lIkEHZNEAWYQvS56BAgDEAE&sa=X&rlst=f#rlfi=hd:;si:3057884733486029281,l,ChZmdXR1cmUgcGVkaWF0cmljIGdyb3VwSImz49blgICACFokEAAQARACGAAYARgCIhZmdXR1cmUgcGVkaWF0cmljIGdyb3VwkgEGZG9jdG9y;mv:[[40.934796899999995,-74.145901],[40.8805798,-74.1751918]]"
    phoneNum.textContent="973-772-6999"
    areaAddress.textContent="1414 Main Ave #14, Clifton, NJ 07011"

    area1Btn.style.background="#14C777"
    area2Btn.style.background="#6FF0B7"
})

area2Btn.addEventListener('click', function(){
    areaTittle.textContent="Prospect Park"
    areaClif.style.color="#6FF0B7"
    areaPros.style.color="#14C777"

    cards[0].childNodes[3].textContent="10:00am"
    cards[0].childNodes[5].textContent="6:00pm"

    cards[1].childNodes[3].textContent="10:00am"
    cards[1].childNodes[5].textContent="6:00pm"

    cards[2].childNodes[3].textContent="10:00am"
    cards[2].childNodes[5].textContent="6:00pm"

    cards[3].childNodes[3].textContent="10:00am"
    cards[3].childNodes[5].textContent="6:00pm"

    cards[4].childNodes[3].textContent="10:00am"
    cards[4].childNodes[5].textContent="5:00pm"

    cards[5].childNodes[3].textContent="10:00am"
    cards[5].childNodes[5].textContent="1:00pm"

    phoneNum.textContent="973-942-2131"
    areaAddress.textContent="240 N 8th St, Prospect Park, NJ 07508"

    aTagNum.href="tel:9739422131"
    aTagAddy.href="https://www.google.com/search?client=firefox-b-1-d&q=future%20pediatric%20group&newwindow=1&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsa53mYDmSbrlgcko1vlDbmg5wCX3g:1658851888928&rflfq=1&num=10&rldimm=869784483567007609&lqi=ChZmdXR1cmUgcGVkaWF0cmljIGdyb3VwSKrts9rlgICACFokEAAQARACGAAYARgCIhZmdXR1cmUgcGVkaWF0cmljIGdyb3VwkgENbWVkaWNhbF9ncm91cA&ved=2ahUKEwih9cvs-Jb5AhU5lIkEHZNEAWYQvS56BAgDEAE&sa=X&rlst=f#rlfi=hd:;si:869784483567007609,l,ChZmdXR1cmUgcGVkaWF0cmljIGdyb3VwSKrts9rlgICACFokEAAQARACGAAYARgCIhZmdXR1cmUgcGVkaWF0cmljIGdyb3VwkgENbWVkaWNhbF9ncm91cA;mv:[[40.934796899999995,-74.145901],[40.8805798,-74.1751918]]"
    area1Btn.style.background="#6FF0B7"
    area2Btn.style.background="#14C777"
})


// Click Me Animation
function gc_detect_visibility(query,custom_funtion){

    let calculator = function(query,custom_funtion){

        let element = document.getElementById(query);

        let element_top_offset = element.offsetTop;
        let element_bottom_offset = element.offsetHeight + element_top_offset;

        let screen_top_offset = window.scrollY;
        let screen_bottom_offset = screen_top_offset + window.innerHeight;

        if(element_top_offset > screen_top_offset && screen_bottom_offset > element_bottom_offset){
            custom_funtion(element);
        }
    }

    calculator(query,custom_funtion);

    document.addEventListener('scroll',calculator.bind(null,query,custom_funtion));
}

gc_detect_visibility('firstProfile', function(element){
    setTimeout(function() {
        profile2.style.animation="clickMe 0.5s linear"
    }, 1000);
    setTimeout(function() {
        profile1.style.animation="clickMe 0.5s linear"
    }, 1500);
})
