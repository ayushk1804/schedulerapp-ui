import Link from 'next/link'
import Image from 'next/image'
import { useState, createRef } from 'react'
import { createPopper } from '@popperjs/core';
import { useRouter } from "next/router";

export const Navbar = ({ setShowModal }) => {
	const router = useRouter();

	{ /*Navigation items config*/ }
	const NavItem = [{ "itemName": "Home", "itemLink": "#HeaderContainer" },
	{ "itemName": "Services", "itemLink": "#service" },
	{ "itemName": "Pricing", "itemLink": "#pricing" },
	{ "itemName": "Contact", "itemLink": "#contact" }]

	const SocialItem = [{ "itemName": "facebook", "itemLink": "#", "itemAvatar": "/Static/Assets/SocialIcons/facebook.svg" },
	{ "itemName": "twitter", "itemLink": "#", "itemAvatar": "/Static/Assets/SocialIcons/twitter.svg" },
	{ "itemName": "instagram", "itemLink": "#", "itemAvatar": "/Static/Assets/SocialIcons/" },
	{ "itemName": "linkedin", "itemLink": "#", "itemAvatar": "/Static/Assets/SocialIcons/" }]

	const [toggleNav, setToggleNav] = useState(false)

	return (
		<div id="navbarContainer" className="md:flex md:justify-between w-full shadow-b-xl sticky top-0 text-lg transparent bg-white z-30 shadow-xl place-items-center px-5 items-center">
			<div id="navbarLogo" className="flex justify-between md:justify-none py-2 items-center">
				<Link href="/" className=" items-center"><a className=" items-center space-x-5 mr-auto"><Image src={"/Static/Assets/logo.png"} width={170} height={55} layout={"intrinsic"} className={"items-center"} /></a></Link>
				<div className="md:hidden cursor-pointer" onClick={(() => setToggleNav(!toggleNav))} id="button">
					<svg xmlns="http://www.w3.org/2000/svg" className="md:hidden w-6 h-6 items-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</div>
			</div>



			<div id="navbarNavitem" className={`${toggleNav ? 'block' : 'hidden'} place-items-center min-w-screen bg-white p-2 text-gray-900 font-semibold md:block flex-none md:flex-row border-t-2 text-white md:text-black md:bg-white md:border-none m-auto`} >
				<ul className="flex flex-col md:flex-1 md:flex-row items-center p-2 md:pd-0 md:justify-between md:w-full gap-4">
					{NavItem.map(({ itemName, itemLink }, NavKey) => (
						<li className={`border-b-2 md:border-none hover:text-blue-500 focus-within:text-blue-500`} key={NavKey} onClick={(() => setToggleNav(false))}>
							<Link href={itemLink}>
								<a href={itemLink}>
									{itemName}
								</a>
							</Link>
						</li>
					))}
					<li className=" block items-center md:hidden">
						<button className={"rounded p-1.5 px-2 bg-indigo-500 hover:bg-indigo-600 font-semibold text-white text-base"}>{"Get Started"}</button>
					</li>
				</ul>

			</div>


			<div id="navbarSocialitems" className="md:flex hidden md:block items-center md:gap-4 text-sm text-gray-500 font-bold">
				<ul className="md:flex md:gap-4 items-center">
					{SocialItem.map(({ itemName, itemLink }, SocialKey) => (
						<li key={SocialKey} className={"items-center pt-1"}>
							<a href={itemLink}>
								<Image src={`/Static/Assets/SocialIcons/${itemName}.svg`} width={25} height={25} layout={"intrinsic"} alt={itemName} className={"p-2 align-center"} />
							</a>
						</li>
					))}
					<li className="items-center">
						<button className={"rounded p-1.5 px-2 bg-indigo-500 hover:bg-indigo-600 font-semibold text-white text-base focus:outline-none"} onClick={() => setShowModal(true)}>{"Get Started"}</button>
					</li>
				</ul>
			</div>
		</div>
	)
}