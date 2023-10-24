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
                            <p>Furniro</p>
                            <p>400 University Drive Suite 200 Coral Gables,
                                FL 33134 USA</p>
                        </div>
                        <div className="coluna">
                            <p>Links</p>
                            <p>Home</p>
                            <p>Shop</p>
                            <p>About</p>
                            <p>Contact</p>

                        </div>
                        <div className="coluna">
                            <p>Help</p>
                            <p>Payment Option</p>
                            <p>Returns</p>
                            <p>Privacy Policies</p>

                        </div>
                        <div className="coluna">
                            <p>News Letter</p>
                            <div className="subscribe">
                                <p>Enter your e-mail adress </p>
                                <a>SUBSCRIBE</a>
                            </div>

                        </div>

                    </div>
                    <div className="linhabege"></div>

                </body>
            </html>
        </>

    );
};

export default Footer;