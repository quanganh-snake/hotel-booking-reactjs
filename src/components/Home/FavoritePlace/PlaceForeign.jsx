import React from 'react'

const PlaceForeign = () => {
  return (
		<section className="place__domestic py-5">
			<div className="container">
				<div className="heading mb-2">
					<div className="heading__title flex items-center gap-4">
						<h2 className="text-2xl lg:text-4xl font-bold">Điểm đến yêu thích nước ngoài</h2>
					</div>
					<p className="heading__description font-medium">Bao la thế giới. Bốn bể là nhà</p>
				</div>
				<div className="place__domestic--list">
					<div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
						<div className="domestic__item shadow-md hover:shadow-lg cursor-pointer col-start-1 col-end-3 row-start-1 row-end-1 rounded-md">
							<div className="relative rounded-md shadow-md hover:shadow-lg h-48 bg-[url('/images/place/kl-cr.jpg')] bg-no-repeat bg-center object-cover lg:bg-cover">
								<div className="absolute inset-0 bg-gray-900 bg-opacity-30 hover:bg-gray-400 hover:bg-opacity-20 rounded-lg p-4 flex flex-col justify-end">
									<h3 className="text-white text-3xl font-bold uppercase">Kuala Lumpur</h3>
									<p className="text-white">1033 khách sạn</p>
								</div>
							</div>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-start-3 col-end-3 row-span-1 rounded-md">
							<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/sing-cr.jpg')] bg-no-repeat bg-center bg-cover">
								<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end">
									<h3 className="text-white text-3xl font-bold uppercase">Singapore</h3>
									<p className="text-white">549 khách sạn</p>
								</div>
							</div>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-span-1 rounded-md">
							<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/bangkok.jpg')] bg-no-repeat bg-cover">
								<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end">
									<h3 className="text-white text-3xl font-bold uppercase">Bangkok</h3>
									<p className="text-white">2856 khách sạn</p>
								</div>
							</div>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-span-1 rounded-md">
							<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/sydney.jpg')] bg-no-repeat bg-cover">
								<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end">
									<h3 className="text-white text-3xl font-bold uppercase">Sydney</h3>
									<p className="text-white">290 khách sạn</p>
								</div>
							</div>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-span-1 row-span-1 rounded-md">
							<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/maldives-cr.jpg')] bg-no-repeat bg-cover">
								<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end">
									<h3 className="text-white text-3xl font-bold uppercase">Maldives</h3>
									<p className="text-white">613 khách sạn</p>
								</div>
							</div>
						</div>
						{/* End: .domestic__item */}
					</div>
				</div>
			</div>
		</section>
  );
}

export default PlaceForeign