import {bindable, bindingMode} from 'aurelia-framework';

export class Explode {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options;

  // optionsChanged() {
  //   this.options = {};
  // }

  get typeOptions() {
    return [
        { id: "blacklist", label: "Blacklist" },
        { id: "whitelist", label: "Whitelist" },
      ]
  }
}