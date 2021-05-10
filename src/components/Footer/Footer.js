import Image from 'next/image'
export const Footer = () => {
	const Company = [{ 'itemName': 'About', 'itemLink:': '#' },
	{ 'itemName': 'Contact', 'itemLink:': '#' },
	{ 'itemName': 'Carrer', 'itemLink:': '#' }
	]
	const Product = [{ 'itemName': 'Product', 'itemLink:': '#' },
	{ 'itemName': 'Business', 'itemLink:': '#' },
	{ 'itemName': 'Developer', 'itemLink:': '#' }
	]
	const Help = [{ 'itemName': 'Support Center', 'itemLink:': '#' },
	{ 'itemName': 'FAQ', 'itemLink:': '#' },
	{ 'itemName': 'Terms and Condition', 'itemLink:': '#' }
	]
  	const SocialItem = [{ "itemName": "facebook", "itemLink": "#", "itemAvatar": "/Static/Assets/SocialIcons/facebook.svg" },
	{ "itemName": "twitter", "itemLink": "#", "itemAvatar": "/Static/Assets/SocialIcons/twitter.svg" },
	{ "itemName": "instagram", "itemLink": "#", "itemAvatar": "/Static/Assets/SocialIcons/" },
	{ "itemName": "linkedin", "itemLink": "#", "itemAvatar": "/Static/Assets/SocialIcons/" },
  ]
	return (
		<div className="bg-gray-100 align-center p-10 xl:p-32 space-y-5">
			
      <div id="fotterbarSocialitems" className="flex items-center md:gap-4 text-sm text-gray-500 font-bold">
				
				<ul className="flex gap-4 place-items-center">
            
            <li><Image src={"/Static/Assets/logo.png"} width={100} height={42} layout={"intrinsic"} alt={"logo"}/></li>


					{SocialItem.map(({ itemName, itemLink }, SocialKey) => (
						<li key={SocialKey}>
							<a href={itemLink}>
								<Image src={`/Static/Assets/SocialIcons/${itemName}.svg`} width={25} height={25} layout={"intrinsic"} alt={itemName}/>
							</a>
						</li>
					))}
				</ul>
			</div>


			<div className="md:flex md:justify-between md:place-items-center lg:w-full space-y-5 md:space-y-0 w-full">
				<div className="md:flex md:flex-col  md:flex-wrap lg:w-1/4">
					<span className="font-bold text-gray-500 ">Company</span>
					<ul className="text-semibold text-md">
						{Company.map(({ itemName, itemLink }, itemKey) => (
							<li key={itemKey}><a href={itemLink}>{itemName}</a></li>
						))}

					</ul>
				</div>
				<div className="md:flex md:flex-col  md:flex-wrap lg:w-1/4">
					<span className="font-bold text-gray-500">Product & Services</span>
					<ul className="text-semibold text-md">
						{Product.map(({ itemName, itemLink }, itemKey) => (
							<li key={itemKey}><a href={itemLink}>{itemName}</a></li>
						))}

					</ul>
				</div>
				<div className="md:flex md:flex-col   md:flex-wrap lg:w-1/4 ">
					<span className="font-bold text-gray-500">Help & Support</span>
					<ul className="text-semibold text-md">
						{Help.map(({ itemName, itemLink }, itemKey) => (
							<li key={itemKey}><a href={itemLink}>{itemName}</a></li>
						))}

					</ul>
				</div>
				<div className=" lg:flex-1 lg:flex-col lg:flex-wrap hidden lg:block lg:w-1/4">
					<div className="font-bold text-gray-500 py-3">Subscribe Newsletter</div>
					<div className="text-semibold text-md">
						<div className="bg-gray-300 flex flex-row items-center rounded-full lg:w-60" >
							<form>
								<input className="rounded-full px-3 py-1 text-gray-500 focus:outline-none bg-gray-300 flex-1" type="text" placeholder="Your Email" />
								<input className="hidden" type="submit" />
							</form>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex " fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
							</svg>
						</div>
						<span className=" hidden lg:block rounded-full text-sm ">Suscribe to daily newsletter to stay up to date. We don't send spam.</span>

					</div>
				</div>
			</div>
			<div className=" lg:hidden space-y-1">
				<span className="font-bold text-gray-500">Subscribe Newsletter</span>
				<div className="text-semibold text-md">
					<div className="bg-gray-300 flex items-center rounded-full w-60" >
						<form>
							<input className="rounded-full px-3 py-1 text-gray-500 focus:outline-none bg-gray-300 flex-1" type="text" placeholder="Your Email" />
							<input className="hidden" type="submit" />
						</form>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
						</svg>
					</div>

				</div>
			</div>
		</div>
	)
}