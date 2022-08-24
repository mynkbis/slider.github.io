window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

let month = document.querySelector('.price-toggler .month');
let year = document.querySelector('.price-toggler .year');
let monthAmount = document.querySelectorAll('.box-container .box .month');
let yearAmount = document.querySelectorAll('.box-container .box .year');
const movebtn = document.querySelector(".movebtn");

year.onclick = () => {
    year.classList.add('active');
    movebtn.classList.add('rightBtn')
    movebtn.innerHTML="YEARLY"
    month.classList.remove('rightBtn');

month.innerHTML="MONTHLY    "
    monthAmount.forEach(mo => {
        mo.style.display = 'none'
    });
    yearAmount.forEach(yr => {
        yr.style.display = 'block'
    });
};

month.onclick = () => {
    year.classList.remove('active');
    month.classList.add('actve');
    movebtn.classList.remove('rightBtn')
    movebtn.innerHTML="MONTHLY"
    monthAmount.forEach(mo => {
        mo.style.display = 'block'
    });
    yearAmount.forEach(yr => {
        yr.style.display = 'none'
    });
};

const join = () => {
    console.log("Thank you for showing interest, this feature will be available soon")
}

// const monthlysub = document.querySelector(".monthlysub, .planM");
// const yearlysub = document.querySelector(".yearlysub, planY");
// const movebtn = document.querySelector(".movebtn");

// const hello = () => {
//     month.classList.add("rightBtn")
//     month.innerHTML = "YEARLY"
//     // planA.innerHTML="$228/month"
//     year.classList.add('active');
//     month.classList.remove('active');
//     console.log("clicked yearly")

// }
// const bye = () => {
//     movebtn.classList.remove("rightBtn")
//     movebtn.innerHTML = "MONTHLY"

// }

// if (year) {
//     year.addEventListener("click", hello())
// }


// if (month) {
//     month.addEventListener("onClick", bye())
// }
