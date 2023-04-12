// only to conveniently set width and height in this pen.

let widthInput = document.getElementById("slider-width");
widthInput.addEventListener("change",(e)=>{
    let currentValue = e.currentTarget.value;
    let pSliderWidth = document.getElementById("pSlider");
    pSliderWidth.style.width = `${currentValue}px`
    // for that we want to add some;
    let liSliderWidth = document.getElementsByClassName(".li-slide");
    for(let i = 0; i< liSliderWidth.length; i++)
    {
        liSliderWidth[i].style.width = `${currentValue}px`;
    }
}); let heightInput = document.getElementById("slider-height");

heightInput.addEventListener("change",(e)=>{
    let currentValue = e.currentTarget.value;
    let pSliderWidth = document.getElementById("pSlider");
    pSliderWidth.style.height = `${currentValue}px`;

    let liSliderWidth = document.getElementsByClassName(".li-slide");
    for(let i=0; i<liSliderWidth.length; i++){
        liSliderWidth[i].style.height = `${currentValue}px`;
    }
});