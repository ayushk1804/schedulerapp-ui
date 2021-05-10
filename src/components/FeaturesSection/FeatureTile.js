import Image from 'next/image'

export const FeatureTile = ({ FeatureTitle, FeatureDesc, FeatureImage, FeatureImageAlt }) => {
	return (
		<div id="FeatureContainer" className="px-2">
			<div id="FeatureTile" className="flex bg-transparent pr-2 space-y-5">
				<div id="FeatureImage" className="text-blue-500 align-center m-auto">
					<Image
						src={FeatureImage}
						alt={FeatureImageAlt}
						layout={"intrinsic"}
						width={40}
						height={40}
						className="text-blue-500"
					/>
				</div>
				<div id="FeatureTextSection" className="px-2">
					<h2 id="FeatureTitle" className="font-semibold text-2xl md:text-3xl">{FeatureTitle}</h2>
					<p id="FeatureDesc" className="text-md md:text-lg">{FeatureDesc}</p>
				</div>
			</div>
		</div>
	)
}