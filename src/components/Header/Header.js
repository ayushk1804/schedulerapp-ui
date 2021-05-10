import Image from 'next/image'

export const Header = () => {
	return (
		<div id="HeaderContainer" className="bg-gradient-to-b from-purple-400 to-blue-500 justify-center ">
			<div className="flex flex-row align-items md:p-12 lg:pt-24">
				<div className="justify-evenly space-y-6">
					<div className="p-2 h-90 space-y-7 md:space-y-10 lg:space-y-16 p-5 lg:p-10 place-items-center lg:w-3/4">
						<div id="HeaderContent" className="space-y-4 px-2 lg:px-24">
							<h2 id="HeaderTitle" className="text-gray-800 text-4xl lg:text-6xl font-bold text-center"> <span className="">{"Skip Schedules"}</span>{"- Easy way to find the right time"}</h2>
							<p id="HeaderSubtitle" className="text-gray-200 text-xl lg:text-2xl text-center">{"A simple way to schedule all your meetings, why waste time looking for time. Just skip schedules!"}</p>
						</div>
						<div id="HeaderButtonGroup" className="flex flex-col m-auto space-4 gap-4 md:gap-7 max-w-max md:flex-row">
							<button id="HeaderDemo" className="rounded-full shadow-lg md:shadow-xl text-white font-bold lg:font-bold bg-green-400 p-3 md:p-5 text-sm md:text-lg focus:outline-none">{"Get in Touch / Demo".toUpperCase()}</button>
							<a href="https://www.youtube.com/watch?v=tr21-wBA46k" target="__blank"><button id="HeaderVideo" className="rounded-full shadow-lg md:shadow-xl text-blue-500 bg-white p-3 md:p-5 font-semibold lg:font-bold text-sm md:text-lg focus:outline-none">{"Watch the Video ▷".toUpperCase()}</button></a>
						</div>
					</div>
				</div>
				<div id="HeaderSectionImage" className="hidden md:block md:w-1/2 flex-0 flex-row- object-cover">
					<Image src={"/Static/Assets/HeroSectionImage.svg"} width={1100} height={600} layout={"responsive"} className="object-cover" />
				</div>
			</div>
			<div className="bottom-0 left-0">
				<svg enable-background="new 0 0 1504 131.3" viewBox="0 0 1504 131.3" xmlns="http://www.w3.org/2000/svg"><path d="m877.8 85c139.5 24.4 348 33.5 632.2-48.2-.2 32.5-.3 65-.5 97.4-505.9 0-1011.6 0-1517.5 0 0-33.3 0-66.7 0-100.1 54.2-11.4 129.5-23.9 220-28.2 91-4.3 173.6 1 307.4 18.6 183.2 24.2 295.2 49.4 358.4 60.5z" fill="#fff" /></svg>
			</div>
		</div>
	)
}