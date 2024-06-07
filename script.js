function checkAnswer1() {
    const answer = document.getElementById("answer1").value.trim().toLowerCase();
    if (answer === "keyboard") {
        document.getElementById("stage1").style.display = "none";
        document.getElementById("stage2").style.display = "block";
    } else {
        alert("Incorrect. Try again.");
    }
}

function checkAnswer2() {
    const answer = document.getElementById("answer2").value.trim().toLowerCase();
    if (answer === "say me i love you") {
        document.getElementById("stage2").style.display = "none";
        document.getElementById("stage3").style.display = "block";
    } else {
        alert("Incorrect. Try again.");
    }
}

function checkAnswer3() {
    const answer = document.getElementById("answer3").value.trim().toLowerCase();
    if (answer === "cats") { // Update the expected answer to lowercase
        document.getElementById("stage3").style.display = "none";
        document.getElementById("stage4").style.display = "block";
    } else {
        alert("Incorrect. Try again.");
    }
}

function showLineTypesMessage1() {
    var message = document.getElementById("lineTypesMessage1");
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}

function showLineTypesMessage2() {
    var message = document.getElementById("lineTypesMessage2");
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}


function sendEmail() {
    const email = document.getElementById("email").value.trim();
    const message = "I love you papa";
    let hexCode = "";
    for (let i = 0; i < message.length; i++) {
        hexCode += message.charCodeAt(i).toString(16).toUpperCase() + " ";
    }

    if (email) {
        emailjs.send('service_hd4bfnc', 'template_yhivdz8', {
            to_email: email,
            message: hexCode.trim()
        }).then((response) => {
            document.getElementById("result").textContent = "Email sent successfully!";
        }, (error) => {
            document.getElementById("result").textContent = "Failed to send email.";
        });
    } else {
        alert("Please enter a valid email address.");
    }
}

// Initialize EmailJS (make sure to replace YOUR_USER_ID with your actual user ID from EmailJS)
(function() {
    emailjs.init("YQW2Nh0X_ahpPB3nG");
})();
