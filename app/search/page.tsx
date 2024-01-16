import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../types/app";
import LisingCard from "../components/LisingCard";
import Map from "../components/Map";

type searchParamsProps = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: searchParamsProps;
}) => {
  let formatStartDate;
  let formatEndDate;

  if (startDate && endDate) {
    formatStartDate = format(new Date(startDate), "dd-MMM-yyyy");
    formatEndDate = format(new Date(endDate), "dd-MMM-yyyy");
  }

  const range = `${formatStartDate} - ${formatEndDate}`;

  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: SearchResultData = await getSearchResult();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main>
        <section>
          <div className="container flex justify-between">
            <div className="pt-14 pr-4">
              <p className="text-xs">
                300 + Stays - {range} - for {numOfGuests} guests
              </p>
              <h1 className="text-3xl font-semibold mt-2 mb-6">
                Stays in {location}
              </h1>
              <div className="hidden text-sm lg:inline-flex mb-5 space-x-3 text-gray-500 whitespace-normal">
                {filters.map((filter) => (
                  <button type="button" className="filter-btn" key={filter}>
                    {filter}
                  </button>
                ))}
              </div>
              <div>
                {searchResultData.map((list) => (
                  <LisingCard
                    key={list.title}
                    img={list.img}
                    location={list.location}
                    title={list.title}
                    description={list.description}
                    star={list.star}
                    price={list.price}
                    total={list.total}
                  />
                ))}
              </div>
            </div>
            <div className="hidden xl:inline-flex xl:min-w-[400px] ">
              <Map searchResultData={searchResultData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
