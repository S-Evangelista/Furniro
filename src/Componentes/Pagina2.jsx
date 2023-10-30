import "./Pagina2.css"

const Pagina2 = () => {
    return(
    <>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Furniro</title>
        </head>
        <body>
            <div className="tituloP2">
                <p className="p1"> Browse The Range </p>
                <p className="p2">Lorom ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="blocos">
                <div className="bloco">
                    <img src="./img/bloco1.png" className="bloco"></img>
                    <p className="tBloco">Dining</p>
                </div>
                <div className="bloco">
                    <img src="./img/bloco2.png" className="bloco"></img>
                    <p className="tBloco"> Living</p>
                </div>
                <div className="bloco">
                    <img src="./img/bloco3.png" className="bloco"></img>
                    <p className="tBloco" >Bedroom</p>
                </div>
               

            </div>
           
        </body>
        </html>
    </>
    );
};

export default Pagina2;