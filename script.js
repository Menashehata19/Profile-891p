const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
document.documentElement.setAttribute('class', 'notranslate');
const textArray = ["مطور الموقع","منشئ مواقع الكترونية"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

let icomenu = document.getElementById('svgiconmenu');

let menudiv = document.getElementById('divmen');



function icomenu1() {
  // Tab to edit
  if (menudiv.style.display == "none") {
    menudiv.style.display="block"
  }
  else {
    menudiv.style.display="none"
  }
}





setInterval(nametime, 1000);

function nametime() {
  // Tab to edit

const time = new Date().toLocaleTimeString();

let timetxt = document.getElementById('timeinner');


timetxt.innerHTML= time;
}




function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  
  
  abouttext2.innerHTML="ip phone : " + (ip) ;
});





const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};




function multiply(num1, num2) {
  return num1 * num2;
}




abouttext1.innerHTML = "your use : " + (getDeviceType());






if (navigator.getBattery) {
  navigator.getBattery().then(function(battery) {
    abouttext3.innerHTML= "Battery level is: " + battery.level * 100 + "%";
  });
} else {
  console.log("Battery API not supported.");
}



let online1 = navigator.onLine;


abouttext4.innerHTML= "concted internet : " + online1;


setTimeout(function(){
   window.location.reload(1);
}, 90000);



// تحقق من تفضيل الوضع المظلم في localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// تبديل الوضع المظلم وحفظ التفضيل في localStorage
function toggleDarkMode() {

  var element = document.body;
  element.classList.toggle('dark-mode');
  
  if (element.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
}

let divac = document.getElementById('divbodyac');

let divsh = document.getElementById('showac');

divsh.addEventListener('click', function(){
divac.style.display="block"
menudiv.style.display="none"
})

  // Tab to edit



function cloce() {
  // Tab to edit
divac.style.display="none"
}

const btn = document.getElementById('buttonsub');

let input1 = document.getElementById('inp1');

let input2 = document.getElementById('inp2');

let thanc = document.getElementById('thank');

btn.addEventListener('click', function(){
    
    if (inp1.value == "") {
      alert('Write Your Name')
    }

else if (inp2.value == "") {
  alert('Create Password')
}

else {
  divac.style.display="none"
  
  setTimeout(none,1000);
  
  function none() {
    // Tab to edi
    thanc.style.display="none"
  }
  
  thanc.style.display="block"
  
  
}  



})


inp1.style.color="white";
inp2.style.color="white";


function whatsapphref() {
  // Tab to edit
  
  setTimeout(hrefwha, 130);
  
  function hrefwha() {
    // Tab to edit
    window.location.href="https://wa.me/+201270144885"
  }
}


function facebookhref() {
  // Tab to edit
  
  setTimeout(hrefwha, 130);
  
  function hrefwha() {
    // Tab to edit
    window.location.href="https://www.facebook.com/profile.php?id=100081772560341&mibextid=ZbWKwL"
  }
}



function instgramhref() {
  // Tab to edit
  
  setTimeout(hrefwha, 130);
  
  function hrefwha() {
    // Tab to edit
    window.location.href="https://www.instagram.com/mina.shehata1?igsh=c3lkNmJzYmg5YWti"
  }
}


