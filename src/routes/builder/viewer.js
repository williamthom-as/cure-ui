import {computedFrom, bindable} from 'aurelia-framework';

export class Viewer {
  @bindable watch = null;
  
  updateJson() {
    if (this.watch === null) {
      this.json = 'null';
    } else if (this.watch === undefined) {
      this.json = 'undefined'
    } else {
      this.json = JSON.stringify(this.watch, null, 2);
    }
  }
  
  bind() {
    this.updateJson();
    
    window.setInterval(() => {
      this.updateJson()
    }, 500);
  }
  
  unbind() {
    this.watch = null;
    clearInterval(this.interval);
  }
}