import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date'
;
export const getStaticProps = async () => {
	const allPostsData = getSortedPostData();
	return {
		props: {
			allPostsData,
		},
	};
};

export default function Home({ allPostsData }) {
	const { headingMd, padding1px, headingLg, list, listItem, lightText } = utilStyles;
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Sample Introduction]</p>
				<p>
					(This is a sample website)
					<a href='https://nextjs.org/learn'> made with Next.js</a>
				</p>
			</section>

			<section className={`${headingMd} ${padding1px}`}>
				<h1 className={headingLg}>Blog</h1>
				<ul className={list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={listItem} key={id}>
						<Link href={`/posts/${id}`}>
            <a>{title}</a>
            </Link>
            <br />
            <small className={lightText}>
              <Date dateString={date} />
            </small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
