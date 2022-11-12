import { inject, bindable, bindingMode, BindingEngine } from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog-lite';
import {LoadFromFileModalDialog} from './dialog/load-from-file-modal-dialog';

async function readFileAsDataContents(file) {
  let result = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);

      if (file) {
        fileReader.readAsText(file);
      }
  });

  return result;
}


@inject(DialogService, BindingEngine, 'AppService')
export class Index {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) model = this.cleanModel;

  selectedFiles = [];
  @bindable firstFile = null;

  constructor(dialogService, bindingEngine, appService) {
    this.dialogService = dialogService;
    this.appService = appService;
    this.bindingEngine = bindingEngine;
    let subscription = this.bindingEngine
      .propertyObserver(this, 'selectedFiles')
      .subscribe((newValue, oldValue) => { this.selectedFilesChanged(newValue, oldValue) });
  }

  selectedFilesChanged(newValue, _oldValue) {
    this.firstFile = newValue[0];

    readFileAsDataContents(this.firstFile).then(dataContents => {
      this.isLoading = false;


      const model = JSON.parse(dataContents);
      if (model.extraction === undefined) {
        this.showInfo("Invalid file", "File is not valid or corrupted.");
      } else {
        this.model = model;
        this.showInfo("File loaded", "File has been loaded successfully");
      }
    });

  }


  loadFromFileModal() {
    console.log("here in fn")
    this.dialogService.open({
      viewModel: LoadFromFileModalDialog,
      model: {},
    }).then(
      (resp) => {
        console.log(resp);
      },
      (resp) => {
        console.log("cancelled", resp);
      }
    )
  }


  reset() {
    this.selectedFiles = [];
    this.firstFile = null;
    this.model = this.cleanModel;
  }

  showInfo(title, message) {
    this.appService.showInfo(title, message)
  }

  get cleanModel() {
    return {
      extraction: {
        named_ranges: [],
        variables: []
      },
      build: {
        candidates: []
      },
      transformations: {
        candidates: [],
        placeholders: {}
      },
      exporter: {
        sections: []
      }
    }
  }

}