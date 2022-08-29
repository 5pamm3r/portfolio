import {iconsSkill} from './iconsSkill.js'
class SkillsList extends HTMLElement {
  constructor() {
    super();
    //Referencia a la raíz del elemento. 
    const shadow = this.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    style.textContent = `
    .skills-area__images {
        padding: 0;
        display: flex;
        gap: 20px;
      }
    `
    this.ulHeader = document.createElement('ul')
    this.ulHeader.setAttribute('class', 'skills-area__images')
    let arr = []
    iconsSkill.forEach(e=>{
      const el = document.createElement('img')
      el.src = e.icon
      el.title = e.name
      arr.push(el)
    })
    shadow.appendChild(style)
    shadow.appendChild(this.ulHeader)
    this.ulHeader.append(...arr)
  }
  //Obtiene los atributos.
  connectedCallback(){
    
  }
}

customElements.define('skills-list', SkillsList)