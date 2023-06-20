/* eslint-disable react/no-unescaped-entities */

import { SearchBar } from "@/shared/components/SearchBar";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>
        Let's Find Some <strong>Art</strong> Here!
      </h1>

      <SearchBar />
    </Container>
  );
}
