const countBubbleDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () =>{
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
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
    
    // remove the bubble when it's clicked on
    bubble.addEventListener("click", ()=>{
        countBubbleDisplay.textContent = counter ++;
        bubble.remove(); 
    }); 
    // set the auto-desctruction of the bubble
    setTimeout(() => {bubble.remove();}, 8000);
};
// setting time pushing bubble
setInterval(()=>{bubbleMaker();},300);