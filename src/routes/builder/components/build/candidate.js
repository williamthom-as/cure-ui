import {bindable, bindingMode } from 'aurelia-framework';

export class Candidate {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) candidate = null;
}
