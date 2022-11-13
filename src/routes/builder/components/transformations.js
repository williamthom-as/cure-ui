import {bindable, bindingMode } from 'aurelia-framework';

export class Transformations {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) transformations = [];

  addCandidate() {
    if (this.transformations.candidates === undefined) {
      this.transformations.candidates = []
    }

    this.transformations.candidates.push({
      column: "",
      named_range: "default",
      translations: []
    })
  }

  remove(idx) {
    this.transformations.candidates.splice(idx, 1);
  }
}


// "candidates": [
//   {
//       "column": "SubscriptionGuid",
//       "translations": [
//           {
//               "strategy": {
//                   "name": "full",
//                   "options": {}
//               },
//               "generator": {
//                   "name": "guid",
//                   "options": {}
//               }
//           }
//       ]
//   }
// ]