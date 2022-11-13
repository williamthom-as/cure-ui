import {inject, bindable, bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Name {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) name;
  @bindable seed;

  constructor(ea) {
    this.ea = ea;
  };

  get typeOptions() {
    return [
      { id: "", label: "Select" },
      { id: "case", label: "Case" },
      { id: "character", label: "Character" },
      { id: "eval", label: "Evaluator" },
      { id: "faker", label: "Faker" },
      { id: "guid", label: "Guid" },
      { id: "hex", label: "Hex" },
      { id: "number", label: "Number" },
      { id: "placeholder", label: "Placeholder" },  
      { id: "redact", label: "Redact" },  
      { id: "row", label: "Row" },  
      { id: "variable", label: "Variable" }
    ]
  }

  typeChanged(o,v) {
    if (v !== null && o !== v) {
      this.ea.publish(this.seed + "-remove", {o,v})
    }
  }

}