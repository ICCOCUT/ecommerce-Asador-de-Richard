import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Esta es una función predeterminada que devuelve un documento HTML con un encabezado, cuerpo,
 * contenido principal y el siguiente script.
 * @returns Este código define un componente `Documento` personalizado para una aplicación Next.js. El
 * componente `Documento` es responsable de representar el documento HTML inicial que se envía al
 * cliente.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
