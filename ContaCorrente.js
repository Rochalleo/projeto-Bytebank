import { cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof cliente){
        this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo(){
        return this.saldo

    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        } 
    }
    depositar(valor){
        if(valor <= 0){
            return;
        } 

        this.saldo += valor;
        console.log(this.saldo);   

        
        
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }

}
