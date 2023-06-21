import {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
  KeyboardEvent,
} from "react";
import { Search } from "lucide-react";

import { Context } from "@/pages";

import { Container } from "./styles";

export function SearchBar() {
  const { setDataSearched } = useContext(Context);

  const [searchText, setSearchText] = useState("");

  async function handleSearch() {
    if (searchText === "") {
      setDataSearched([]);
      return;
    }

    const reqSearchedData = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchText}`
    );
    const searchedDataResponse = await reqSearchedData.json();

    const searchedDataPromisses = await searchedDataResponse.objectIDs.map(
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
  );
}
