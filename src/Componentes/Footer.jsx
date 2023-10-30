import "./Footer.css"

const Footer = () => {
    return (
        <>
            <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Furniro</title>
                </head>
                <body>
                    <div className="footer">
                        <div className="coluna">
                            <p className="tiF">Furniro</p>
                            <div className="tinhoF">
                                <p className="textinhoF">400 University Drive Suite 200 Coral </p>
                                <p className="textinhoF">Gables,</p>
                                <p className="textinhoF">FL 33134 USA</p>
                            </div>
                        </div>
                        <div className="coluna">
                            <p className="first">Links</p>
                            <p className="p">Home</p>
                            <p className="p">Shop</p>
                            <p className="p">About</p>
                            <p className="p">Contact</p>

                        </div>
                        <div className="coluna">
                            <p className="first" >Help</p>
                            <p className="p">Payment Option</p>
                            <p className="p">Returns</p>
                            <p className="p">Privacy Policies</p>

                        </div>
                        <div className="coluna">
                            <p className="first">News Letter</p>
                            <div className="subscribe">
                                <p className="ps">Enter your e-mail adress </p>
                                <p className="psub">SUBSCRIBE</p>
                            </div>

                        </div>

                    </div>
                    <div className="footer2">
                        <hr></hr>
                    <p className="last">2023 furniro. All rights reverved</p>
                    </div>
                    
                </body>
            </html>
        </>

    );
};

export default Footer;