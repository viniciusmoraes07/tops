import './BotaoPrincipal.css'

export default function BotaoPrincipal({mensagem, corBotao, FuncClick}){

    function retornoBotao(){
        switch (corBotao) {

            case "Vermelho":
                return <button className = "botao btn btn-danger" type="button" onClick = { () => FuncClick()} >{mensagem}</button>
            case "Azul":
                return <button className = "botao btn btn-primary" type="button" onClick = { () => FuncClick()} >{mensagem}</button>
            case "Verde":
                return <button className = "botao btn btn-sucess" type="button" onClick = { () => FuncClick()} >{mensagem}</button>
            case "Preto":
                return <button className = "botao btn btn-dark" type="button" onClick = { () => FuncClick()} >{mensagem}</button>
            default:
                break;
        }
    }

    return (
        <>
            {retornoBotao()}
        </>
    )
}