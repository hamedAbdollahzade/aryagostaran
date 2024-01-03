console.log("Run-Script");


const toggleVisibale = (div) => {
    const divSupport = document.querySelector(div)
    // console.log(divSupport);
    if (divSupport.classList.contains("hidden")) {
        divSupport.classList.remove("hidden")
    } else {
        divSupport.classList.add("hidden")
    }
}

