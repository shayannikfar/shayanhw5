class ButtonCount extends HTMLElement {
    constructor(){
        super();
        let but = document.createElement(`button`);
        but.innerHTML = "Times Clicked: ";
        let counter = document.createElement(`output`);
        counter.textContent = 0;
        but.append(counter);
        but.addEventListener("click", ()=>{
            let currentNum = Number(counter.textContent);
            counter.textContent = currentNum + 1;
        });
        this.attachShadow({mode:"open"});
        this.shadowRoot.append(but);
    }
}
customElements.define("button-count", ButtonCount);