import './Titulo.css'

export default function Titulo({cor,tamanho,texto}){

    let corFinal = "white";

    function retornaTitulo(){
        
    

        switch (tamanho) {

          
            case "1":
                return <h1 className = {`text${cor}`}>{texto}</h1>
            case "3":
                return <h3 className = {`text${cor}`}>{texto}</h3>
            default:
                break;
        }
    }

    return (
        <>
            {retornaTitulo()}
        </>
    )
}