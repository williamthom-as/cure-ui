import {bindable, bindingMode } from 'aurelia-framework';

export class Variable {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) variable = null;
}
