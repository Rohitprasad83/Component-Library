const starRatings = document.querySelectorAll(".star__ratings");
const ratingOutput = document.querySelector(".rating__output");
for (let i = 0; i < starRatings.length; i++) {
    let star = starRatings[i];
    star.addEventListener('click', () => {
        let j = i;
        if (star.className.includes("far fa-star")) {
            ratingOutput.innerText = `You have rated ${j + 1} stars`;
            for (j; j >= 0; --j){
                starRatings[j].className = "fas fa-star star__ratings";
            }
        }
        else {
            ratingOutput.innerText = `You have rated ${j} stars`;
            for (j; j < starRatings.length; ++j){
                starRatings[j].className = "far fa-star star__ratings"
            }
        }
    })
}