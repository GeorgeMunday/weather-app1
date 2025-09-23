import Searchbar from "../Searchbars/Searchbar";

const MainHeading = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-4 px-6 bg-transparent w-full">
      <Searchbar />
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MainHeading;
