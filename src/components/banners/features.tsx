import { CheckCircle } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { tailwindColours } from "@/components/colours/ColorMode";

export default function MissingFeatures() {
  const { isLight } = useTheme();
  const colours = tailwindColours({ isLight, setIsLight: () => {} });
  const features = [
    "Set your default country for quick access",
    "Easily search and save multiple locations",
    "Access detailed weather data",
    "Sync your favorites across all your devices",
  ];

  return (
    <div
      className={`w-full ${colours.background} ${colours.text}min-h-[80vh] flex flex-col items-center py-12`}
    >
      <h2
        className={`text-2xl text-center mb-12 font-semibold ${colours.background} ${colours.text}`}
      >
        Enjoy These Features When You Sign In
      </h2>
      <div
        className={`w-full max-w-md border border-black rounded-3xl overflow-hidden shadow-lg${colours.text} ${colours.card}`}
      >
        <div
          className={`w-full aspect-video flex items-center justify-center bg-gray-100 border-b border-black  `}
        >
          <p className=" text-sm text-center px-4">
            Overview video of Sign In & Sign Up features
          </p>
        </div>
        <div className="p-8">
          <h3
            className={`text-xl font-semibold  mb-6 text-center ${colours.text} `}
          >
            Key Benefits
          </h3>
          <ul className={`space-y-4 ${colours.text} `}>
            {features.map((feature, idx) => (
              <li key={idx} className={`flex items-center 1 ${colours.text}`}>
                <CheckCircle className="w-6 h-6 mr-3 text-green-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center pt-12">
        <p className={` text-sm mb-4 ${colours.text}`}>
          Sign in or sign up now to enjoy all these features.
        </p>
      </div>
    </div>
  );
}
