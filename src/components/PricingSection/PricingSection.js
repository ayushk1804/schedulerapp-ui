import { PricingCard } from './PricingCard'
export const PricingSection = () => {
	const PricingCardList = [
		{ 'CardTitle': 'Basic', 'CardPriceTitle': '$ 19.99', 'CardPriceSub': 'per year', 'CardFeaturesList': ['1 Calendar / User', 'Google Calendar Integration', '3 Event Types', 'Automated Event Notifications'], 'CardActionText': 'Get Started' },
		{ 'CardTitle': 'Pro', 'CardPriceTitle': '$ 39.99', 'CardPriceSub': 'per year', 'CardFeaturesList': ['3 Calendars / User', 'Schedule Unlimited Events', 'Personalised Calendar Links', 'SMS Notifications'], 'CardActionText': 'Get Started' },
		{ 'CardTitle': 'Enterprise', 'CardPriceTitle': 'Need Help?', 'CardPriceSub': '', 'CardFeaturesList': ['Invitee Redirect', 'Metrics And Reporting', 'Customizable Notifications', 'Custom Webhooks Integration'], 'CardActionText': 'Contact Us' }]


	return (
		<section id="pricing"className="bg-gray-100 space-y-5">
			<div className="p-4 md:p-10 lg:p-20">
				<div id="pricingSectionText" className="text-center space-y-3">
					<div id="pricingSectionTitle" className="font-bold text-3xl md:text-5xl">{"Our Pricing"}</div>
					<div id="pricingSectionSub" className="md:text-lg text-gray-600 ">{"Let us cater to your odds and ends. We have a plan for everybody!"}</div>
				</div>
				<div id="pricingCardList" className="md:flex md:justify-evenly md:mt-10">
					{PricingCardList.map(({ CardTitle, CardPriceTitle, CardPriceSub, CardFeaturesList, CardActionText }, cardKey) => (<PricingCard key={cardKey} CardTitle={CardTitle} CardPriceTitle={CardPriceTitle} CardPriceSub={CardPriceSub} CardFeaturesList={CardFeaturesList} CardActionText={CardActionText} />))}
				</div>
			</div>
		</section>
	)
}