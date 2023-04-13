var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);





const text = document.querySelector(".text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "IT Support Engineer";

    }, 0);
    setTimeout(() => {
        text.textContent = "Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 8000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "UI/UX Designer";
    }, 12000);

}

textLoad();
setInterval(textLoad, 20000);