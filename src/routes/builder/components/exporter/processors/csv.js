import {bindable, bindingMode, computedFrom} from 'aurelia-framework';

export class Csv {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options;
}