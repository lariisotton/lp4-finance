import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Lancamento } from '../../class/lancamento';
import { ContasDaoProvider } from '../../providers/contas-dao/contas-dao';

/**
 * Generated class for the LancamentoAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lancamento-add',
  templateUrl: 'lancamento-add.html',
})


export class LancamentoAddPage {

public lancamento: Lancamento;
public contas: any[] = [];

  constructor(public navCtrl: NavController,
              // public navParams: NavParams,
             public daoContas: ContasDaoProvider) {
    this.lancamento = new Lancamento();
  }

  ionViewDidEnter() {
   this.getContas();
 }

 getContas() {
    this.daoContas.getList().then((data:any) => {
      this.contas = data;
    }).catch(e => console.error(e));
  }

}
