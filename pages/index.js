import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Sample Introduction]</p>
        <p>(This is a sample website)
          <a href="https://nextjs.org/learn"> made with Next.js</a>
        </p>
      </section>
    </Layout>
  )
}
