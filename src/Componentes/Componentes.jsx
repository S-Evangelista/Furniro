import "./Componentes.css"

const Cabecalho = () => {
    return (
    <>
        <html lang="pt-BR">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
            <div className="header">
                <div className="logo">
                <img src="./img/logo.png" className="logoImg"></img>
                </div>

                <div className="abas">
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>

                    <div className="icons">
                        <img src="./img/icon1.webp" className="icon"></img>
                        <img src="./img/icon2.webp" className="icon"></img>
                        <img src="./img/icon3.webp" className="icon"></img>
                        <img src="./img/icon4.webp" className="icon"></img>
                    </div>
            </div>
           
            </body>
        </html>
    </>
    );
};

export default Cabecalho;

