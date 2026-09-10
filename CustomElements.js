console.log("Custom Elements are connected");

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
           <header>
        <p>*your name* Portfolio</p>
        <div id="navigationButtons">
            <button id="homeButton" onclick="window.location.href='index.html'">Home</button>
            <button onclick="window.location.href='Game1.html'"> Game 1</button>
            <button onclick="window.location.href='Game2.html'"> Game 2</button>
            <button onclick="window.location.href='Game3.html'"> Game 3</button>
            <button onclick="window.location.href='HTMLGames.html'"> HTML Games</button>
        </div>

    </header>
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer> 
        <p>bye</p>
    </footer>
        `
    }
}

class MyOpener extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id ="opener">
        <form action = "https://api.web3forms.com/submit" method="POST" id="visitorForm"> 
            <input type="hidden" name="access_key" value="9bc84ad8-95e2-4862-97ce-95d63d0f73ae">
            <label for=" "> Name <input type="text" name="name" id="name" placeholder="Enter your name"></label>
            <label for=" "> Message <textarea name="message" id="message" placeholder="Enter your message"></textarea></label>
            <input type="submit" id="submitVisitor" value="Submit">
            <input type="button" id="submitAnon" value="Submit Anonymously"> 
            </form>`
    }
}




customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-opener', MyOpener);