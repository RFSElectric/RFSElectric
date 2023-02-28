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
        <Header title="RFS Electric Inc. License# 1010511" />
        <p className="details">
          Call (213) 278-2812 for any Electric Job, Fix Electric Issues, Fuses, Panels, Install Solar Panels, EV Chargers, Lighting and more. 
        </p>
      </main>
  
      <body>
        <img src="rfs.jpg" width="500" height="375"></img>
      </body>

      <Footer />
    </div>
  )
}
