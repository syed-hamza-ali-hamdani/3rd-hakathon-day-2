import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const hasFavorites = false; // For demonstration, set this to true to show favorites

  return (
    // Parent Container
    <div className="max-w-screen-lg mx-auto mt-24 px-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        {/* Content Wrapper */}
        <div className="flex-1">
          {/* 1st Delivery Section */}
          <div className="bg-gray-100 p-4 rounded-md">
            {/**Free delivery section */}
            <span className="font-medium text-gray-800 text-sm">
              Free Delivery
            </span>
            {/**first Section part 2 */}
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs text-gray-600">
                Applies to orders of ₹14,000.00 or more.
              </span>
              {/**Demo Link */}
              <Link
                href="#"
                className="text-sm text-black underline font-medium"
              >
                View details
              </Link>
            </div>
          </div>

          {/* Products Section */}
          <div className="space-y-6 mt-6">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        {/**End of 1st Part of Product Description Section */}
        
        {/* Summary Section */}
        <div className="w-full lg:w-[350px] h-auto bg-gray-50 p-6 rounded-lg shadow-lg">
          <h1 className="font-inter font-semibold text-xl mb-6">Summary</h1>
          {/* Summary Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Subtotal</span>
              <span className="text-sm font-medium text-gray-700">₹20,890.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Estimated Delivery & Handling
              </span>
              <span className="text-sm font-medium text-gray-700">Free</span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <span className="text-lg font-semibold text-gray-800">Total</span>
              <span className="text-lg font-semibold text-gray-800">
                ₹20,890.00
              </span>
            </div>
          </div>
          {/**Demo Button To add Member checkout */}
          <button className="mt-6 w-full px-4 py-2 bg-black text-white text-sm rounded-3xl hover:bg-gray-800">
         <Link href="./check-out">   Member Checkout  </Link>
          </button>
        </div>
      </div>
    {/**End Of Summary Section */}

      {/* Favorites Section */}
      <div className="w-full max-w-[1100px] mt-8 px-4">
        <h1 className="font-semibold text-base">Favourites</h1>
        {hasFavorites ? (
          <p className="text-sm text-gray-700 mt-1">
            You have saved items in your favourites.
          </p>
        ) : (
          <p className="text-sm text-gray-700 mt-1">
            There are no items saved to your favourites.
          </p>
        )}
      </div>
      
      {/* Suggestions Section */}
      <div className="w-full max-w-[1100px] mt-6 px-4">
        <h1 className="font-semibold text-base">You Might Also Like</h1>
      </div>

      {/**End of suggestion section */}
      {/* 2nd part of Product Description Section */}
      <div className="w-full max-w-[432px] mx-auto mt-6">
        {/* Product Image */}
        <Image
          src="/Rectangle.png"
          alt="Nike Shoe Product"
          className="w-full h-auto rounded-md object-cover"
          width={432}
          height={432}
        />
        <h1 className="font-semibold text-base mt-4">Air Jordan 1 Mid SE Craft</h1>
        <span className="text-sm text-gray-700">Men Shoes</span>
        <h1 className="font-semibold text-base mt-2">MRP : ₹12,295.00</h1>
      </div>
      {/**End of 2nd product section */}
    </div>
  );
}

// function to use ProductCard Component
function ProductCard() {
  return (
    <div className="flex items-start bg-gray-200 p-4 rounded-lg shadow">
      {/* Product Image */}
      <Image
        src="/Image5.png"
        alt="Nike Dri-FIT ADV TechKnit Ultra"
        width={150}
        height={150}
        className="rounded-md object-cover"
      />

      {/* Product Details */}
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-start">
          <h1 className="font-semibold text-base">Nike Dri-FIT ADV TechKnit Ultra</h1>
          <span className="text-sm text-gray-700">MRP: ₹3,895.00</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">Mens Short-Sleeve Running Top</p>
        <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
        <div className="flex mt-4">
          <div className="mr-6">
            <span className="text-sm text-gray-600">Size: </span>
            <span className="font-medium text-sm">L</span>
          </div>
          <div>
            <span className="text-sm text-gray-600">Quantity: </span>
            <span className="font-medium text-sm">1</span>
          </div>
        </div>
        {/**End of Product Description */}
      </div>
    {/**End of parent Div */}
    </div>
  );
}
