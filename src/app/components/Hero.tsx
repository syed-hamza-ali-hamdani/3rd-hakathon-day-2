import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Hero() {
  return (
    
    <div className="w-screen bg-gray-100">
    {/* head */}
    <div className="flex justify-center items-center w-full max-w-[1225px] mx-auto h-[58px] bg-[#F5F5F5] text-black">
        <div className="h-[44px] flex flex-col justify-center items-center w-full">
          <h3 className="font-medium text-sm text-center">Hello Nike App</h3>
          <div>
            <p className="text-[12px] font-normal mb-1 mt-1 text-center">
              Download the app to access everything Nike.
              <span className="font-medium underline ml-1">Get Your Great</span>
            </p>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="flex justify-center items-center px-4">
        <Image
          src="/hero.png"
          alt="shoes"
          width={1150}
          height={700}
          className="w-full max-w-[1150px] h-auto"
        />
      </div>

      <div className="flex justify-center items-center flex-col p-10">
                <p className="text-sm">First Look</p>
                <h2 className=" text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
                <p  className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max.
           
                </p>
      
      {/* Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">
  <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition w-full md:w-auto">
    Notify Me
  </button>
  <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition w-full md:w-auto">
    Shop Air Max
  </button>
</div>

    </div>

   {/* Best of Air Max Section */}
<div className="bg-white px-6 py-8 relative">
  {/* Title and Shop Button */}
  <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
    <h2 className="text-2xl font-bold text-center md:text-left w-full md:w-auto">
      Best of Air Max
    </h2>
    <div className="flex flex-wrap justify-center md:justify-end w-full md:w-auto gap-4">
      <button className="px-4 py-2 font-bold bg-black text-white rounded-full hover:bg-gray-800 transition">
        Shop
      </button>
      <div className="flex space-x-2">
        <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center font-bold hover:bg-gray-200 transition">
          ←
        </button>
        <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition">
          →
        </button>
      </div>
    </div>
  </div>
</div>
<div className="py-12 bg-gray-100">
  {/* Product Carousel */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
    {/* Product 1 */}
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <Image
        src="/image1.png" // Replace with actual image from the public folder
        alt="Nike Air Max Pulse"
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-lg">Nike Air Max Pulse</h3>
        <p className="text-gray-500 text-sm">Women&apos;s Shoes</p>
        <p className="font-bold mt-1">₹ 13,995</p>
      </div>
    </div>

    {/* Product 2 */}
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <Image
        src="/image112.png" // Replace with actual image from the public folder
        alt="Nike Air Max Pulse"
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-lg">Nike Air Max Pulse</h3>
        <p className="text-gray-500 text-sm">Men&apos;s Shoes</p>
        <p className="font-bold mt-1">₹ 13,995</p>
      </div>
    </div>

    {/* Product 3 */}
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <Image
        src="/image3.png" // Replace with actual image from the public folder
        alt="Nike Air Max 97 SE"
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-lg">Nike Air Max 97 SE</h3>
        <p className="text-gray-500 text-sm">Men&apos;s Shoes</p>
        <p className="font-bold mt-1">₹ 16,995</p>
      </div>
    </div>
  </div>
</div>
      {/* New Section (from Uploaded Image) */}
      <div className="relative bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <Image
          src="/image4.png" // Replace with your image path
          alt="Running Man"
          width={1200}
          height={600}
          className="rounded-lg mx-auto"
        />
        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700">
          Cause everyone should know the feeling of running in that perfect pair!
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
          <Link href="/all-product">Find Your Shoe</Link>
        </button>
      </div>
    </div>
     {/* Gear Up Section */}
<div className="bg-white py-16 px-4 sm:px-8 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-left">
      Gear Up
    </h2>

    {/* Shop Men's and Women's with Arrows */}
    <div className="flex justify-between items-center mb-8">
      {/* Shop Men's Section */}
      <div className="flex items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Shop Men</h2>
        <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
          ←
        </button>
        <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
          →
        </button>
      </div>

      {/* Shop Women's Section */}
      <div className="flex items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Shop Women</h2>
        <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
          ←
        </button>
        <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
          →
        </button>
      </div>
    </div>   <div className="bg-white py-16 px-8">
  <div className="max-w-7xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-left font-sans">Gear Up</h2>

{/* Grid Layout for Product Display */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
  {/* Men's Section */}
  <div className="text-center flex flex-col items-center">
    <Image src="/image5.png" alt="Men's Top" width={300} height={300} className="rounded-lg" />
    <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV TechKnit Ultra</p>
    <p className="text-gray-500 text-sm">₹ 3,895</p>
  </div>

  <div className="text-center flex flex-col items-center">
    <Image src="/image6.png" alt="Men's Shorts" width={300} height={300} className="rounded-lg" />
    <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT Challenger</p>
    <p className="text-gray-500 text-sm">₹ 2,495</p>
  </div>

      {/* Women's Section */}
      <div className="text-center flex flex-col items-center">
        <Image src="/image7.png" alt="Women's Top" width={300} height={300} className="rounded-lg" />
        <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV Run Division</p>
        <p className="text-gray-500 text-sm">₹ 5,295</p>
      </div>

      <div className="text-center flex flex-col items-center">
        <Image src="/image8.png" alt="Women's Leggings" width={300} height={300} className="rounded-lg" />
        <p className="text-gray-700 font-medium mt-4">Nike Fast</p>
        <p className="text-gray-500 text-sm">₹ 3,795</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div className="bg-white py-16 px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-left font-sans">Gear Up</h2>

    {/* Other section (you can add your content here) */}
    <div className="w-screen bg-gray-100">
      {/* Additional content can go here */}
    </div>
  </div>
</div>
    {/* Fullscreen Sneaker Image */}
    <div className="flex justify-center items-center px-4">
        <Image
          src="/image9.png"
          alt="Sneaker"
          width={1150}
          height={700}
          className="w-full max-w-[1150px] h-auto"
        />
      </div>

      {/* Flight Essentials Section */}
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-helvetica text-[52px] leading-[60px] text-center underline font-bold">
            Flight Essentials
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Your built to last all-week wears—but with style only Jordan Brand can deliver
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            <Link href="/all-product">Shop</Link>
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-white py-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Top Picks</h2>

        {/* Cards Wrapper */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4 max-w-xs">
            <Image
              src="/image10.png" // Replace with actual image path
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
              className="object-contain rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">Nike Air Max Pulse</h3>
            <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
            <p className="text-lg font-bold mt-2">₹ 13,995</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4 max-w-xs">
            <Image
              src="/image11.png" // Replace with actual image path
              alt="Nike Air Max 97 SE"
              width={300}
              height={300}
              className="object-contain rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">Nike Air Max 97 SE</h3>
            <p className="text-sm text-gray-600">Women&apos;s Shoes</p>
            <p className="text-lg font-bold mt-2">₹ 16,995</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4 max-w-xs">
            <Image
              src="/image12.png" // Replace with actual image path
              alt="Nike Air Max 270"
              width={300}
              height={300}
              className="object-contain rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">Nike Air Max 270</h3>
            <p className="text-sm text-gray-600">Kids&apos; Shoes</p>
            <p className="text-lg font-bold mt-2">₹ 12,995</p>
          </div>
        </div>
      </div>
      <footer className="bg-white py-8 w-full">
  {/* Footer Links Section */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center pl-12 pr-12 ml-4">
    {/* Column 1 */}
    <div className="text-center">
      <h3 className="font-bold mb-4">Icons</h3>
      <ul className="space-y-2 text-sm">
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    {/* Column 2 */}
    <div className="text-center">
      <h3 className="font-bold mb-4">Shoes</h3>
      <ul className="space-y-2 text-sm">
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>
    {/* Column 3 */}
    <div className="text-center">
      <h3 className="font-bold mb-4">Clothing</h3>
      <ul className="space-y-2 text-sm">
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>
    {/* Column 4 */}
    <div className="text-center">
      <h3 className="font-bold mb-4">Kid&apos;s</h3>
      <ul className="space-y-2 text-sm">
        <li>Infant & Toddler Shoes</li>
        <li>Kids&apos; Shoes</li>
        <li>Kids&apos; Jordan Shoes</li>
        <li>Kids&apos; Basketball Shoes</li>
      </ul>
    </div>
  </div>
  {/* Bottom Section */}
<div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center text-sm">

  {/* Social Icons */}
  <div className="flex space-x-4 text-lg">
    <a href="#" aria-label="Facebook">
      <FaFacebook />
    </a>
    <a href="#" aria-label="Twitter">
      <FaTwitter />
    </a>
    <a href="#" aria-label="Instagram">
      <FaInstagram />
    </a>
  </div>
</div> 
</footer>
</div>  
    
  );
}