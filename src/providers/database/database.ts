import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public sqlite: SQLite) { }


  /* função tem objetivo de criar ou abrir um banco de dados sqlite*/
  getDB(){
    return this.sqlite.create({
      name: 'lp4-finance',
      location: 'default'
    });
  }
  /* cria a estrutura incial do banco de dados*/

  createDatabase(){
    return this.getDB()
               .then((db: SQLiteObject)=>{
                 //criar minhas tabelas
                 this.createTables(db);

                 //insert dos dados iniciais
                 this.insertDefault(db);
    })
               .catch();
  }
  //cria as tabelas padroes do app
  private createTables(db: SQLiteObject){
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS CONTAS (ID INTEGER PRIMARY KEY AUTOINCREMENT, DESCRICAO)']
    ])
    .then(() => console.log("Tabelas criadas com sucesso!"))
    .catch((e) => console.error("Erro ao criar as tabelas", e));
  }
  private insertDefault(db:SQLiteObject){
    db.executeSql('SELECT COUNT(ID) AS QNTD FROM CONTAS', <any>{})
    .then((data:any) => {
      if(data.rows.item(0).QNTD == 0){
        //inserir CONTAS
        db.sqlBatch([['INSERT INTO CONTAS (DESCRICAO) VALUES (?)', ['Alimentação']],
                    ['INSERT INTO CONTAS (DESCRICAO) VALUES (?)', ['Saúde']],
                    ['INSERT INTO CONTAS (DESCRICAO) VALUES (?)', ['Transporte']]

      ]).then(() => console.log("Inserts de contas realizado com sucesso!"))
        .catch((e) => console.error("Erro ao inserir contas padrão", e))
      }
    })
    .catch((e) => console.error("Erro ao consultar contas", e));

  }
}
