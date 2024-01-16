"use client";
import { SearchIcon, UserIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuest, setNumOfGuest] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder={placeholder || "Start your search"}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {input && (
        <div className="absolute top-[100%] left-[50%] translate-x-[-50%] flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B63"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b bg-white p-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              className="w-12 p-2 text-lg outline-none text-red-400"
              value={numOfGuest}
              min={1}
              max={4}
              onChange={(e) => setNumOfGuest(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center w-[100%] bg-white p-5">
            <button
              type="button"
              className="flex-grow text-gray-500"
              onClick={() => setInput("")}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuest}`,
              }}
              onClick={() => setInput("")}
              className="flex-grow text-red-400 text-center"
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
