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
        { id: "add", label: "Add" },
        { id: "remove", label: "Remove" },
        { id: "copy", label: "Copy" },
        { id: "explode", label: "Explode" }
    ]
  }

  typeChanged(o,v) {
    console.log(o, v, this.seed + "-remove")
    if (v !== null && o !== v) {
      this.ea.publish(this.seed + "-remove", {o,v})
    }
  }

}