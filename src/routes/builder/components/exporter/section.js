import {bindable, bindingMode } from 'aurelia-framework';

export class Section {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) section = null;
}
