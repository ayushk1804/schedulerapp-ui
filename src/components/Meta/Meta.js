import Head from 'next/head'
export const Meta = ({ pageTitle, pageDesc }) => {
	return(
		<Head>
			<title>{pageTitle}</title>
			<meta property="og:title" content={pageTitle} key="title" />
			<meta name="viewport" content="initial-scale=1.0 width=device-width" />
			<meta name="description" content={pageDesc} />
		</Head>
	)

}