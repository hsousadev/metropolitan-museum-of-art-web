import { Bookmark } from "lucide-react";
import { Container } from "./styles";

interface RemoveMarkButtonProps {
  onClick?: () => void;
}

export function RemoveMarkButton({
  onClick,
}: RemoveMarkButtonProps) {

  return (
    <Container onClick={onClick}>
      <div className="content">
        <Bookmark size={32} color={`var(--Orange)`} />
      </div>
    </Container>
  );
}
