import {inject, bindable, bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Type {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) type;
  @bindable seed;

  constructor(ea) {
    this.ea = ea;
  };

  get typeOptions() {
    return [
        { id: "", label: "Select" },
        { id: "terminal", label: "Terminal" },
        { id: "csv", label: "CSV" }
    ]
  }

  typeChanged(o,v) {
    if (v !== null && o !== v) {
      this.ea.publish(this.seed + "-remove", {o,v})
    }
  }

}