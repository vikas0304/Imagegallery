let scrollContainer = document.querySelector(".gallery");
        let backBtn = document.getElementById("backbtn");
        let nextBtn = document.getElementById("nextbtn");

        scrollContainer,addEventListener("wheel" , (evt) =>{
            evt.preventDefault();
            scrollContainer.style.scrollBehavior = "auto";
            scrollContainer.scrollLeft += evt.deltaY
        });

        nextBtn.addEventListener("click" , () =>{
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 900;
        })

        backBtn.addEventListener("click" , () =>{
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 900;
        })