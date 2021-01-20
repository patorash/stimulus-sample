// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "content", "button", "words" ]
  static values = { enable: Boolean, count: Number }

  connect() {
    this.element.addEventListener('ajax:success', this, false)
    this.contentTarget.addEventListener('input', this, false)
  }

  disconnect() {
    this.contentTarget.removeEventListener('input', this, false)
  }

  handleEvent(event) {
    switch (event.type) {
      case 'input':
        this.enableValue = this.contentTarget.value.length > 0
        this.countValue = this.contentTarget.value.length
        break;
      case 'ajax:success':
        this.contentTarget.value = ""
        break;
    }
  }

  enableValueChanged() {
    this.buttonTarget.disabled = !this.enableValue;
  }

  countValueChanged() {
    this.wordsTarget.innerText = 140 - this.countValue;
  }
}
