export const Card = () => {
	const CardTitle = "Basic"
	const CardPriceTitle = "$ 19.99"
	const CardPriceSub = "per year"
	const CardFeaturesList = ["1 calendar/user", "3 event types", "1 calendar/user", "3 event types"]

	return (
		<div id="card" className="border rounded shadow py-5 px-2 bg-white place-items-center text-center">
			<div id="cardTitle" className="text-md font-bold underline">{CardTitle}</div>
			<div id="cardPrice">
				<div id="cardPriceTitle" className="text-5xl font-bold font-mono">{CardPriceTitle}</div>
				<div id="cardPriceSub" className="text-gray-600">{CardPriceSub}</div>
			</div>
			<div id="cardFeatures">
			{CardFeaturesList.map((feature, key)=>(
				<div className="text-left leading-relaxed flex items-center text-lg"><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>&nbsp;{`${feature}`}</div>
			))}
			</div>
		</div>
	)
}