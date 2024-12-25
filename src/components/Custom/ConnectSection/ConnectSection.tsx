// pages/connect.js
import Image from "next/image";

export default function Connect() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <Image
              src="/connect-image.jpg" // Replace with your image path
              alt="Connect with Us"
              width={800} // Set the appropriate dimensions
              height={600}
              className="object-cover h-full w-full"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Connect With Us
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Reach out to us for any inquiries,
              feedback, or just to say hello. Fill out the contact form or drop
              us a message at our email below.
            </p>
            <ul className="text-gray-600 mb-6">
              <li>
                Email:{" "}
                <a href="mailto:example@example.com" className="text-blue-600">
                  example@example.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" className="text-blue-600">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            <a
              href="/contact-form" // Update with your contact form route
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
            >
              Go to Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
