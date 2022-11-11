import {inject, bindable, bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Action {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) action;

  constructor(ea) {
    this.ea = ea;
    this.seed = (Math.random() + 1).toString(36).substring(7);
    this.transformOptions = this.transformOptions.bind(this);
  }
  
  attached() {
    console.log(this.seed + "-remove", "queue")
    this.subscribers = [
      this.ea.subscribe(this.seed + "-remove", this.transformOptions)
    ]
  }

  detached() {
    _.each(this.subscribers, s => s.dispose());
  }

  get typeOptions() {
    return [
        { id: "", label: "Select" },
        { id: "add", label: "Add" },
        { id: "remove", label: "Remove" },
        { id: "copy", label: "Copy" },
        { id: "explode", label: "Explode" }
    ]
  }

  transformOptions(o, v) {
    console.log(o, v, "event")
    if (v !== null && o !== v) {
      this.action.options = {};
    }
  }
}