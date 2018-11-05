import {Conta} from "./conta"; 
export class Lancamento {
  ID: number;
  DESCRICAO: string;
  VALOR: number;
  REFERENCIA_MES: number;
  REFERENCIA_ANO: number;
  PAGO: boolean;
  TIPO: string;
  CONTA: Conta;
}
