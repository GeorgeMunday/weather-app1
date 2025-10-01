import { CheckCircle } from "lucide-react";

export default function MissingFeatures() {
  const features = [
    "Set your default country for quick access",
    "Easily search and save multiple locations",
    "Access detailed weather data",
    "Sync your favorites across all your devices",
  ];

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 min-h-[80vh] flex flex-col items-center py-12">
      <h2 className="text-2xl text-center text-black mb-12 font-semibold">
        Enjoy These Features When You Sign In
      </h2>

      {/* Single feature box */}
      <div className="w-full max-w-md border border-black rounded-3xl overflow-hidden shadow-lg bg-white">
        {/* Top video section */}
        <div className="w-full aspect-video flex items-center justify-center bg-gray-100 border-b border-black">
          <p className="text-black text-sm text-center px-4">
            Overview video of Sign In & Sign Up features
          </p>
        </div>

        {/* Features section */}
        <div className="p-8">
          <h3 className="text-xl font-semibold text-black mb-6 text-center">
            Key Benefits
          </h3>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-black">
                <CheckCircle className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center pt-12">
        <p className="text-black text-sm mb-4">
          Sign in or sign up now to enjoy all these features.
        </p>
      </div>
    </div>
  );
}
