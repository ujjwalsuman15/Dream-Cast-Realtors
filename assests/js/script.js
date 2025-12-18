// form validation section start

(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// form validation section end

// password validation section start

var myInput = document.getElementById("exampleInputPassword1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
    document.getElementById("passwordmessage").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
    document.getElementById("passwordmessage").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

// password validation section end

// form js section start start


const form = document.getElementById('google-sheet-form');

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw4-mz5j26qpnE_78zhvolfGwUYgl72shoqi3it_mj0eKUhAqAqUN05qNwTScTDaZ7L/exec";  // <-- Replace this

form.addEventListener('submit', function (e) {
    e.preventDefault();  // stop page reload

    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    const fd = new FormData(form);

    fetch(WEB_APP_URL, {
        method: 'POST',
        body: fd
    })
        .then(res => res.json())
        .then(data => {
            if (data.result === 'success') {
                // SAME PAGE ME YEH MESSAGE SHOW HOGA
                alert("✔ Form Submitted Successfully!");
                form.reset();
                form.classList.remove('was-validated');
            } else {
                alert("Submission failed: " + data.message);
            }
        })
        .catch(err => {
            alert("Network/server error");
            console.error(err);
        });
});

// form js section start end


// clients logo slider section start
$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// clients logo slider section end