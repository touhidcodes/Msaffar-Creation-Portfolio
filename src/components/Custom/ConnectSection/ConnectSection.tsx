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
        </div>
      </div>
    </div>
  );
}
