import {bindable, bindingMode } from 'aurelia-framework';

export class Build {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) build = [];

  addCandidate() {
    if (this.build.candidates === undefined) {
      this.build.candidates = []
    }

    this.build.candidates.push({
      column: "",
      action: {
        type: "",
        options: {}
      }
    })
  }

  remove(idx) {
    this.build.candidates.splice(idx, 1);
  }
}
