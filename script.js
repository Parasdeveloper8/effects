const cd = document.getElementById("cd");
let h1 = document.createElement("h1");
let text = document.createTextNode("Hello");
h1.appendChild(text);
cd.appendChild(h1);
   
    let currentRotationY = 0;
    let timeoutId;
    
    cd.addEventListener("mouseover", function () {
        currentRotationY = 180; // Update rotation value
        this.innerText = "";
        this.style.transform = `rotateY(${currentRotationY}deg)`;
        timeoutId = setTimeout(() => {
            this.style.transform = "rotateY(0deg)";
            let h1 = document.createElement("h1");
            let text = document.createTextNode("Hello");
            h1.appendChild(text);
            this.appendChild(h1);
            this.style.fontFamily = "system-ui"; // Reset to original position
        }, 4000);
    });

    
    ;

    