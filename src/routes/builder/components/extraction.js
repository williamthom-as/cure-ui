import {bindable, bindingMode } from 'aurelia-framework';

export class Extraction {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) extraction = [];

  addNamedRange() {
    if (this.extraction.named_ranges === undefined) {
      this.extraction.named_ranges = []
    }

    this.extraction.named_ranges.push({
      name: "",
      section: "",
    })
  }

  removeNamedRange(idx) {
    this.extraction.named_ranges.splice(idx, 1);
  }

  addVariable() {
    if (this.extraction.variables === undefined) {
      this.extraction.variables = []
    }

    this.extraction.variables.push({
      name: "",
      type: "",
      location: ""
    })
  }

  removeVariable(idx) {
    this.extraction.variables.splice(idx, 1);
  }
}
