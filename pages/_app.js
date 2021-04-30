import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || ((({ children }) => <>{children}</>))
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
