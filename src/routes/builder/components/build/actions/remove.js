import {bindable, bindingMode} from 'aurelia-framework';

export class Remove {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options;

  // optionsChanged() {
  //   this.options = {};
  // }

}