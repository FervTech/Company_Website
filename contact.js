//Nav---Bar//

navBar= document.querySelector(".nav_bar");
navBar.onclick = function (){
    navLinks= document.querySelector(".nav_links");
    navLinks.classList.toggle("active");
}

angleDown= document.querySelector(".angleDown");
angleDown.onclick = function (){
    servicesLinks= document.querySelector(".services_links");
    servicesLinks.classList.toggle("active");
}

//---------navScroll----------//
window.addEventListener("scroll", function (){
    var nav = document.querySelector(".nav");
    nav.classList.toggle("sticky", window.scrollY > 0);

})

// Change Navlgo on Scroll//

const mainLogo = "image/Official-Logo1.png";
const sclLogo = "image/Official-Logo.png";

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 0)
        $(".logo").attr("src", sclLogo);
    else
        $(".logo").attr("src", mainLogo);
});



//------------Scroll-Up------------//
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("Scroll-Up");
    let progressValue = document.getElementById("Scroll-Up-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#4644AA ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


//--------------- Tawk.to Script--------//
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6473a8efad80445890ef94fd/1h1hsnq1g';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();


//------News Letter Sheet-------//

const scriptURL = 'https://script.google.com/macros/s/AKfycby8yOr11n0piAqVnIcoDcZ0cuQ3D63b0WoyW8nfG7bEj-8q4w6nKVgzQKN9dCFcjez26Q/exec'
const letter = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

letter.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(letter)})
        .then(response =>{
            msg.innerHTML= "Thank You For Subscribing"
            setTimeout(function (){
                msg.innerHTML= ""
            },4000)

            letter.reset()
        })
        .catch(error => console.error('Error!', error.message))
});



//---------------Number-Validation--------------//
const input = document.querySelector("#phone");
const button = document.querySelector("#btn");
const errorMsg = document.querySelector("#error-msg");
const validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
const iti = window.intlTelInput(input, {
    utilsScript: "/intl-tel-input/js/utils.js?1690975972744"
});

const reset = () => {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
    validMsg.classList.add("hide");
};

// on click button: validate
button.addEventListener('click', () => {
    reset();
    if (input.value.trim()) {
        if (iti.isValidNumber()) {
            validMsg.classList.remove("hide");
        } else {
            input.classList.add("error");
            const errorCode = iti.getValidationError();
            errorMsg.innerHTML = errorMap[errorCode];
            errorMsg.classList.remove("hide");
        }
    }
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);

//----------Reset--Form----------------//

Window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
};