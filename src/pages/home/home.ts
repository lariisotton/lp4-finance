import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{ LancamentoAddPage } from '../lancamento-add/lancamento-add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public referencia_mes: number = 0;
  public referencia_ano: number = 0;
  public mes: string = '';

  constructor(public navCtrl: NavController) {
    let date = new Date();
    this.referencia_mes = date.getMonth();
    this.referencia_ano = date.getFullYear();
    }


  ionViewDidEnter() {
  // this.getListCred();
  // this.getListDeb();
  this.getMes(this.referencia_mes);
}


getMes(mes) {
    switch (mes) {
      case 0:
        this.mes = "Janeiro";
        break;
      case 1:
        this.mes = "Fevereiro";
        break;
      case 2:
        this.mes = "Março";
        break;
      case 3:
        this.mes = "Abril";
        break;
      case 4:
        this.mes = "Maio";
        break;
      case 5:
        this.mes = "Junho";
        break;
      case 6:
        this.mes = "Julho";
        break;
      case 7:
        this.mes = "Agosto";
        break;
      case 8:
        this.mes = "Setembro";
        break;
      case 9:
        this.mes = "Outubro";
        break;
      case 10:
        this.mes = "Novembro";
        break;
      case 11:
        this.mes = "Dezembro";
        break;

      default:
        this.mes = "";
        break;
    }
  }

  }

  toLancamentosAdd(){
    this.navCtrl.push(LancamentoAddPage);
  }

}
