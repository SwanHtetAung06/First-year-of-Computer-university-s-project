const watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});


const hidden = document.querySelectorAll(".hidden");
hidden.forEach((entries)=>{
    watcher.observe(entries);
});