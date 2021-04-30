export const Header = () => {
	return (
		<div className="bg-purple-800 justify-center space-y-6">
			<div id="headerContent space-y-4 px-2">
				<h2 id="headerTitle" className="text-gray-800 text-2xl font-bold tracking-wide text-center">{"Skip Schedules - Easy way to find the right time"}</h2>
				<p id="headerSubtitle" className="text-gray-200 text-center">{"A simple way to schedule all your meetings, why waste time loooking for time. Just skip schedules!"}</p>
			</div>
			<div id="headerButtonGroup" className="flex flex-col m-auto space-y-4 max-w-max">
				<button id="headerDemo" className="rounded-full shadow text-white font-bold bg-gradient-to-l from-green-400 to-blue-500 p-3 text-sm">{"Get in Touch / Demo".toUpperCase()}</button>
				<button id="headerVideo" className="rounded-full shadow-xl text-blue-500 bg-white p-3 font-semibold text-sm">{"Watch the Video ▷".toUpperCase()}</button>
			</div>
			<div className="inset-0">
				<svg enable-background="new 0 0 1504 131.3" viewBox="0 0 1504 131.3" xmlns="http://www.w3.org/2000/svg"><path d="m877.8 85c139.5 24.4 348 33.5 632.2-48.2-.2 32.5-.3 65-.5 97.4-505.9 0-1011.6 0-1517.5 0 0-33.3 0-66.7 0-100.1 54.2-11.4 129.5-23.9 220-28.2 91-4.3 173.6 1 307.4 18.6 183.2 24.2 295.2 49.4 358.4 60.5z" fill="#fff" /></svg>
			</div>
		</div>
	)
}