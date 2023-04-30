(function() {

    const hamburger = document.getElementById("hamburgerID");
    const menu = document.getElementById("menuID");
    const closeMenu = document.getElementById("closemenuID");
    const deleteInput = document.getElementById("deleteinputID");
    const input = document.getElementById("inputID");

    const gameInfo = document.getElementById("gameinfoID");
    const support = document.getElementById("supportID");
    const ourSocials = document.getElementById("oursocialsID");
    const gameInfoMenu = document.getElementById("gameinfomenuID");
    const supportMenu = document.getElementById("supportmenuID");
    const ourSocialsMenu = document.getElementById("oursocialsmenuID");



    hamburger.addEventListener("click", function() {
        menu.classList.remove("hidden");
    })

    closeMenu.addEventListener("click", () => {
        menu.classList.add("hidden");
    })

    deleteInput.addEventListener("click", () => {
        input.value = "";
    })

    gameInfo.addEventListener("click", () => {
        gameInfoMenu.classList.toggle("hidden");
    })

    support.addEventListener("click", () => {
        supportMenu.classList.toggle("hidden");
    })

    ourSocials.addEventListener("click", () => {
        ourSocialsMenu.classList.toggle("hidden");
    })
    

})();