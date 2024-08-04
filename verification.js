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