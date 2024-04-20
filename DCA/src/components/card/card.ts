import { getinfo } from "../../services/getinfo";
import { getfact } from "../../services/getfact";
import styles from './card.css'

export enum datacosas {
    'image' = 'image',
    'text' = 'text',
}

class Card extends HTMLElement {
    image? : string;
    text? : string


  constructor() {
    super(); // always call super() first in the ctor.
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render()
  };

  static get observedAttributes(){
    const attrs: Record<datacosas, null> = {
        image: null,
        text:null
 
    };
    return Object.keys(attrs);
  }


  attributeChangedCallback(attrName: datacosas, oldVal: any, newVal: any) {
    switch (attrName) {
        default:
            this[attrName] = newVal;
            break;
    }

    this.render();
}


  render(){
    if (this.shadowRoot) {
      const cardFilm = this.ownerDocument.createElement('div')
      cardFilm.className = 'carta'
      const titulo = this.ownerDocument.createElement('h1')
      titulo.innerHTML = 'CAT FACTS'

      const image = this.ownerDocument.createElement('img');
      image.src = this.image || '';
      image.alt = 'Film Image';
      const boton = this.ownerDocument.createElement('button');
    boton.innerHTML = 'get new fact';
    boton.setAttribute('id', 'btnnew');


    }
    const cssprofile = this.ownerDocument.createElement('style');
  cssprofile.innerHTML = styles;
  this.shadowRoot?.appendChild(cssprofile);
  }


}


window.customElements.define('card', Card);
export default Card
