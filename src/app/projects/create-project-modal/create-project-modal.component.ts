import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApisService } from 'src/app/_services/apis.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-project-modal',
  templateUrl: './create-project-modal.component.html',
  styleUrls: ['./create-project-modal.component.scss'],
})
export class CreateProjectModalComponent implements OnInit {

  projectForm: FormGroup;

  // projectName: string;
  constructor(public modalCtrl: ModalController, private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectDescr: ['', Validators.required],
    });
   }

  ngOnInit() {}

  onOkClick() {
    console.log('onOkClick ', this.projectForm.value);
    this.modalCtrl.dismiss({
     projectName: this.projectForm.value.projectName,
     projectDescr: this.projectForm.value.projectDescr
    });
  }

  onCancelClick() {
    console.log('onCancelClick ', this.projectForm.value);
    this.modalCtrl.dismiss();
  }

}
