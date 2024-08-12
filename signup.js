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
        title: "sign up",
        input_name:"User Name",
        input_number: "Phone Number",
        input_email: "Email",
        input_password: "Password",
        input_repass:" Re Password",
        input_Certificate:"Upload Certificate",
        button:"Sign Up",
        pargr1: "Have an account? ",
        link: "login"
    },
    ar:{
        title: "التسجيل",
        input_name:"اسم المستخدم",
        input_number: "رقم الهاتف",
        input_email: "البريد الالكتروني",
        input_password: "كلمة السر",
        input_repass:" تأكيد كلمة السر",
        input_Certificate:"تسجيل الشهادة",
        button:"التسجيل",
        pargr1: " هل لديك حساب ؟",
        link: "تسجيل الدخول"
    },
    fr:{
        title: "Inscription",
        input_name:"Nom d'utilisateur",
        input_number: "Numéro de téléphone",
        input_email: "Email",
        input_password: "Mot de passe",
        input_repass:" Re mot de passe",
        input_Certificate:"Télécharger le certificat",
        button:"Inscription",
        pargr1: "Avez-vous un compte? ",
        link: "Connexion"
    },
    deu:{
        title: "Anmelden",
        input_name:"Benutzername",
        input_number: "Telefonnummer",
        input_email: "Email",
        input_password: "Passwort",
        input_repass:"Re-Passwort",
        input_Certificate:"Zertifikat hochladen",
        button:"Anmelden",
        pargr1: "Haben Sie ein Konto? ",
        link: "Registrierung"
    }
}

const languageSelectTop = document.querySelector("select");
let h1 = document.getElementById("h1");
let lab_name = document.getElementById("lab_name");
let lab_number = document.getElementById("lab_number");
let lab_email = document.getElementById("lab_email");
let lab_password = document.getElementById("lab_password");
let lab_repass = document.getElementById("lab_repass");
let lab_certifi = document.getElementById("lab_certifi");
let btn = document.getElementById("btn");
let p1 = document.getElementById("p1");
let login = document.getElementById("login");

const signUp = document.getElementById('signUp');

languageSelectTop.addEventListener("change", (event)=>{
    setLanguage(event.target.value);
})

const setLanguage = (language)=>{
    Swal.fire({
        title: "Do you want to save the changes?",
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        // denyButtonText: `Don't save`
      }).then((result) => {
        
        if (result.isConfirmed) {
            localStorage.setItem("language", language);
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            localStorage.removeItem('language', language);
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    // var confirmMessage = `You are about to change the language to ${language}. Do you want to save this change for all pages?`;
    // if (confirm(confirmMessage)) {
       
    //     localStorage.setItem("language", language);
    //     alert(`Language changed to ${language}! This change will be applied to all pages.`);
    //   } else {
        
        
    //     localStorage.removeItem('language');
    //   }
    if(language == "ar"){
        h1.innerText = transitions.ar.title;
        lab_name.innerText = transitions.ar.input_name;
        lab_number.innerText = transitions.ar. input_number;
        lab_email.innerText = transitions.ar. input_email;
        lab_password.innerText = transitions.ar.input_password;
        lab_repass.innerText = transitions.ar.input_repass;
        lab_certifi.innerText = transitions.ar.input_Certificate;
        btn.innerText = transitions.ar.button;
        p1.innerText = transitions.ar.pargr1;
        login.innerText = transitions.ar.link;

        signUp.style.direction = 'rtl';
        signUp.style.textAlign = 'right';

    }else if(language == "en"){
        h1.innerText = transitions.en.title;
        lab_name.innerText = transitions.en.input_name;
        lab_number.innerText = transitions.en. input_number;
        lab_email.innerText = transitions.en. input_email;
        lab_password.innerText = transitions.en.input_password;
        lab_repass.innerText = transitions.en.input_repass;
        lab_certifi.innerText = transitions.en.input_Certificate;
        btn.innerText = transitions.en.button;
        p1.innerText = transitions.en.pargr1;
        login.innerText = transitions.en.link;

        signUp.style.direction = 'ltr';
        signUp.style.textAlign = 'left';
    }
    else if(language == "fr"){
        h1.innerText = transitions.fr.title;
        lab_name.innerText = transitions.fr.input_name;
        lab_number.innerText = transitions.fr. input_number;
        lab_email.innerText = transitions.fr. input_email;
        lab_password.innerText = transitions.fr.input_password;
        lab_repass.innerText = transitions.fr.input_repass;
        lab_certifi.innerText = transitions.fr.input_Certificate;
        btn.innerText = transitions.fr.button;
        p1.innerText = transitions.fr.pargr1;
        login.innerText = transitions.fr.link;

        signUp.style.direction = 'ltr';
        signUp.style.textAlign = 'left';
    }
    else if(language == "deu"){
        h1.innerText = transitions.deu.title;
        lab_name.innerText = transitions.deu.input_name;
        lab_number.innerText = transitions.deu. input_number;
        lab_email.innerText = transitions.deu. input_email;
        lab_password.innerText = transitions.deu.input_password;
        lab_repass.innerText = transitions.deu.input_repass;
        lab_certifi.innerText = transitions.deu.input_Certificate;
        btn.innerText = transitions.deu.button;
        p1.innerText = transitions.deu.pargr1;
        login.innerText = transitions.deu.link;

        signUp.style.direction = 'ltr';
        signUp.style.textAlign = 'left';
    }
}


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
let darkmode = localStorage.getItem('darkmode');
const themeswitch = document.getElementById('theme-switch');

const enableDarkmode = ()=>{
    Swal.fire({
        title: "Do you want to save the Dark Mode?",
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        // denyButtonText: `Don't save`
      }).then((result) => {
        if (result.isConfirmed) {
            document.body.classList.add("darkmode");
            localStorage.setItem("darkmode", 'active');
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            document.body.classList.remove("darkmode");
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    // if (confirm("Do you want to switch to dark mode?")) {
    //     document.body.classList.add("darkmode");
    //     localStorage.setItem("darkmode", 'active');
    // }else{
    //     if (confirm("Do you want to switch to light mode?")) {
    //         document.body.classList.remove("darkmode");
            
    //     }
    // }
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

