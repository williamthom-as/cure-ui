import {bindable, bindingMode} from 'aurelia-framework';

export class Match {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options;

}