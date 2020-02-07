import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-suspect-desc',
  templateUrl: './suspect-desc.page.html',
  styleUrls: ['./suspect-desc.page.scss'],
})
export class SuspectDescPage implements OnInit {

//  userEmail: string;
  constructor(/*public navCtrl: NavController,
    public authService: AuthenticationService,
    public popoverController: PopoverController*/) { }

  ngOnInit() {
    /*if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }*/
  }

  /*logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
}*/
}

