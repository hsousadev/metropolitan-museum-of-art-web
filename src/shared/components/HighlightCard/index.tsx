/* eslint-disable @next/next/no-img-element */
import { InfoCard } from "../InfoCard";

import { Container } from "./styles";

interface HightlightProps {
  image: string;
  title: string;
  author: string;
  isPublic: boolean;
  onClick?: () => void;
}

export function HighlightCard({
  author,
  image,
  isPublic,
  title,
  onClick,
}: HightlightProps) {
  return (
    <Container onClick={onClick}>
      <div className="content">
        <img src={image} alt="" width={387} height={444} />
        <InfoCard
          className="info-card"
          author={author}
          isPublic={isPublic}
          title={title}
        />
      </div>
    </Container>
  );
}
