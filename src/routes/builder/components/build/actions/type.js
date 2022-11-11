import {bindable, bindingMode} from 'aurelia-framework';

export class Type {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) type;

  get typeOptions() {
    return [
        { id: "", label: "Select" },
        { id: "add", label: "Add" },
        { id: "remove", label: "Remove" },
        { id: "copy", label: "Copy" },
        { id: "explode", label: "Explode" }
    ]
  }

  typeChanged(o,v) {
    console.log(o, v)
    if (v !== null && o !== v) {
      this.actions.options = {};
    }
  }

}