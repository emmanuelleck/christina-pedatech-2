
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez remplir tous les champs.";
    } else {
        formMessage.style.color = "green";
        formMessage.textContent = "Message envoyé !";
    }
});
const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.href.includes("#")) return; 

        e.preventDefault();
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = link.href;
        }, 300); 
    });
});

const fadeElements = document.querySelectorAll('.fade-in');

fadeElements.forEach(el => {
    setTimeout(() => {
        el.classList.add("visible");
    }, 200);
});

