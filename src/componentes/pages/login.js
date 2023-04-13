
import React, { useEffect, useState } from 'react';
import FormularioLogin from "../molecules/FormularioLogin/FormularioLogin";
import TopBar from '../molecules/TopBar/TopBar';


export default function Login(){

    const [usuarioDados, setUsuarioDados] = useState({
        usuario: "",
        senha: "",
    });
    
    const links = [{titulo:"teste",rota:"rota"

    }, {titulo:"teste2",rota:"rota2"}]

   // const links = [];

    function getUsuarioSenha(usuarioDados) {
        setUsuarioDados({ ...usuarioDados});
        console.log("ASD");
        
    }

    useEffect(() => {
        console.log(usuarioDados)
    }, [usuarioDados]);

    return (

        <>
            <TopBar corTitulo = 'Branco' tamanhoTitulo = "3" titulo = "TopsVale" listaLinks = {links}/>
            <FormularioLogin getUsuarioSenha={getUsuarioSenha} />
        </>
    )
} 
