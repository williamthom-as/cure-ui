import {bindable, bindingMode } from 'aurelia-framework';

export class Translation {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) translation = null;
}
