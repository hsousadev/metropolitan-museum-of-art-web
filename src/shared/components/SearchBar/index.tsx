/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useContext, useState, KeyboardEvent } from "react";
import { Search } from "lucide-react";

import Loading from "@/shared/assets/icons/loading.svg";

import { Context } from "@/pages";

import { Container } from "./styles";
import Image from "next/image";

export function SearchBar() {
  const { setDataSearched } = useContext(Context);

  const [searchText, setSearchText] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch() {
    setIsLoading(true);

    if (searchText === "") {
      setDataSearched([]);
      return;
    }

    const reqSearchedData = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&artistOrCulture=true&q=${searchText}`
    );
    const searchedDataResponse = await reqSearchedData.json();

    if (searchedDataResponse?.objectIDs) {
      setNoResults(false);

      const searchedDataPromisses = await searchedDataResponse?.objectIDs?.map(
        (id: number) =>
          fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          )
      );

      const searchDataResponses = await Promise.all(searchedDataPromisses);
      const searchedData = await Promise.all(
        searchDataResponses.map((response) => response.json())
      );

      setDataSearched(searchedData);
      setIsLoading(false);
    } else {
      setNoResults(true);
      setIsLoading(false);
    }
  }

  function handleInputText(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  function handleInputKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <>
      <Container>
        <input
          type="text"
          placeholder="Search art, artist, work..."
          onChange={(e) => handleInputText(e)}
          onKeyDown={handleInputKeyPress}
        />
        <button>
          <Search color={`var(--Gray)`} size={32} onClick={handleSearch} />
        </button>
      </Container>
      {noResults && (
        <h4 style={{ marginTop: "8px" }}>No results found for your search</h4>
      )}

      {isLoading && (
        <h4 style={{ marginTop: "8px", color: `var(--Orange)` }}>
          <Image src={Loading} alt="" width={16} height={16} />{" "}
          Loading...{" "}
        </h4>
      )}
    </>
  );
}
