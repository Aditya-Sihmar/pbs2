import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.page.html',
  styleUrls: ['./choose-option.page.scss'],
})
export class ChooseOptionPage implements OnInit {

  userEmail: string;
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService
  ) {}
 
  ngOnInit(){
    
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
  }
 
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }
}
