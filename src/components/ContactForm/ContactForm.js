export const ContactForm = () => {
	return (
		<div id="contact" className="w-full m-auto self-center container p-4 ">
			<div className="place-items-center">
				<div id="ContactSectionText" className="text-center place-items-center m-auto w-full">
					<div id="ContactSectionTitle" className="font-semibold text-2xl md:text-4xl">{"Get In Touch"}</div>
					<div id="ContactSectionSub" className="font-semibold text-gray-600 md:text-lg">We strive to do better and are adding new features on user request.</div>
				</div>
				<div id="ContactSectionFormGroup" className="place-items-center m-auto">
					<form id="ContactForm" className="space-y-5 place-items-center m-auto">
						<div className="space-y-5 w-full flex space-x-5 place-items-center m-auto">
							<label for="Your Name"></label>
							<input type="text" name="yourName" placeholder="Your Name" className="border p-2 rounded-lg w-full max-w-md" />
							<label for="Your Email"></label>
							<input type="email" name="yourEmail" placeholder="Your Email" className="border p-2 rounded-lg w-full max-w-md" />
						</div>
						<div className="space-y-5 w-full flex space-x-5">
							<label for="Subject"></label>
							<input type="text" name="contactSubject" placeholder="Subject" className="border p-2 rounded-lg w-full max-w-md" />
							<label for="Phone"></label>
							<input type="tel" name="contactNumber" placeholder="Phone" className="border p-2 rounded-lg w-full max-w-md" />
						</div>
						<div className="place-items-center">
							<label for="Your Message"></label>
							<textarea name="message" rows="4" placeholder="Your Message" className="border p-2 rounded-lg w-full max-w-4xl ml-5" />
						</div>
						<div className="w-full">
							<div className="m-auto">
								<input type="submit" value="Send Message" className="rounded-full p-2 bg-blue-500 hover:bg-blue-600 font-semibold" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}