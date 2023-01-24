const header = document.querySelector("header");
const nav = document.querySelector("nav");
const toggleMenu = document.querySelector(".toggle-menu");
//const goUp = document.querySelector(".go-up");

toggleMenu.addEventListener("click", function () {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.display = "none";
        nav.style.top = "-100%";
        nav.style.opacity = "0";
    } else {
        this.classList.add("clicked");
        nav.style.display = "block";
        nav.style.top = "100%";
        nav.style.opacity = "1";
    }
});
// panel
const panels = Array.from(document.querySelectorAll(".landing .box"));
const bullets = Array.from(document.querySelectorAll(".bullet"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function() {
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        panels.forEach(box => {
            if(this.id == box.dataset.id) {
                box.classList.remove("hide");
            } else {
                box.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

// review
// panel
const reviews = Array.from(document.querySelectorAll(".review"));
const btns = Array.from(document.querySelectorAll(".btn-images img"));
btns.forEach(btn => {
    btn.addEventListener("click", function() {
        for(let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
        }
        reviews.forEach(review => {
            if(this.alt == review.dataset.alt) {
                review.classList.remove("hide");
            } else {
                review.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

// Q&A
const questions = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));
questions.forEach(q => {
    q.addEventListener("click", function() {
        for(let i = 0; i < questions.length; i++) {
            questions[i].classList.remove("active");
        }
        answers.forEach(a => {
            a.classList.add("hide");
        });
        this.nextElementSibling.classList.remove("hide");
        this.classList.add("active");
    });
})