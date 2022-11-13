import {bindable, bindingMode, computedFrom} from 'aurelia-framework';

export class Explode {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options;

  get typeOptions() {
    return [
        { id: "blacklist", label: "Blacklist" },
        { id: "whitelist", label: "Whitelist" },
      ]
  }
}