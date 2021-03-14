// const title = document.querySelector("#title");

// title.innerHTML = "Hi ! from JS";
// title.style.color = "white";
// document.title = "Hey hi"

// function handleClick() {
//     title.style.color = "blue";
// }

// window.addEventListener("click", handleClick);


const title = document.querySelector("#title");

const clicked_class = "clicked";

function handleClick() {
    
    // const hasClass = title.classList.contains(clicked_class);

    // if (!hasClass) {
    //     title.classList.add(clicked_class);
    // } else {
    //     title.classList.remove(clicked_class);
    // }

    title.classList.toggle(clicked_class);
}

function init() {
    
    title.addEventListener("click" , handleClick)
} 
init();

// function handleOffline() {
//     console.log("lalalalal");
// }

// function handleOnline() {
//     console.log("Welcome to Internet!");
// }
// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline)
