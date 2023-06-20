import { Search } from "lucide-react";

import { Container } from "./styles";

export function SearchBar() {
  return (
    <Container>
      <input type="text" placeholder="Search art, artist, work..." />
      <button>
        <Search color={`var(--Gray)`} size={32} />
      </button>
    </Container>
  );
}
