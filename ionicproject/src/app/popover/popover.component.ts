import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  
  userEmail: string;

  constructor(
    public navCtrl: NavController,
    public authService: AuthenticationService,

    public popoverController:PopoverController) { }

  ngOnInit() {
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
    this.popoverController.dismiss();
  }

 close(){
 this.popoverController.dismiss();
 }
}
