import Head from 'next/head'
import Image from 'next/image'
import Layout from "../src/components/Layout/Layout"
import { Header } from "../src/components/Header/Header"
import { Card } from "../src/components/PricingSection/Card"

export default function Home() {
	return (
		<>
			<Header />
			<Card />
		</>
	)
}

Home.Layout = Layout