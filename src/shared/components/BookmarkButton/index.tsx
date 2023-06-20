import { Bookmark } from "lucide-react";

import { Container } from "./styles";

export function BookmarkButton() {
  return (
    <Container>
      <div className="content">
        <Bookmark size={32} color={`var(--Orange)`} />
      </div>
    </Container>
  );
}
