const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items")
        }else{
            entry.target.classList.remove("show-items")
        }
    });
});


const scrollright = document.querySelectorAll(".scroll-right");
scrollright.forEach((el)=>observer.observe(el));

const scrollleft = document.querySelectorAll(".scroll-left");
scrollleft.forEach((el)=>observer.observe(el));

// change languages
const transitions = {
    en:{
        title: "Inter Code",
        Text: "The verification code has been sent to your email",
        pargr1:"*****@gmail.com",
        pargr2:"The code consists of 6 digits containing letters and numbers and is valid for 10 minutes.",
        button:"Verify"
    },
    ar:{
        title: "أدخل الرمز",
        Text: "تم ارسال رمز التحقق الى بريدك الالكتروني",
        pargr1:"*****@gmail.com",
        pargr2:"يتكون الرمز من 6 أرقام تشمل أحرفًا وأرقامًا وهو صالح لمدة 10 دقائق",
        button:"تحقق"
    },
    fr:{
        title: "Code Inter",
        Text: "Le code de vérification a été envoyé à votre adresse e-mail.",
        pargr1:"*****@gmail.com",
        pargr2:"Le code se compose de 6 chiffres contenant des lettres et des chiffres, et il est valable pendant 10 minutes.",
        button:"Vérifier"
    },
    deu:{
        title: "Inter-Code",
        Text: "Der Verifizierungscode wurde an Ihre E-Mail-Adresse gesendet.",
        pargr1:"*****@gmail.com",
        pargr2:"Der Code besteht aus 6 Ziffern, die Buchstaben und Zahlen enthalten, und ist 10 Minuten lang gültig.",
        button:"Überprüfen"
    }
}

const languageSelectTop = document.querySelector("select");
let h1 = document.getElementById("h1");
let h3 = document.getElementById("h3");
let email = document.getElementById("email");
let code = document.getElementById("code");
let btn = document.getElementById("btn");

// languageSelectTop.addEventListener("change", (event)=>{
//     setLanguage(event.target.value);
// })

const setLanguage = (language)=>{
    Swal.fire({
        title: "Do you want to save the changes?",
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        
        if (result.isConfirmed) {
            localStorage.setItem("language", language);
            // Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            localStorage.removeItem('language', language);
            // Swal.fire("Changes are not saved", "", "info");
        }
      });
    if(language == "ar"){
        h1.innerText = transitions.ar.title;
        h3.innerText = transitions.ar. Text;
        email.innerText = transitions.ar. pargr1;
        code.innerText = transitions.ar.pargr2;
        btn.innerText = transitions.ar.button;

    }else if(language == "en"){
        h1.innerText = transitions.en.title;
        h3.innerText = transitions.en. Text;
        email.innerText = transitions.en. pargr1;
        code.innerText = transitions.en.pargr2;
        btn.innerText = transitions.en.button;
    }
    else if(language == "fr"){
        h1.innerText = transitions.fr.title;
        h3.innerText = transitions.fr. Text;
        email.innerText = transitions.fr. pargr1;
        code.innerText = transitions.fr.pargr2;
        btn.innerText = transitions.fr.button;
    }
    else if(language == "deu"){
        h1.innerText = transitions.deu.title;
        h3.innerText = transitions.deu. Text;
        email.innerText = transitions.deu. pargr1;
        code.innerText = transitions.deu.pargr2;
        btn.innerText = transitions.deu.button;
    }
}

function getSelectedLanguage() {
    return localStorage.getItem('language') || 'en'; // default language
}

languageSelectTop.addEventListener("change", (event)=>{
        setLanguage(event.target.value);

})

document.addEventListener('DOMContentLoaded', () => {
    const selectedLanguage = getSelectedLanguage();
    setLanguage(selectedLanguage);
});


// dark mode
let darkmode = localStorage.getItem('darkmode');
const themeswitch = document.getElementById('theme-switch');

const enableDarkmode = ()=>{
    // Swal.fire({
    //     title: "Do you want to save the Dark Mode?",
    //     showCancelButton: true,
    //     confirmButtonText: "Save",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //         document.body.classList.add("darkmode");
    //         localStorage.setItem("darkmode", 'active');
    //       Swal.fire("Saved!", "", "success");
    //     } else if (result.isDenied) {
    //         document.body.classList.remove("darkmode");
    //       Swal.fire("Changes are not saved", "", "info");
    //     }
    //   });
    if (confirm("Do you want to switch to dark mode?")) {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkmode", 'active');
    }else{
        if (confirm("Do you want to switch to light mode?")) {
            document.body.classList.remove("darkmode");
            
        }
    }
}

const disableDarkmode = ()=>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === 'active') enableDarkmode();

themeswitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode');
    darkmode !=="active" ? enableDarkmode() : disableDarkmode();
})

