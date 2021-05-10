import Image from "next/image"
export const Subscribe = () => {
	return (
		<div id="suscribeContainer" className="text-white text-center md:flex md:flex-row overflow-hidden" >
			<div className=" flex md:w-1/2 object-cover">
				<img className="h-full" src="/Static/Assets/call-to-action.png" />
			</div>
			<div className="flex flex-col text-white bg-blue-500 md:w-1/2 py-10 px-10 lg:px-24">
				<div className="align-middle m-auto space-y-2 md:space-y-5">
					<div>
						<div className="text-3xl lg:text-5xl font-bold">Curious to Learn More? </div>
						<div className="text-3xl lg:text-5xl font-bold">Stay Tuned. </div>
					</div>
					<div className="text-md lg:text-2xl">You let us know whenever you want us to update anything or think something can be optimized.</div>
					<div className="p-1 place-items-center">
						<div className="flex flex-row  bg-white rounded-full place-items-center p-1 w-3/4 m-auto overflow-hidden md:overflow-none shadow-xl focus-within:shadow-none">
							<svg xmlns="http://www.w3.org/2000/svg" className="flex h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> </svg>
							<input type="text" placeholder="jhon@email.com" className="m-auto flex-1 py-1 px-3 rounded-full focus:outline-none text-black" />
							<button className="hidden xl:block flex bg-blue-500 rounded-full font-bold focus:outline-none py-1 px-3 hover:bg-blue-600">SUBSCRIBE</button>
						</div>
					</div>
					<div className="w-full place-items-center">
						<button className="xl:hidden flex text-blue-500 bg-white shadow-xl rounded-full focus:outline-none py-2 px-4 text-sm font-semibold m-auto hover:shadow-none hover:bg-blue-600">SUBSCRIBE</button>
					</div>
				</div>
			</div>
		</div>
	)
}