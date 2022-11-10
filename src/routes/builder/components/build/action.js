import {bindable, bindingMode} from 'aurelia-framework';

export class Action {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) action;

  get typeOptions() {
    return [
        { id: "", label: "Select" },
        { id: "add", label: "Add" },
        { id: "remove", label: "Remove" },
        { id: "copy", label: "Copy" },
        { id: "explode", label: "Explode" }
    ]
  }

}