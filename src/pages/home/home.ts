import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{ LancamentoAddPage } from '../lancamento-add/lancamento-add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toLancamentosAdd(){
    this.navCtrl.push(LancamentoAddPage);
  }

}
