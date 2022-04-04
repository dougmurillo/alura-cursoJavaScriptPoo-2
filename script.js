import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Douglas", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Murillo", 5000, 98745632100);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 78945612379, "456" )
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123456");


console.log(gerenteEstaLogado,diretorEstaLogado, clienteEstaLogado);



