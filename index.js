const bubbleMaker =() =>{
    //create the bubble
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    
    // set size for bubble 
    const sizeBubble = Math.random() * 200 + 100 + "px";
    bubble.style.height = sizeBubble;
    bubble.style.width = sizeBubble;
    
    // set location for bubble
    bubble.style.top = Math.random() * 100 + 50 + "%"; 
    bubble.style.left = Math.random() * 100 + "%";
    
    // set the randomly direction of bubble
    bubble.style.setProperty("--left", Math.random() * 100 + "%");
};