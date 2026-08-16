import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";

export default function Select({ filterName, heading, filterButtons }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const activeFilter = searchParams.get(filterName);

  function handleApplyFilter(value) {
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set(filterName, value);
    router.replace(`${pathname}?${urlParams}`, { scroll: false });
  }
  return (
    <div
      onClick={() => setShowFilterMenu(!showFilterMenu)}
      className={`transition bg-(--surface) relative flex justify-between items-center px-3 border rounded-md h-10 w-40 ${showFilterMenu ? "border-blue-500" : "border-gray-300"}`}
    >
      <span className="px-2 text-xs bg-(--background) rounded-full text-gray-600 absolute top-[-25%] left-3 z-50">
        {heading}
      </span>

      {/* Active Filter */}
      <p className="text-sm">{activeFilter}</p>

      {/* icon */}
      <IoIosArrowDown className="text-gray-400 " />

      {/* Menu */}

      {showFilterMenu && (
        <div className="absolute top-[110%] left-0 flex flex-col w-fit h-fit rounded-md bg-white border border-gray-300 ">
          {filterButtons.map((el) => {
            return (
              <button
                onClick={() => handleApplyFilter(el.filterValue)}
                key={el.text}
                className="pr-10 text-xs relative transition border-b border-gray-300 px-2 py-3 text-left flex items-center gap-2 hover:bg-(--primary-light)"
              >
                {el.icon} {el.text}{" "}
                {activeFilter === el.filterValue && (
                  <IoIosCheckmark className="absolute right-3 text-blue-500 text-xl" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
