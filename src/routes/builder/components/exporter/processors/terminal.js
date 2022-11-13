import {bindable, bindingMode} from 'aurelia-framework';

export class Terminal {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options;
}