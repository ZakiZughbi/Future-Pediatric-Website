var swiper=new Swiper(".slide-content",{slidesPerView:3,spaceBetween:25,loop:!0,centerSlide:"true",fade:"true",grabCursor:"true",pagination:{el:".swiper-pagination",clickable:!0,Bullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},520:{slidesPerView:2},950:{slidesPerView:3}}}),swiper=new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let screenWidth=screen.width;function openNav(){document.getElementById("mySidenav").style.width="300px",document.getElementById("whiteBar").style.width="100%"}function closeNav(){document.getElementById("mySidenav").style.width="0",document.getElementById("whiteBar").style.width="0"}document.getElementById("menuBars"),document.getElementById("menuX");let profile1=document.getElementById("firstProfile"),profile2=document.getElementById("secondProfile"),img1=document.getElementById("firstProfile").getElementsByTagName("img")[0],img2=document.getElementById("secondProfile").getElementsByTagName("img")[0],title=document.getElementById("doctorInfo").getElementsByTagName("h4")[0],text=document.getElementById("doctorInfo").getElementsByTagName("p")[0];profile1.addEventListener("click",function(){title.textContent="Dr. Yahya Rasheed",text.textContent="Dr. Yahya F. Rasheed has been practicing pediatrics for almost 10 years. He obtained a medical degree from the University of Medicine & Health Sciences in St. Kitts. After graduation, he joined Future Pediatric Group, working closely with Dr. Fouad Rasheed (his father). A doctor like this is always available to help. \u201CNo matter the hour or day, if a mother calls concerned about her child, it is my duty as a doctor to be there.\u201D",profile1.style.height="420px",profile2.style.height="320px",img1.style.bottom="0px",img2.style.bottom="-70px"}),profile2.addEventListener("click",function(){title.textContent="Dr. Fouad Rasheed",text.textContent="Dr. Fouad Rasheed, MB BCH, has been practicing medicine for over 47 years. He earned his medical degree from the University of Cairo's Faculty of Medicine's Bani Swief Branch in 1975. His professional life is dedicated to treating children. \u201CParents expect us to go beyond with their child, so we always deliver.\u201D",profile1.style.height="320px",profile2.style.height="420px",img1.style.bottom="-40px",img2.style.bottom="0px"});let areaTittle=document.getElementById("areaTitleName"),areaNames=document.getElementById("areaNameContainer"),areaClif=document.getElementById("areaNameContainer").getElementsByTagName("p")[0],areaPros=document.getElementById("areaNameContainer").getElementsByTagName("p")[2],weekContainer=document.getElementById("contactWeekContainer"),cards=document.getElementsByClassName("weekCard"),aTagNum=document.getElementById("numATag"),aTagAddy=document.getElementById("addressATag"),phoneNum=document.getElementById("phoneNum").getElementsByTagName("h4")[0],areaAddress=document.getElementById("address").getElementsByTagName("h4")[0],area1Btn=document.getElementById("clifBtn"),area2Btn=document.getElementById("prosBtn");function gc_detect_visibility(a,b){let c=function(d,e){let a=document.getElementById(d),b=a.offsetTop,f=a.offsetHeight+b,c=window.scrollY,g=c+window.innerHeight;b>c&&g>f&&e(a)};c(a,b),document.addEventListener("scroll",c.bind(null,a,b))}area1Btn.addEventListener("click",function(){areaTittle.textContent="Clifton",areaClif.style.color="#14C777",areaPros.style.color="#6FF0B7",cards[0].childNodes[3].textContent="10:00am",cards[0].childNodes[5].textContent="7:00pm",cards[1].childNodes[3].textContent="10:00am",cards[1].childNodes[5].textContent="7:00pm",cards[2].childNodes[3].textContent="10:00am",cards[2].childNodes[5].textContent="7:00pm",cards[3].childNodes[3].textContent="10:00am",cards[3].childNodes[5].textContent="7:00pm",cards[4].childNodes[3].textContent="10:00am",cards[4].childNodes[5].textContent="7:00pm",cards[5].childNodes[3].textContent="9:00am",cards[5].childNodes[5].textContent="2:00pm",aTagNum.href="tel:9737726999",aTagAddy.href="https://www.google.com/search?client=firefox-b-1-d&q=future%20pediatric%20group&newwindow=1&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsa53mYDmSbrlgcko1vlDbmg5wCX3g:1658851888928&rflfq=1&num=10&rldimm=869784483567007609&lqi=ChZmdXR1cmUgcGVkaWF0cmljIGdyb3VwSKrts9rlgICACFokEAAQARACGAAYARgCIhZmdXR1cmUgcGVkaWF0cmljIGdyb3VwkgENbWVkaWNhbF9ncm91cA&ved=2ahUKEwih9cvs-Jb5AhU5lIkEHZNEAWYQvS56BAgDEAE&sa=X&rlst=f#rlfi=hd:;si:3057884733486029281,l,ChZmdXR1cmUgcGVkaWF0cmljIGdyb3VwSImz49blgICACFokEAAQARACGAAYARgCIhZmdXR1cmUgcGVkaWF0cmljIGdyb3VwkgEGZG9jdG9y;mv:[[40.934796899999995,-74.145901],[40.8805798,-74.1751918]]",phoneNum.textContent="973-772-6999",areaAddress.textContent="1414 Main Ave #14, Clifton, NJ 07011",area1Btn.style.background="#14C777",area2Btn.style.background="#6FF0B7"}),area2Btn.addEventListener("click",function(){areaTittle.textContent="Prospect Park",areaClif.style.color="#6FF0B7",areaPros.style.color="#14C777",cards[0].childNodes[3].textContent="10:00am",cards[0].childNodes[5].textContent="6:00pm",cards[1].childNodes[3].textContent="10:00am",cards[1].childNodes[5].textContent="6:00pm",cards[2].childNodes[3].textContent="10:00am",cards[2].childNodes[5].textContent="6:00pm",cards[3].childNodes[3].textContent="10:00am",cards[3].childNodes[5].textContent="6:00pm",cards[4].childNodes[3].textContent="10:00am",cards[4].childNodes[5].textContent="5:00pm",cards[5].childNodes[3].textContent="10:00am",cards[5].childNodes[5].textContent="1:00pm",phoneNum.textContent="973-942-2131",areaAddress.textContent="240 N 8th St, Prospect Park, NJ 07508",aTagNum.href="tel:9739422131",aTagAddy.href="https://www.google.com/search?client=firefox-b-1-d&q=future%20pediatric%20group&newwindow=1&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsa53mYDmSbrlgcko1vlDbmg5wCX3g:1658851888928&rflfq=1&num=10&rldimm=869784483567007609&lqi=ChZmdXR1cmUgcGVkaWF0cmljIGdyb3VwSKrts9rlgICACFokEAAQARACGAAYARgCIhZmdXR1cmUgcGVkaWF0cmljIGdyb3VwkgENbWVkaWNhbF9ncm91cA&ved=2ahUKEwih9cvs-Jb5AhU5lIkEHZNEAWYQvS56BAgDEAE&sa=X&rlst=f#rlfi=hd:;si:869784483567007609,l,ChZmdXR1cmUgcGVkaWF0cmljIGdyb3VwSKrts9rlgICACFokEAAQARACGAAYARgCIhZmdXR1cmUgcGVkaWF0cmljIGdyb3VwkgENbWVkaWNhbF9ncm91cA;mv:[[40.934796899999995,-74.145901],[40.8805798,-74.1751918]]",area1Btn.style.background="#6FF0B7",area2Btn.style.background="#14C777"}),gc_detect_visibility("firstProfile",function(a){setTimeout(function(){profile2.style.animation="clickMe 0.5s linear"},1e3),setTimeout(function(){profile1.style.animation="clickMe 0.5s linear"},1500)})
