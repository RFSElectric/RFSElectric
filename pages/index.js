import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RFS Electric</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="RFS Electric" />
        <p className="details">
          License# 1010511, Call for any electric job needed, Fix electric issues, Fuses, Panels, Install Solar Panels, EV Chargers, Lighting and more. Call: (213) 278-2812
        </p>
      </main>
  
      <body>
        <img src="rfs.jpg" width="500" height="375"></img>
      </body>

      <Footer />
    </div>
  )
}
