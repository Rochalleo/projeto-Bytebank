import {cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


//declaracao dos clientes
const cliente1 = new cliente('Ricardo', 12312332112);

const cliente2 = new cliente('Alice', 99988877766);

// declaracao de conta corrente 
const contaCorrente1 = new ContaCorrente(1001, cliente1);

const contaCorrente2 = new ContaCorrente(1002, cliente2);

// funcoes de conta



console.log(ContaCorrente.numeroDeContas);

