import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {



    render() {
        return (
            <Html lang="ru">
                <Head >
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
                        integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/images/coin.svg" />
                    <link href="https://allfont.ru/allfont.css?fonts=airport-cyr" rel="stylesheet" type="text/css" />
                    <title>NFT-YR</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta
                        name="keywords"
                        content="NFT, nft, нфт, Нфт, нфт, нфт сделать, как сделать своё нфт, как запустить своё нфт, россия нфт, сервисы для покупки нфт, нфт услуги, купить нфт
     "
                    />
                    <meta name="description" content="Уникальная услуга, которую предостовляем только мы. Мы создаем nft. Иди в будущее вместе с нами." />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument