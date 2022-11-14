import {bindable, bindingMode} from 'aurelia-framework';

export class Split {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options;

}