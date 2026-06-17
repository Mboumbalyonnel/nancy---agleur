import Head from 'next/head';
import Hero       from '../components/Hero';
import Programme  from '../components/Programme';
// import Menu       from '../components/Menu';
import Lieux      from '../components/Lieux';
import Tables     from '../components/Tables';
import Footer     from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nancy &amp; Agleur · Mariage · 4 Juillet 2026</title>
        <meta name="description" content="Invitation au mariage de Nancy et Agleur — Tunis, 4 juillet 2026" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Programme />
        {/* <Menu /> */}
        <Lieux />
        <Tables />
      </main>
      <Footer />
    </>
  );
}