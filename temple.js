

/* ==================================================
   SIGNUP
================================================== */

function signup(){

    let name =
    document.getElementById("signupName").value.trim();

    let email =
    document.getElementById("signupEmail").value.trim();

    let password =
    document.getElementById("signupPassword").value;

    let confirm =
    document.getElementById("signupConfirm").value;


    if(
        name === "" ||
        email === "" ||
        password === "" ||
        confirm === ""
    ){

        showMessage(
            "signupMessage",
            "Please fill all fields.",
            "#ff6b6b"
        );

        return;
    }


    if(password !== confirm){

        showMessage(
            "signupMessage",
            "Passwords do not match.",
            "#ff6b6b"
        );

        return;
    }


    localStorage.setItem("userName",name);
    localStorage.setItem("userEmail",email);
    localStorage.setItem("userPassword",password);


    showMessage(
        "signupMessage",
        "Account created successfully!",
        "#6df28c"
    );


    setTimeout(function(){

        showLogin();

    },1000);

}


/* ==================================================
   LOGIN
================================================== */

function login(){

    let email =
    document.getElementById("loginEmail").value.trim();

    let password =
    document.getElementById("loginPassword").value;


    let savedEmail =
    localStorage.getItem("userEmail");

    let savedPassword =
    localStorage.getItem("userPassword");


    if(
        email === savedEmail &&
        password === savedPassword
    ){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        showWebsite();

    }
    else{

        showMessage(
            "loginMessage",
            "Invalid email or password.",
            "#ff6b6b"
        );

    }

}


/* ==================================================
   SHOW SIGNUP
================================================== */

function showSignup(){

    document.getElementById("signupPage")
    .style.display="flex";

    document.getElementById("loginPage")
    .style.display="none";

    document.getElementById("website")
    .style.display="none";

    document.getElementById("detailPage")
    .style.display="none";

    document.getElementById("receiptPage")
    .style.display="none";

}


/* ==================================================
   SHOW LOGIN
================================================== */

function showLogin(){

    document.getElementById("signupPage")
    .style.display="none";

    document.getElementById("loginPage")
    .style.display="flex";

    document.getElementById("website")
    .style.display="none";

    document.getElementById("detailPage")
    .style.display="none";

    document.getElementById("receiptPage")
    .style.display="none";

}


/* ==================================================
   SHOW WEBSITE
================================================== */

function showWebsite(){

    document.getElementById("signupPage")
    .style.display="none";

    document.getElementById("loginPage")
    .style.display="none";

    document.getElementById("website")
    .style.display="block";

    document.getElementById("detailPage")
    .style.display="none";

    document.getElementById("receiptPage")
    .style.display="none";

}


/* ==================================================
   NAVIGATION
================================================== */

function openPage(pageName,button){

    document
    .querySelectorAll(".page")
    .forEach(function(page){

        page.classList.remove("active");

    });


    document
    .getElementById(pageName)
    .classList.add("active");


    document
    .querySelectorAll(".nav-links button")
    .forEach(function(btn){

        btn.classList.remove("active");

    });


    if(button){

        button.classList.add("active");

    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


function openPageById(pageName){

    document
    .querySelectorAll(".page")
    .forEach(function(page){

        page.classList.remove("active");

    });


    document
    .getElementById(pageName)
    .classList.add("active");


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


function openTemplePage(){

    openPageById("temples");

    document
    .querySelectorAll(".nav-links button")
    .forEach(function(btn){

        btn.classList.remove("active");

    });


    document
    .querySelectorAll(".nav-links button")[1]
    .classList.add("active");

}


/* ==================================================
   SEARCH
================================================== */

function searchTemples(){

    let value =
    document
    .getElementById("templeSearch")
    .value
    .toLowerCase();


    document
    .querySelectorAll(".temple-card")
    .forEach(function(card){

        let name =
        card
        .getAttribute("data-name")
        .toLowerCase();


        if(name.includes(value)){

            card.style.display="block";

        }
        else{

            card.style.display="none";

        }

    });

}


/* ==================================================
   FILTER
================================================== */

function filterTemples(category,button){

    document
    .querySelectorAll(".filter")
    .forEach(function(btn){

        btn.classList.remove("active");

    });


    button.classList.add("active");


    document
    .querySelectorAll(".temple-card")
    .forEach(function(card){

        let cardCategory =
        card.getAttribute("data-category");


        if(
            category === "all" ||
            category === cardCategory
        ){

            card.style.display="block";

        }
        else{

            card.style.display="none";

        }

    });

}


/* ==================================================
   TEMPLE DETAILS
================================================== */

function showDetail(
    title,
    image,
    description,
    location,
    specialty,
    importance
){

    document.getElementById("website")
    .style.display="none";


    document.getElementById("detailPage")
    .style.display="block";


    document.getElementById("receiptPage")
    .style.display="none";


    document.getElementById("detailHero")
    .style.backgroundImage =
    "url('" + image + "')";


    document.getElementById("detailTitle")
    .innerHTML=title;


    document.getElementById("detailShort")
    .innerHTML=
    "Explore the history, culture, traditions and spiritual experience of "
    + title + ".";


    document.getElementById("detailDescription")
    .innerHTML=description;


    document.getElementById("detailLocation")
    .innerHTML=location;


    document.getElementById("detailSpecialty")
    .innerHTML=specialty;


    document.getElementById("detailImportance")
    .innerHTML=importance;


    document.getElementById("detailExperience")
    .innerHTML=
    "A visit to "
    + title
    + " provides an opportunity to experience "
    + specialty
    + ". Visitors can explore temple traditions, architecture, local culture and the peaceful atmosphere of the destination.";


    document.getElementById("detailMore")
    .innerHTML=
    title
    + " is a destination where visitors can spend time exploring religious traditions, architecture and local culture. The journey can include worship, sightseeing, photography and discovering nearby attractions. Visitors should respect local customs and temple guidelines.";


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* ==================================================
   BACK TO TEMPLES
================================================== */

function backToTemples(){

    document.getElementById("detailPage")
    .style.display="none";

    document.getElementById("website")
    .style.display="block";

    openTemplePage();

}


/* ==================================================
   GUIDE BOOKING
================================================== */

function bookGuide(){

    let name =
    document.getElementById("guideName").value.trim();

    let phone =
    document.getElementById("guidePhone").value.trim();

    let date =
    document.getElementById("guideDate").value;


    if(
        name === "" ||
        phone === "" ||
        date === ""
    ){

        showMessage(
            "guideMessage",
            "Please fill all details.",
            "#ff6b6b"
        );

        return;
    }


    /* CREATE BOOKING ID */

    let bookingId =
    "DA" +
    Math.floor(
        100000 +
        Math.random() * 900000
    );


    /* PUT DETAILS INTO RECEIPT */

    document.getElementById("receiptId")
    .innerHTML=bookingId;


    document.getElementById("receiptName")
    .innerHTML=name;


    document.getElementById("receiptPhone")
    .innerHTML=phone;


    document.getElementById("receiptDate")
    .innerHTML=date;


    /* HIDE WEBSITE */

    document.getElementById("website")
    .style.display="none";


    document.getElementById("detailPage")
    .style.display="none";


    /* SHOW RECEIPT */

    document.getElementById("receiptPage")
    .style.display="flex";


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* ==================================================
   CLOSE RECEIPT
================================================== */

function closeReceipt(){

    document.getElementById("receiptPage")
    .style.display="none";

    document.getElementById("website")
    .style.display="block";

    openPageById("guide");

}


/* ==================================================
   PRINT RECEIPT
================================================== */

function printReceipt(){

    window.print();

}


/* ==================================================
   MAP
================================================== */

function openMap(){

    window.open(
        "https://www.google.com/maps/search/Andhra+Pradesh+Temples",
        "_blank"
    );

}


/* ==================================================
   CONTACT
================================================== */

function sendMessage(){

    let name =
    document.getElementById("contactName").value;

    let email =
    document.getElementById("contactEmail").value;

    let message =
    document.getElementById("contactText").value;


    if(
        name === "" ||
        email === "" ||
        message === ""
    ){

        showMessage(
            "contactMessage",
            "Please fill all fields.",
            "#ff6b6b"
        );

        return;

    }


    showMessage(
        "contactMessage",
        "Your message has been sent successfully!",
        "#6df28c"
    );

}


/* ==================================================
   MESSAGE
================================================== */

function showMessage(id,text,color){

    let element =
    document.getElementById(id);

    element.innerHTML=text;

    element.style.color=color;

}


/* ==================================================
   LOGOUT
================================================== */

function logout(){

    localStorage.setItem(
        "loggedIn",
        "false"
    );

    showLogin();

}


/* ==================================================
   PAGE LOAD
================================================== */

window.onload=function(){

    let loggedIn =
    localStorage.getItem("loggedIn");

    let email =
    localStorage.getItem("userEmail");


    if(loggedIn === "true"){

        showWebsite();

    }
    else if(email){

        showLogin();

    }
    else{

        showSignup();

    }
};


