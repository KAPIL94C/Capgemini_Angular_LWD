import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['angular', 'React', 'Vue'];

  topicHasError=true
  submitted= false
  errorMsg = ''

  userModel = new  User('kapil', 'kapil@123', 77777, 'default', 'morning', true);

constructor(private _enrollmentService:EnrollmentService){

}

  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true
    }else{
      this.topicHasError=false
    }
  }

  onSubmit(){
     console.log(this.userModel)
     this.submitted = true
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('success!', data),
      //error => console.log('error!', error)
      error => this.errorMsg = error.statusText
    )
  }
}
