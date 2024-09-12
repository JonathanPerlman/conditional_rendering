const users = [
    { email: "yoni@p.com", password: "1234" },
    { email: "david@p.com", password: "2222" },
    { email: "sara@p.com", password: "3333" }
];

const modal = document.getElementById('successModal');
const closeModal = document.getElementsByClassName('close')[0];

document.getElementById('login-btn').addEventListener("click", () => {
    const userEmail = document.getElementById("email-input").value;
    const userPassword = document.getElementById("password-input").value;

    const user = users.find(x => x.email === userEmail && x.password === userPassword);

    if (user) {
        modal.style.display = "block"; 
    } else {
        console.log("false");
    }
});

closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
