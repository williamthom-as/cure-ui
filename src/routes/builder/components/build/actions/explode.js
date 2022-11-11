import {bindable, bindingMode, computedFrom} from 'aurelia-framework';

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

  // @computedFrom('options', 'options.filter')
  // get values() {
  //   if (this.options.filter === undefined) {
  //     return []
  //   }

  //   return this.options.filter.values
  // }
}