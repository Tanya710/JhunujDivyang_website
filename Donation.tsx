import { Heart } from "lucide-react";

const Donation = () => {
  return (
    <div className="mb-32" id="donation">
      <div className="w-full bg-emerald-700 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content section */}
          <div className="flex flex-col gap-8 text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              You can make a difference, so why don't you
            </h2>
            <p className="text-wxhite text-lg max-w-xl">
              This is some random big text I need to add later. I'll see what to
              add here later. Let's test this first.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 rounded-md hover:bg-gray-100 transition-colors duration-200 max-w-xs mx-auto md:mx-0">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" fill="currentColor" />
                <span className="font-semibold">Donate Now</span>
              </div>
            </button>
          </div>

          {/* Right content section */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            
            <img
              src="/upiCode.jpeg"
              alt="Donation QR Code"
              className="w-[15rem] h-[22rem] md:w-[20rem] md:h-[30rem] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;