import { Component, Provider } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CLassDetails ,Student} from './admission';
import { AdmissionService } from './admission.service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [AdmissionService]
})
export class Page1 {
  classList :CLassDetails[];
  student : Student;

  constructor(public navCtrl: NavController, private addService: AdmissionService) {

    this.getClass()
    
  }

  getClass():void{
    this.addService.getClass().then(classList => this.classList = classList);
   
  }

}
