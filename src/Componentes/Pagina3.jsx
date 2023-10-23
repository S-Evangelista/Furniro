import "./Pagina3.css"

const Pagina3 = () => {
    return(
    <>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Furniro</title>
        </head>
        <body>
            <p className="tituloP3"> Open our products </p>
            <div className="gradeP3">
                <div className="produto">
                    <img src="./img/1.png"></img>
                    <p className="textProduto">Syltherine</p>
                    <p className="subtextP">Stylish cofe chair</p>
                    <p className="precoP">Rp 2.500.000</p>
                    <p className="subPrecoP">Rp 3.500.000</p>

                </div>

            </div>
            
        </body>
        </html>

    </>
    );
};

export default Pagina3;