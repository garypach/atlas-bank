
const form = document.getElementById('form');

const fname = document.getElementById('fname');
const fnameLabel = document.getElementById('fnameLabel');
const fnameIconError = document.getElementById('fname-icon-error');
const fnameError = document.getElementById('fname-error');

const lname = document.getElementById('lname');
const lnameLabel = document.getElementById('lnameLabel');
const lnameIconError = document.getElementById('lname-icon-error');
const lnameError = document.getElementById('lname-error');

const email = document.getElementById('email');
const emailLabel = document.getElementById('emailLabel');
const emailIconError = document.getElementById('email-icon-error');
const emailError = document.getElementById('email-error');

const phone = document.getElementById('phone');
const phoneLabel = document.getElementById('phoneLabel');
const phoneIconError = document.getElementById('phone-icon-error');
const phoneError = document.getElementById('phone-error');

const city = document.getElementById('city');
const cityLabel = document.getElementById('cityLabel');
const cityIconError = document.getElementById('city-icon-error');
const cityError = document.getElementById('city-error');

const monthly = document.getElementById('monthly-spending');
const monthlyLabel = document.getElementById('monthly-spending-label');
const monthlyIconError = document.getElementById('monthly-spending-icon-error');
const monthlyError = document.getElementById('monthly-spending-error');

const howDidYouHear = document.getElementById('howDidYouHear');
const howDidYouHearLabel = document.getElementById('howDidYouHearLabel');
const howDidYouHearError = document.getElementById('howDidYouHear-error');

const instagram = document.getElementById('instagram');
const instagramLabel = document.getElementById('instagramLabel');





function submitValid() {
    const emailRegex = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    if (
        /^[a-zA-Z]+$/.test(fname.value) === true &&
        /^[a-zA-Z]+$/.test(lname.value) === true &&
        emailRegex.test(email.value) === true &&
        phoneRegex.test(phone.value) === true &&
        /^[a-zA-Z]+$/.test(city.value) === true &&
        /^\d+$/g.test(monthly.value.replace(/[^0-9]/g, '')) === true &&
        howDidYouHear.value != 'none'
    ) {
        return true
    }
    if (fname.value.length === 0 || /^[a-zA-Z]+$/.test(fname.value) === false) {
        fname.classList.add("input-error");
        fnameIconError.classList.remove("hidden");
        fnameError.classList.remove("hidden");
    }
    if (lname.value.length === 0 || /^[a-zA-Z]+$/.test(lname.value) === false) {
        lname.classList.add("input-error");
        lnameIconError.classList.remove("hidden");
        lnameError.classList.remove("hidden");
    }
    if (email.value.length === 0 || emailRegex.test(email.value) === false) {
        email.classList.add("input-error");
        emailIconError.classList.remove("hidden");
        emailError.classList.remove("hidden");
    }
    if (phone.value.length === 0 || phoneRegex.test(phone.value) === false) {
        phone.classList.add("input-error");
        phoneIconError.classList.remove("hidden");
        phoneError.classList.remove("hidden");

    }
    if (/^[a-zA-Z]+$/.test(city.value) === false) {
        city.classList.add("input-error");
        cityIconError.classList.remove("hidden");
        cityError.classList.remove("hidden");

    }
    if (monthly.value.length === 0 || /^\d+$/g.test(monthly.value.replace(/[^0-9]/g, '')) === false) {
        monthly.classList.add("input-error");
        monthlyIconError.classList.remove("hidden");
        monthlyError.classList.remove("hidden");
    }
    if (howDidYouHear.value === 'none') {
        howDidYouHear.classList.add("input-error");
        howDidYouHearError.classList.remove("hidden");
        howDidYouHearLabel.classList.remove("label-end");
        howDidYouHearLabel.classList.add("label-start");

    }




    return false
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitValid()
    if (submitValid()) {
        window.location.href = '/';
        fname.value = '';
        lname.value = '';
        email.value = '';
        phone.value = '';
        city.value = '';
        monthly.value = '';
        howDidYouHear.value = '';
        instagram.value = '';
        document.getElementById("terms").checked = false;
        document.getElementById("recieveEmail").checked = false;
    }
})

fname.addEventListener("click", (event) => {
    fnameLabel.classList.add("label-end");
    fnameLabel.classList.remove("label-start");

});

fname.addEventListener("input", (event) => {
    if (event.target.value.length > 0) {
        fname.classList.remove("input-error");
        fnameIconError.classList.add("hidden");
        fnameError.classList.add("hidden");
    }
});

fname.addEventListener("blur", (event) => {
    if (event.target.value.length === 0) {
        fname.classList.add("input-error");
        fnameIconError.classList.remove("hidden");
        fnameError.classList.remove("hidden");
        fnameLabel.classList.remove("label-end");
        fnameLabel.classList.add("label-start");
    }
});


//lname
lname.addEventListener("click", (event) => {
    lnameLabel.classList.add("label-end");
    lnameLabel.classList.remove("label-start");

});

lname.addEventListener("input", (event) => {
    if (event.target.value.length > 0) {
        lname.classList.remove("input-error");
        lnameIconError.classList.add("hidden");
        lnameError.classList.add("hidden");
    }
});

lname.addEventListener("blur", (event) => {
    if (event.target.value.length === 0) {
        lname.classList.add("input-error");
        lnameIconError.classList.remove("hidden");
        lnameError.classList.remove("hidden");
        lnameLabel.classList.remove("label-end");
        lnameLabel.classList.add("label-start");
    }
});

//email
email.addEventListener("click", (event) => {
    emailLabel.classList.add("label-end");
    emailLabel.classList.remove("label-start");

});

email.addEventListener("input", (event) => {
    if (event.target.value.length > 0) {
        email.classList.remove("input-error");
        emailIconError.classList.add("hidden");
        emailError.classList.add("hidden");
    }
});

email.addEventListener("blur", (event) => {
    if (event.target.value.length === 0) {
        email.classList.add("input-error");
        emailIconError.classList.remove("hidden");
        emailError.classList.remove("hidden");
        emailLabel.classList.remove("label-end");
        emailLabel.classList.add("label-start");
    }
});
//phone
phone.addEventListener("input", function () {
    if (this.value.length > 0) {
        phone.classList.remove("input-error");
        phoneIconError.classList.add("hidden");
        phoneError.classList.add("hidden");
    }

    // Remove any non-numeric characters
    const numericValue = this.value.replace(/[^0-9]/g, '');

    // Format the numeric value as (123) 456-7890
    let formattedValue = '';

    if (numericValue.length > 0) {
        formattedValue += `${numericValue.substring(0, 3)}`;

        if (numericValue.length > 3) {
            formattedValue += `) ${numericValue.substring(3, 6)}`;
        }
        if (numericValue.length > 6) {
            formattedValue += `-${numericValue.substring(6, 10)}`;
        }
    }

    // Set the input value with the formatted phone number
    this.value = '(' + formattedValue;

});

phone.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace' && this.selectionStart === 1 && this.value === '(') {
        this.value = '';
    }
}
)

phone.addEventListener('focus', function () {
    phone.placeholder = '(123)-456-7890';
    phoneLabel.classList.add("label-end");
    phoneLabel.classList.remove("label-start");

})
phone.addEventListener("blur", function () {
    if (this.value === '') {
        phone.classList.add("input-error");
        phoneIconError.classList.remove("hidden");
        phoneError.classList.remove("hidden");
        phoneLabel.classList.remove("label-end");
        phoneLabel.classList.add("label-start");
    }
    phone.placeholder = '';
});

//city
city.addEventListener("click", (event) => {
    cityLabel.classList.add("label-end");
    cityLabel.classList.remove("label-start");

});

city.addEventListener("input", (event) => {
    if (event.target.value.length > 0) {
        city.classList.remove("input-error");
        cityIconError.classList.add("hidden");
        cityError.classList.add("hidden");
    }
});

city.addEventListener("blur", (event) => {
    if (event.target.value.length === 0) {
        city.classList.add("input-error");
        cityIconError.classList.remove("hidden");
        cityError.classList.remove("hidden");
        cityLabel.classList.remove("label-end");
        cityLabel.classList.add("label-start");
    }
});

//monthly
monthly.addEventListener("input", function () {
    if (this.value.length > 0) {
        monthly.classList.remove("input-error");
        monthlyIconError.classList.add("hidden");
        monthlyError.classList.add("hidden");
    }
    // Remove any non-numeric characters
    const numericValue = this.value.replace(/[^0-9]/g, '');

    // Format the numeric value with commas
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Set the input value with the '$' symbol and formatted numeric value
    this.value = '$' + formattedValue;


});
monthly.addEventListener('focus', function () {
    monthlyLabel.classList.add("label-end");
    monthlyLabel.classList.remove("label-start");
    if (!this.value) {
        this.value = '$';
    }
});
monthly.addEventListener("blur", function () {
    if (this.value === '$') {
        this.value = '';
        if (this.value.length === 0) {
            monthly.classList.add("input-error");
            monthlyIconError.classList.remove("hidden");
            monthlyError.classList.remove("hidden");
            monthlyLabel.classList.remove("label-end");
            monthlyLabel.classList.add("label-start");
        }
    }
});

monthly.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace' && this.selectionStart === 0) {
        event.preventDefault();
    }
});


//select

howDidYouHear.addEventListener('focus', function () {
    howDidYouHearLabel.classList.add("label-end");
    howDidYouHearLabel.classList.remove("label-start");
});

howDidYouHear.addEventListener("blur", function () {
    if (this.value === 'none') {
        howDidYouHear.classList.add("input-error");
        howDidYouHearError.classList.remove("hidden");
        howDidYouHearLabel.classList.remove("label-end");
        howDidYouHearLabel.classList.add("label-start");
    } else {
        howDidYouHear.classList.remove("input-error");
        howDidYouHearError.classList.add("hidden");
    }
});

//instagram

instagram.addEventListener('focus', function () {
    instagramLabel.classList.add("label-end");
    instagramLabel.classList.remove("label-start");
    if (!this.value) {
        this.value = '@';
    }
});
instagram.addEventListener("blur", function () {
    if (this.value === '@') {
        this.value = '';
        if (this.value.length === 0) {
            instagramLabel.classList.remove("label-end");
            instagramLabel.classList.add("label-start");
        }
    }
});

instagram.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace' && this.selectionStart === 1) {
        event.preventDefault();
    }
});


const button = document.getElementById('submit-button')

document.getElementById("terms").addEventListener('change', function () {
    if (this.checked === true && document.getElementById("recieveEmail").checked === true) {
        button.disabled = false
    } else {
        button.disabled = true
    }

});
document.getElementById("recieveEmail").addEventListener('change', function () {
    if (this.checked === true && document.getElementById("terms").checked === true) {
        button.disabled = false
    } else {
        button.disabled = true
    }

});
