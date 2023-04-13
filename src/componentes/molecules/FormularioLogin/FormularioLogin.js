import { useEffect, useState } from "react";
import BotaoPrincipal from "../../atoms/botoes/BotaoPrincipal";
import InputPrincipal from "../../atoms/inputs/InputPrincipal";
import './FormularioLogin.css';

export default function FormularioLogin({getUsuarioSenha}){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    function FuncClick(){
        console.log("ola func")
    }

    function funcInputSenha(text){
        setSenha(text);
    }
    
    function funcInputUsuario(text){
        setUsuario(text);
    }

    useEffect(() => {
        getUsuarioSenha({ usuario, senha });
    }, [usuario, senha]);
    
    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="titulo2">Fazer loginnnn</h2>
                <div className="form-group">
                    <InputPrincipal placeholder = "Usuário" tipo = "text" funcaoChange = {funcInputUsuario}/>
                </div>
                <div className="form-group">
                    <InputPrincipal placeholder = "Senha" tipo = "password" funcaoChange = {funcInputSenha}/>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <BotaoPrincipal mensagem = "Entrar" FuncClick={FuncClick} corBotao = "Azul"/>
                    </div>
                    <div className="col-sm-12">
                        <BotaoPrincipal mensagem = "Cadastre-se" FuncClick={FuncClick} corBotao = "Vermelho"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
