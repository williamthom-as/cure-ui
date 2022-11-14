import {inject, bindable, bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Name {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) name;
  @bindable seed;

  constructor(ea) {
    this.ea = ea;
    this.seed = (Math.random() + 1).toString(36).substring(7);
    this.transformOptions = this.transformOptions.bind(this);
  };

  get typeOptions() {
    return [
        { id: "", label: "Select" },
        { id: "full", label: "Full" },
        { id: "append", label: "Append" },
        { id: "starts_with", label: "Starts With" },
        { id: "ends_with", label: "Ends With" },
        { id: "regex", label: "Regex" },
        { id: "split", label: "Split" },
        { id: "match", label: "Match" },        
    ]
  }

  typeChanged(o,v) {
    if (v !== null && o !== v) {
      this.ea.publish(this.seed + "-remove", {o,v})
    }
  }

  transformOptions(o, v) {
    if (v !== null && o !== v) {
      this.action.options = {};
    }
  }

}