export const PricingCard = ({ CardTitle, CardPriceTitle, CardPriceSub, CardFeaturesList, CardActionText }) => {

	return (
		<div className="p-2 items-center justify-center align-center">
			<div id="card" className="rounded-lg shadow-lg bg-white place-items-center text-center w-full md:w-4.12 lg:w-80 xl:w-96 md:h-full overflow-hidden">
				<div className="py-5 px-4 space-y-5">
					<div id="cardTitle" className="font-bold border-b-2 text-base lg:text-xl">{CardTitle}</div>
					<div id="cardPrice" className="flex">
						<div id="cardPriceTitle" className="text-5xl font-bold lg:text-6xl">{CardPriceTitle}</div>
						<div id="cardPriceSub" className="text-gray-600 mt-auto py-1 align-baseline">{CardPriceSub}</div>
					</div>
					<div id="cardFeatures">
						{CardFeaturesList.map((feature, key) => (
							<div key={key} className="text-left leading-loose flex items-center text-lg"><span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>&nbsp;{`${feature}`}</div>
						))}
					</div>

				</div>
				<button id="cardActionButton" className="bg-blue-500 text-white font-bold p-2 px-4 rounded-full hover:bg-blue-600 focus-within:bg-blue-600 focus:outline-none">{CardActionText.toUpperCase()}</button>
				<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 112.35" className="m-0 b-0">
					<defs><style dangerouslySetInnerHTML={{ __html: ".color-1{fill:#2bdbdc;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}" }} /></defs><title>bottom-part1</title><g id="bottom-part"><g id="Group_747" data-name="Group 747"><path id="Path_294" data-name="Path 294" className="cls-1 color-1" d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z" transform="translate(0 0)" /><path id="Path_297" data-name="Path 297" className="cls-2 color-1" d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z" transform="translate(0 0)" /><path id="Path_296" data-name="Path 296" className="cls-3 color-1" d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z" transform="translate(0 0)" /><path id="Path_295" data-name="Path 295" className="cls-4 color-1" d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z" transform="translate(0 0)" /></g></g>
				</svg>
			</div>
		</div>
	)
}