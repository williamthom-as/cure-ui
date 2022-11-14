import {bindable, bindingMode} from 'aurelia-framework';

export class BaseOptions {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options;

}