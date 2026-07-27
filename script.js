// Smooth scrolling enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Reveal animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="0.8s";

    observer.observe(section);

});
