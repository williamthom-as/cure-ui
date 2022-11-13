import {bindable, bindingMode } from 'aurelia-framework';

export class Candidate {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) candidate = null;

  addTranslation() {
    if (this.candidate.translations === undefined) {
      this.candidate.translations = []
    }

    this.candidate.translations.push({
      strategy: {
          name: "",
          options: {}
      },
      generator: {
          name: "",
          options: {}
      }
    });
  }

  remove(idx) {
    this.candidate.translations.splice(idx, 1);
  }
}
