import Head from "next/head"
import { Footer } from "../Footer/Footer"

export default function Layout({ children }) {
	return (
		<>
			<main className="z-0">{children}</main>
			<Footer/>
		</>
	)
}