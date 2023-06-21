/* eslint-disable @next/next/no-img-element */
import { HighlightCardProps } from "@/shared/types/HighlightCardProps";
import { InfoCard } from "../InfoCard";

import { Container } from "./styles";

export function HighlightCard({
  primaryImageSmall,
  title,
  artistDisplayName,
  isPublicDomain,
  onClick,
  country,
}: HighlightCardProps) {
  return (
    <Container onClick={onClick}>
      <div className="content">
        <img src={primaryImageSmall} alt=""  />
        <InfoCard
          className="info-card"
          author={artistDisplayName ? artistDisplayName : country}
          isPublic={isPublicDomain}
          title={title}
          isHighlighted
        />
      </div>
    </Container>
  );
}
