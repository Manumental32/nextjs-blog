import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Ingeniero en Sistemas de información</p>
        <p>Podes contactarme en <a href='https://www.linkedin.com/in/aquinomanuel/' target="_blank">linkedin</a></p>
      </section>
    </Layout>
  );
}
