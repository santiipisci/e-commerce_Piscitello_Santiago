let uSession = localStorage.getItem("session");
    if (uSession) {
        window.location.href = "./index.html";
    } 

    if (!session && location.pathname === "/cart.html") {
        window.location.href = "./login.html";
    }