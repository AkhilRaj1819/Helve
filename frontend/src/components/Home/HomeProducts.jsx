import React, { useRef } from 'react'

const HomeProducts = () => {
  const scrollContainerRef = useRef(null)

  const products = [
    {
      id: 1,
      name: 'Sunglasses',
      price: 100,
      image: '/products/sunglasses.png',
      description:
        'Inspired by the golden age of fashion, these vintage sunglasses capture timeless charm with modern craftsmanship.'
    },
    {
      id: 2,
      name: 'Jacket',
      price: 300,
      image: '/products/jacket.png',
      description:
        'A timeless jacket that exudes elegance and sophistication, perfect for any occasion.'
    },
    {
      id: 3,
      name: 'Blazer',
      price: 250,
      image: '/products/blazzer.png',
      description: 'A tailored blazer that combines sophistication with modern style.'
    },
    {
      id: 4,
      name: 'Watch',
      price: 500,
      image: '/products/watch.png',
      description:
        'A sophisticated watch that blends timeless elegance with modern craftsmanship.'
    },
    {
      id: 5,
      name: 'Orange Shades',
      price: 120,
      image: '/products/orange-shades.png',
      description:
        'A set of vintage orange shades that add a touch of sophistication to any outfit.'
    },
    {
      id: 6,
      name: 'Hat',
      price: 80,
      image: '/products/hat.png',
      description:
        'A vintage hat that adds a touch of sophistication to any outfit.'
    }
  ]

  const handleXScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const handleXXscroll = () =>{
    if(scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  return (
    <div className="p-6 sm:p-10 relative">
      {/* Elegant Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-['Montserrat'] font-bold tracking-wide text-gray-900">
          The Curated Collection
        </h2>
        <p className="font-['Montserrat'] mt-2 text-gray-500 text-sm sm:text-base italic">
          Handpicked vintage pieces to elevate your style with timeless elegance
        </p>
        <div className='absolute right-10 gap-2'>
          <button className='text-3xl cursor-pointer'
          onClick={handleXXscroll}
          >
            &#8592;
          </button>
          <button className='text-3xl cursor-pointer'
          
          onClick={handleXScroll}>
             &#8594;
          </button>
        </div>
      </div>

      {/* Scroll Button */}
      

      {/* Horizontal scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex flex-nowrap gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scroll-smooth"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-80 flex flex-col"
          >
            {/* Image */}
            <div className="aspect-[1/1] overflow-hidden  shadow-sm hover:shadow-md transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Details */}
            <div className="flex justify-between items-center mt-3">
              <p className="font-medium">{product.name}</p>
              <p className="text-gray-500">${product.price}</p>
            </div>

            {product.description && (
              <p className="text-xs text-gray-500 mt-1">{product.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeProducts
