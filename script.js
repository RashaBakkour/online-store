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


const inputs = document.querySelectorAll('input');
        
        inputs.forEach(input => {
            const label = input.previousElementSibling;

            input.addEventListener('focus', () => {
                label.style.transform = 'translateY(-25px)';
                label.style.transition = 'transform 0.3s ease';
            });

            input.addEventListener('blur', () => {
                if (input.value === '') {
                    label.style.transform = 'translateY(-8px)';
                }
            });
        });

// change languages
const transitions = {
    en:{
        title: "login",
        input_email: "Email",
        input_number: "Phone Number",
        input_password: "Password",
        button:"login",
        pargr1: "Forgot Password",
        pargr2: " Don't have an account?",
        link: "Signup",
        // alert_title:"Do you want to save the changes?",
        // confirmButtonText: "Save",
        // denyButtonText: "Don't save"
    },
    ar:{
        title: "تسجيل الدخول",
        input_email: "البريد الالكتروني",
        input_number: "رقم الهاتف",
        input_password: "كلمة السر",
        button:"تسجيل الدخول",
        pargr1: "نسيت كلمة السر",
        pargr2: " ليس لديك حساب ؟",
        link: "تسجيل",
        // alert_title:"هل ترغب في حفظ التغييرات؟",
        // confirmButtonText: "حفظ",
        // denyButtonText: "الغاء"
    },
    fr:{
        title: "Connexion",
        input_email: "Email",
        input_number: "Numéro de téléphone",
        input_password: "Mot de passe",
        button:"Connexion",
        pargr1: " Mot de passe oublié",
        pargr2: " Vous n'avez pas de compte ?",
        link: "Enregistrement",
        // alert_title:"Voulez-vous enregistrer les modifications ?",
        // confirmButtonText: "sauvegarder",
        // denyButtonText: "Annuler"
    },
    deu:{
        title: "Einloggen",
        input_email: "Email",
        input_number: "Telefonnummer",
        input_password: "Passwort",
        button:"Einloggen",
        pargr1: "Passwort vergessen",
        pargr2: " Haben Sie kein Konto ?",
        link: "Registrierung",
        // alert_title:"Möchten Sie die Änderungen speichern?",
        // confirmButtonText: "Speichern",
        // denyButtonText: "Stornierung"
    }
}


const languageSelectTop = document.querySelector("select");
let h1 = document.getElementById("h1");
let lab_email = document.getElementById("lab_email");
let lab_number = document.getElementById("lab_number");
let lab_password = document.getElementById("lab_password");
let btn = document.getElementById("btn");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let signUp = document.getElementById("signUp");

const login = document.getElementById('login');

// languageSelectTop.addEventListener("change", (event)=>{
//     setLanguage(event.target.value);
    
// })
// const  saveLanguage = (language) =>{
//     localStorage.setItem('language', language);
// }


// Apply language preference on page load
// languageSelectTop.addEventListener('change', (event)=> {
//     localStorage.getItem('language') || 'en';
//     setLanguage(event.target.value);
// });

const setLanguage = (language)=>{
    Swal.fire({
        title: "Do you want to save the changes?",
        showCancelButton: true,
        confirmButtonText: "Save",
        // denyButtonText: `Don't save`
    }).then((result) => {
        
        if (result.isConfirmed) {
        //   Swal.fire("Saved!", "", "success");
            localStorage.setItem("language", language);
        } else if (result.isDenied) {
        //   Swal.fire("Changes are not saved", "", "info");
            localStorage.removeItem('language', language);
        }
    });


    
    if(language == "ar"){
        h1.innerText = transitions.ar.title;
        lab_email.innerText = transitions.ar. input_email;
        lab_number.innerText = transitions.ar. input_number;
        lab_password.innerText = transitions.ar.input_password;
        btn.innerText = transitions.ar.button;
        p1.innerText = transitions.ar.pargr1;
        p2.innerText = transitions.ar.pargr2;
        signUp.innerText = transitions.ar.link;
        
        login.style.direction = 'rtl';
        login.style.textAlign = 'right';
       
        
    //    document.body.style.direction="rtl";
        // document.getElementById('signUp').dir = 'rtl';
        // document.documentElement.dir = 'rtl';

    }else if(language == "en"){
        
        h1.innerText = transitions.en.title;
        lab_email.innerText = transitions.en.input_email;
        lab_number.innerText = transitions.en.input_number;
        lab_password.innerText = transitions.en.input_password;
        btn.innerText = transitions.en.button;
        p1.innerText = transitions.en.pargr1;
        p2.innerText = transitions.en.pargr2;
        signUp.innerText = transitions.en.link;

        login.style.direction = 'ltr';
        login.style.textAlign = 'left';
    }
    else if(language == "fr"){
       
        h1.innerText = transitions.fr.title;
        lab_email.innerText = transitions.fr.input_email;
        lab_number.innerText = transitions.fr.input_number;
        lab_password.innerText = transitions.fr.input_password;
        btn.innerText = transitions.fr.button;
        p1.innerText = transitions.fr.pargr1;
        p2.innerText = transitions.fr.pargr2;
        signUp.innerText = transitions.fr.link;
        
        login.style.direction = 'ltr';
        login.style.textAlign = 'left';
    }
    else if(language == "deu"){
        
        h1.innerText = transitions.deu.title;
        lab_email.innerText = transitions.deu.input_email;
        lab_number.innerText = transitions.deu.input_number;
        lab_password.innerText = transitions.deu.input_password;
        btn.innerText = transitions.deu.button;
        p1.innerText = transitions.deu.pargr1;
        p2.innerText = transitions.deu.pargr2;
        signUp.innerText = transitions.deu.link;

        login.style.direction = 'ltr';
        login.style.textAlign = 'left';
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
// let darkmode = localStorage.getItem('darkmode');
// const themeswitch = document.getElementById('theme-switch');

// const enableDarkmode = ()=>{
//     document.body.classList.add('darkmode');
//     localStorage.setItem('darkmode', 'active');
// }

// const disableDarkmode = ()=>{
//     document.body.classList.remove('darkmode');
//     localStorage.setItem('darkmode', null);
// }

// if (darkmode === 'active') enableDarkmode();

// themeswitch.addEventListener("click", ()=>{
//     darkmode = localStorage.getItem('darkmode');
//     darkmode !=="active" ? enableDarkmode() : disableDarkmode();
// })

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
    //     } else if (result.isDenied) {
    //         document.body.classList.remove("darkmode");
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





