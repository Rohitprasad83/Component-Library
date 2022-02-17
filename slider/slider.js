
const sliderInput = document.querySelector(".slider__input");
const sliderOutput = document.querySelector(".slider__output");


sliderInput.addEventListener("change", () => {
    sliderOutput.innerText = `Your Selected Price is ${sliderInput.value}`;
})
