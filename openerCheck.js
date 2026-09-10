console.log("Opener Check is initialized");
var openerElement;
window.customElements.whenDefined('my-opener').then(function () {
    openerElement = document.querySelector('my-opener');

    if (sessionStorage.getItem("openerSubmitted") === null) {
        openerElement.style.display = "block";
    }
    else {
        openerElement.style.display = "none";
    }

    document.getElementById("visitorForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method: event.target.method,
            body: formData,
        }).then(
            console.log("Form submitted successfully"),
            registerVistor(false),
            openerElement.style.display = "none"
        )
    });
    // document.getElementById("submitVisitor").addEventListener("click", function (event) {
    //     event.preventDefault();
    //     registerVistor(false);
    //     openerElement.style.display = "none";
    // });

    document.getElementById("submitAnon").addEventListener("click", function (event) {
        event.preventDefault();
        registerVistor(true);
        openerElement.style.display = "none";
    });
});

var openerElement = document.getElementById("opener");
// sessionStorage.setItem("openerSubmitted", "HIM");
// sessionStorage.removeItem("openerSubmitted");



function registerVistor(anonCheck) {
    if (!anonCheck) {
        sessionStorage.setItem("openerSubmitted", document.getElementById("name").value);
        sessionStorage.setItem("openerMessage", document.getElementById("message").value);
    } else {
        sessionStorage.setItem("openerSubmitted", "Anonymous");
        sessionStorage.setItem("openerMessage", document.getElementById("message").value);
    }
}

