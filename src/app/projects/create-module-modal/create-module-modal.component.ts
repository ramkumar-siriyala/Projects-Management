import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-module-modal',
  templateUrl: './create-module-modal.component.html',
  styleUrls: ['./create-module-modal.component.scss'],
})
export class CreateModuleModalComponent implements OnInit {

  moduleForm: FormGroup;

  // projectName: string;
  constructor(public modalCtrl: ModalController, private formBuilder: FormBuilder) {
    this.moduleForm = this.formBuilder.group({
      moduleName: ['', Validators.required],
      moduleDescr: ['', Validators.required],
    });
   }

  ngOnInit() {}

  onOkClick() {
    console.log('onOkClick ', this.moduleForm.value);
    this.modalCtrl.dismiss({
      moduleName: this.moduleForm.value.moduleName,
      moduleDescr: this.moduleForm.value.moduleDescr
    });
  }

  onCancelClick() {
    console.log('onCancelClick ', this.moduleForm.value);
    this.modalCtrl.dismiss();
  }
}
