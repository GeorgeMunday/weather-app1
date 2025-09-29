import { XCircle } from "lucide-react";

export default function MissingFeatures() {
  const features = [
    "Set your default country for quick access",
    "Search and save multiple locations",
    "More weather data",
    "Sync your favorites across devices",
  ];

  return (
    <div className=" mx-4 md:mx-10 lg:mx-20 h-auto border-l-1 border-r-1 border-gray-400 justify-center flex flex-col items-cente">
      <div className=" bg-white flex flex-col items-center justify-center  border-gray-400">
        <h2 className="text-2xl mt-5 text-center text-black mb-8">
          What you’ll miss without signing in
        </h2>
        <div className="w-full max-w-3xl border border-black aspect-video flex items-center justify-center bg-white">
          <p className="text-black">video goes here</p>
        </div>
        <div className="w-full max-w-5xl border border-black p-6">
          <ul className="columns-1 md:columns-2 gap-6">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center text-black mb-3 break-inside-avoid"
              >
                <XCircle className="w-5 h-5 mr-2 text-black shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center pt-8">
          <p className="text-black text-sm mb-4">
            Sign in now to unlock the full experience.
          </p>
        </div>
      </div>
    </div>
  );
}
