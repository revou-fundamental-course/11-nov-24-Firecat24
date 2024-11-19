document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

function validateForm() {
    var name = document.getElementById("yourname").value;
    var email = document.getElementById("email").value;
    var interest = document.getElementById("interest").value;
    
    if (name == "") {
        alert("Please enter your name.");
        return false;
    }
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == "") {
        alert("Please enter your email.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    if (interest == "") {
        alert("Please select your interest.");
        return false;
    }
    
    return alert("Selamat data anda terkirim dan akan dihubungi 1x24 jam setelah data terkirim");
}