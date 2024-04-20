import "./components/export"
import { getinfo } from "./services/getinfo";
import { getfact } from "./services/getfact";
import card, {datacosas} from './components/card/card'

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    

    async connectedCallback() {
        const fact = await getfact();
        const info = await getinfo('hola')
        console.log(fact);
        console.log(info);
    

    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
        const tarjetas = this.ownerDocument.createElement('',);
    }
}

customElements.define('app-container', AppContainer)