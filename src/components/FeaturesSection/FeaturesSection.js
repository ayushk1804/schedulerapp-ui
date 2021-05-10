import { FeatureTile } from './FeatureTile'
import Image from 'next/image'

export const FeaturesSection = () => {
	const FeatureList = [
		{ 'FeatureTitle': 'Startup', 'FeatureDesc': 'Short descriptions for someone who looks for something new.', 'FeatureImage': '/Static/Assets/flash.svg', 'FeatureImageAlt': 'Startup ALT' },
		{ 'FeatureTitle': 'Medical Professionals', 'FeatureDesc': 'Short descriptions for someone who looks for something new.', 'FeatureImage': '/Static/Assets/flash.svg', 'FeatureImageAlt': 'Medical Professionals ALT' },
		{ 'FeatureTitle': 'Work Professionals', 'FeatureDesc': 'Short descriptions for someone who looks for something new.', 'FeatureImage': '/Static/Assets/flash.svg', 'FeatureImageAlt': 'Work Professionals ALT' },
		{ 'FeatureTitle': 'Teaching Professionals', 'FeatureDesc': 'Short descriptions for someone who looks for something new.', 'FeatureImage': '/Static/Assets/flash.svg', 'FeatureImageAlt': 'Teaching Professionals ALT' }
	]

	return (
		<div id="service" className="p-2 md:p-14">
			<div className="flex flex-col md:flex-row space-y-7 overflow-hidden">
				<div className="space-y-4">
					<div id="FeatureSectionText" className="space-y-2">
						<div id="FeatureSectionTitle" className="text-4xl font-bold md:text-6xl text-gray-900">{"Crafted For"}</div>
						<div id="FeatureSectionSub" className="md:text-xl font-semibold text-gray-700">{"Stop wasting time on scheduling meetings, with Skip Schedules, you can find the right time instantly!"}</div>
					</div>
					<div id="FeatureTiles" className="flex flex-col flex-wrap md:flex-row space-y-7">
						{FeatureList.map(({ FeatureTitle, FeatureDesc, FeatureImage, FeatureImageAlt }, FeatureKey) => (
							<FeatureTile FeatureTitle={FeatureTitle} FeatureDesc={FeatureDesc} FeatureImage={FeatureImage} FeatureImageAlt={FeatureImageAlt} key={FeatureKey} />
						))}
					</div>
				</div>
				<div id="FeatureSectionImage" className="flex-0 flex-row flex-wrap w-full object-cover">
					<Image src={"/Static/Assets/FeaturesSectionImage.png"} layout={"responsive"} width={1160} height={840} className="object-cover"/>
				</div>
			</div>
		</div>
	)
}