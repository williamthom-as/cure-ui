import { inject, bindable, bindingMode } from 'aurelia-framework';
import 'select2';
import $ from 'jquery';

@inject(Element)
export class ValidatableSelect2 {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable values;
  @bindable optionValue;
  @bindable optionKey;
  @bindable errors;
  @bindable label;
  @bindable placeholder;
  @bindable multiSelect = true;

  constructor(element) {
      this.element = element;
  }

  attached() {
    const config = {
      allowClear: true,
      width: ''
    };

    if (this.multiSelect) {
      config.tags = true
      config.tokenSeparators = [',', ' '],
      config.insertTag = function (data, tag) {
        data.push(tag);
      }
    }


    if (this.placeholder) {
      config.placeholder = this.placeholder;
    }

    this.select2 = $(this.element).find('select').select2(config);
    
    this.select2.on('change.select2', (e) => {
      this.value = this.select2.val();
    });
  }

  detached() {
    if (this.select2) {
      try {
        this.select2.destroy();
      } catch {
        console.log("Cannot destroy")
      }
      
    }
  }

  valueChanged(o,v) {
    if (o === "") {
      this.select2.val(v);
    }
  }
  
}