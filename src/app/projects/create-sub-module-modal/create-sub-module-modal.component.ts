import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-sub-module-modal',
  templateUrl: './create-sub-module-modal.component.html',
  styleUrls: ['./create-sub-module-modal.component.scss'],
})
export class CreateSubModuleModalComponent implements OnInit {

  subModuleForm: FormGroup;

  // projectName: string;
  constructor(public modalCtrl: ModalController, private formBuilder: FormBuilder) {
    this.subModuleForm = this.formBuilder.group({
      subModuleName: ['', Validators.required],
      subModuleDescr: ['', Validators.required],
    });
   }

  ngOnInit() {}

  onOkClick() {
    console.log('onOkClick ', this.subModuleForm.value);
    this.modalCtrl.dismiss({
      subModuleName: this.subModuleForm.value.subModuleName,
      subModuleDescr: this.subModuleForm.value.subModuleDescr
    });
  }

  onCancelClick() {
    console.log('onCancelClick ', this.subModuleForm.value);
    this.modalCtrl.dismiss();
  }
}
