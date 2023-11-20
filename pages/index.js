import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test</title>
        
      </Head>

      <main>
        <Header title="Hello" />
        <p className="description">
          Hello World</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
