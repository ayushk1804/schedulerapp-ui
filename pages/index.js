import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import Layout from "../src/components/Layout/Layout"
import { Header } from "../src/components/Header/Header"
import { PricingSection } from "../src/components/PricingSection/PricingSection"
import { Subscribe } from "../src/components/Subscribe/Subscribe"
import { FeaturesSection } from "../src/components/FeaturesSection/FeaturesSection"
import { ContactForm } from "../src/components/ContactForm/ContactForm"
import { Navbar } from "../src/components/Navbar/Navbar"
import { Modal } from "../src/components/Navbar/Modal/Modal"


export default function Home() {
	{ /*Modal config*/ }
	const [showModal, setShowModal] = useState(false)
	useEffect(() => (console.log(showModal)), [showModal])

	return (
		<>
			<Navbar setShowModal={setShowModal} />
			{showModal ? <Modal setShowModal={setShowModal} /> : null}
			<Header />
			<FeaturesSection />
			<PricingSection />
			<Subscribe />
			<ContactForm />
		</>
	)
}

Home.Layout = Layout