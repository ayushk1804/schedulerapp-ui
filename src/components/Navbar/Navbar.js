import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
	const NavItem = [{ "itemName": "Home", "itemLink": "#" },
	{ "itemName": "Services", "itemLink": "#" },
	{ "itemName": "Pricing", "itemLink": "#" },
	{ "itemName": "Contact", "itemLink": "#" }]

	const SocialItem = [{ "itemName": "facebook", "itemLink": "#" },
	{ "itemName": "twitter", "itemLink": "#" },
	{ "itemName": "instagram", "itemLink": "#" },
	{ "itemName": "linkedin", "itemLink": "#" }]

	const [toggleNav, setToggleNav] = useState(false)
	return (
		<div id="navbarContainer" className="md:flex md:justify-between w-full sticky">

			<div id="navbarLogo" className="flex justify-between md:justify-none py-2">
				<div>logo</div>
        <div clasName="md:hidden" onClick={(() => setToggleNav(!toggleNav))}>
					<svg xmlns="http://www.w3.org/2000/svg" className="md:hidden w-6 h-6 items-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</div>
      </div>


			
<div id="navbarNavitem" className={`${toggleNav ? 'block' : 'hidden'} place-items-center min-w-screen bg-white md:block flex-none md:flex-row border-t-2 bg-gray-200 md:justify-between`} >
					<ul className="flex flex-col md:flex-1 md:flex-row items-center p-2 md:pd-0 md:justify-between md:w-full">
						{NavItem.map(({ itemName, itemLink }) => (
							<li>
								<Link href={itemLink}>
									<a href={itemLink}>
										{itemName}
									</a>
								</Link>
							</li>
						))}
					</ul>
				
			</div>


			<div id="navbarSocialitems" className="md:flex  hidden md:block">
				{"FOLLOW US".toUpperCase()}
				<ul className="md:flex">
					{SocialItem.map(({ itemName, itemLink }) => (
						<li>
							<a href={itemLink}>
								{itemName}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}