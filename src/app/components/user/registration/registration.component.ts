import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: HttpService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.register().subscribe(
      (responds: any) =>{
        if (responds.succeded) {
          this.service.formModel.reset();
        }else{
          responds.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                //Username is already taken
                break;

              default:
                //Registration failed.
                break;
            }
          });
        }
      },
      //err => {
        //console.log(err); //error
      //}
    )
  }
}
