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