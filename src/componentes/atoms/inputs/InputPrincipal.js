import { useRef } from "react";
import './InputPrincipal.css'

export default function InputPrincipal({placeholder,tipo,funcaoChange}){

    const ref = useRef("");

    return (
        <>
            <input ref = {ref} placeholder = {placeholder} className = "campoTexto form-control" type={tipo} onChange={() => funcaoChange(ref.current.value)}/>
        </>
    )
}