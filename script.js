// class MyButton extends HTMLElement{
//     constructor(){
//         super();
//         this.shadow=this.attachShadow({mode:'open'})
//     }

//     connectedCallback(){
//         console.log("i'm connected.")
//         const button= `<button> ${this.innerHTML} </button>`;
//         this.innerHTML=button;
//     }

//     attributeChangedCallback(){

//     }

//     disconnestedCallback(){

//     }
// }

// customElements.define('my-button',MyButton);

class MyButton extends HTMLElement{
    constructor(){
        super();
        this.shadow=this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        console.log("i'm connected.")
        const button=document.createElement('button');
        button.innerHTML=this.innerHTML;
        this.shadow.append(this.#createStyle())
        this.shadow.append(button)
    }

    attributeChangedCallback(){

    }

    disconnestedCallback(){

    }

    #createStyle(){
        const style=document.createElement('style');

        style.innerHTML=`
        button{
            padding:0.5rem 2rem;
            outline:none;
            background:skyblue;
            color:black;
            border:1px solid #fff;
            border-radius:0.25rem;
            cursor:pointer;
        }
        `;

        return style;
    }
}

customElements.define('my-button',MyButton);