import { getWeather } from "@/Api/Weather";
import ProfileButton from "../buttons/ProfileButton";
import Searchbar from "../Searchbars/Searchbar";

const MainHeading = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-4 px-6 bg-transparent w-full">
      <Searchbar />
      <ProfileButton />
    </div>
  );
};

export default MainHeading;
