import { getWeather } from "@/Api/Weather";
import ProfileButton from "../buttons/ProfileButton";

const MainHeading = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-4 px-6 bg-transparent w-full">
      <ProfileButton />
    </div>
  );
};

export default MainHeading;
