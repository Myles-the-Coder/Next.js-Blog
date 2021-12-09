import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';
import { getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
	const { headingx1, lightText } = utilStyles;
	const { title, id, date } = postData;
	return (
		<Layout>
			<Head>{title}</Head>
			<article>
				<h1 className={headingx1}>{title}</h1>
				<div className={lightText}>
					<Date dateString={date} />
				</div>
			</article>
			<br />
			{id}
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
		</Layout>
	);
}

export async function getStaticPaths() {
	// Return a list of possible values for id
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
