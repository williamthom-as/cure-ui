import {bindable, bindingMode } from 'aurelia-framework';

export class NamedRange {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) namedRange = null;
}
