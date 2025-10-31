import React from 'react'

const HomeQuality = () => {
  const qualities = [
    { image: '/quality/fabric.png', text: 'We select the finest materials' },
    { image: '/quality/design.png', text: 'Designed with precision' },
    { image: '/quality/stich.png', text: 'Crafted with perfect stitching' },
    { image: '/quality/handmade-jewelery.png', text: 'Handmade to perfection' },
    { image: '/quality/eye-wear-making.png', text: 'Engineered for elegance' },
    { image: '/quality/jewelery planning.png', text: 'Detailed planning for timeless pieces' }
  ]

  return (
    <div className="p-6 sm:p-10 w-full h-full">
      <div className="grid lg:grid-cols-3 grid-cols-2 ">
        {qualities.map((item, index) => (
          <div key={index} className="relative group overflow-hidden ">
            {/* Image */}
            <img
              src={item.image}
              alt={item.text}
              className="aspect-square w-full object-cover "
            />

            {/* Text overlay */}
            <div className="absolute inset-x-0 bottom-6 flex justify-center">
  <p className="text-white text-center border-t-2 border-b-2 border-white/60 text-xs sm:text-sm md:text-base font-light tracking-wide px-3 py-1 bg-black/30 backdrop-blur-sm ">
    {item.text}
  </p>
</div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeQuality
