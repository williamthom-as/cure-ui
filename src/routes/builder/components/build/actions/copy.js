import {bindable, bindingMode} from 'aurelia-framework';

export class Copy {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options;

  // optionsChanged() {
  //   this.options = {};
  // }
}