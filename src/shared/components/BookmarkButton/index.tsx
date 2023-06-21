import { Bookmark } from "lucide-react";
import { Container } from "./styles";

interface BookmarkButtonProps {
  onClick?: () => void;
}

export function BookmarkButton({ onClick }: BookmarkButtonProps) {
  return (
    <Container onClick={onClick}>
      <div className="content">
        <Bookmark size={32} color={`var(--Orange)`} />
      </div>
    </Container>
  );
}
