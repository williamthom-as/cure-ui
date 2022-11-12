import {bindable, bindingMode } from 'aurelia-framework';

export class Exporter {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) exporter = [];

  addSection() {
    if (this.exporter.sections === undefined) {
      this.exporter.sections = []
    }

    this.exporter.sections.push({
      named_range: "default",
      processor: {
          type: "",
          options: {
              file_name: "",
              directory: ""
          }
        }
      })
  }
    
  remove(idx) {
    this.exporter.sections.splice(idx, 1);
  }
}
