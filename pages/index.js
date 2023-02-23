import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home!</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Header title="howdy!" />
        <p className="description">
          welcome :)
        </p>
      </main>

      <Footer />
    </div>
  )
}
