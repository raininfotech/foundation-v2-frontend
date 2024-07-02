import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet" />

                <link async href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                <link async href={`/assets/css/header.css`} rel="stylesheet" type='text/css' />
                <link async href={`/assets/css/cust21.css`} rel="stylesheet" type='text/css' />
                <link async href={`/assets/css/responsive.css`} rel="stylesheet" type='text/css' />
                <link async rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                <link rel="apple-touch-icon" sizes="57x57" href="/assets/img/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/assets/img/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/assets/img/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/favicon/apple-icon-76x76.png" />

                <link rel="apple-touch-icon" sizes="114x114" href="/assets/img/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/assets/img/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-icon-180x180.png" />

                <link rel="icon" type="image/png" sizes="36x36" href="/assets/img/favicon/android-icon-36x36.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/assets/img/favicon/android-icon-48x48.png" />
                <link rel="icon" type="image/png" sizes="72x72" href="/assets/img/favicon/android-icon-72x72.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/assets/img/favicon/android-icon-96x96.png" />
                <link rel="icon" type="image/png" sizes="144x144" href="/assets/img/favicon/android-icon-144x144.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/favicon/android-icon-192x192.png" />

                <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/assets/img/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png" />

                <link rel="manifest" href="/assets/img/favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/assets/img/favicon/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />

                <meta name="title" content={process.env.SITENAME} />
                <meta name="description" content={process.env.SITENAME} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={process.env.SITENAME} />
                <meta property="og:image" content="/assets/img/logo.png" />
                <meta property="og:image:url" content="/assets/img/logo.png" />
                <meta property="og:image:secure_url" content="/assets/img/logo.png" />
                <meta property="og:url" content={process.env.BASEURL} />
                <meta property="og:site_name" content={process.env.SITENAME} />
                <meta property="og:description" content={process.env.SITENAME} />

            </Head>
            <Main />
            <NextScript />
        </Html>
    )
}
