import { CiMobile1 } from "react-icons/ci";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-10">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">Contact Us</h1>

      {/* Search Section */}
      <div className="relative w-full max-w-md mx-auto mb-10">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <CiMobile1 />
        </div>
        <input
          type="text"
          placeholder="Search for your query..."
          className="w-full border border-gray-300 px-12 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row w-full mt-4">
        {/* Left Section 60% */}
        <div className="lg:w-3/5 bg-white py-8 px-10 border-r border-gray-300">
          {/* Intro Heading */}
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome to Our Help Center</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            If you have any inquiries, feedback, or need support, we are here to help. Explore the services and resources available to you.
          </p>

          {/* Divider */}
          <hr className="border-t-2 border-gray-300 mb-6" />

          {/* Buttons Section */}
          <div className="flex gap-4 mb-6">
            {/* Login Button */}
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              <a href="/login">Login</a>
            </button>

            {/* Sign-Up Button */}
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              <a href="/signin">Sign Up</a>
            </button>
          </div>

          {/* Section with headings & paragraphs */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Heading One</h2>
            <p className="text-gray-500 leading-snug mb-2">
              Learn how our service can help you resolve issues and provide context to streamline navigation.
            </p>
            <div className="border-t-2 border-black mb-4"></div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Heading Two</h2>
            <p className="text-gray-500 leading-snug mb-2">
              Access detailed guides and features about our services or assistance programs.
            </p>
            <div className="border-t-2 border-black mb-4"></div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Heading Three</h2>
            <p className="text-gray-500 leading-snug mb-2">
              Tips and tricks to maximize your experience and connect with the support system effectively.
            </p>
            <div className="border-t-2 border-black mb-4"></div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Heading Four</h2>
            <p className="text-gray-500 leading-snug mb-2">
              Additional help sections, interactive guides, and external contact references available here.
            </p>
          </div>
        </div>

        {/* Right Section 40% */}
        <div className="lg:w-2/5 bg-gray-100 py-8 px-6 flex flex-col justify-center items-center">
          {/* Centered Heading */}
          <h1 className="text-2xl font-bold text-gray-700 mb-4">CONTACT US</h1>

          <CiMobile1 />
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {/* Replace these placeholders with your own icons */}
            <div className="text-gray-700 text-center">
              {/* Icon 1 Placeholder */}
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <p className="mt-2 text-sm">Icon 1</p>
            </div>
            <div className="text-gray-700 text-center">
              {/* Icon 2 Placeholder */}
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <p className="mt-2 text-sm">Icon 2</p>
            </div>
            <div className="text-gray-700 text-center">
              {/* Icon 3 Placeholder */}
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <p className="mt-2 text-sm">Icon 3</p>
            </div>
            <div className="text-gray-700 text-center">
              {/* Icon 4 Placeholder */}
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <p className="mt-2 text-sm">Icon 4</p>
            </div>
          </div>

          {/* Informative Paragraph */}
          <p className="text-gray-600 text-center leading-relaxed mb-6 text-sm">
            We aim to provide reliable services tailored to all user needs. Explore our features for enhanced guidance and support.
          </p>

          {/* Divider */}
          <hr className="border-t-2 border-black w-full mt-4" />
        </div>
      </div>
    </div>
  );
}
