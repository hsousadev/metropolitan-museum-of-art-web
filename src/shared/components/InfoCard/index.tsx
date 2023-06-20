/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";

import { BookmarkButton } from "../BookmarkButton";

interface InfoCardProps {
  className?: string;
  image?: string;
  title: string;
  author: string;
  isPublic: boolean;
  onClick?: () => void;
}

export function InfoCard({
  author,
  isPublic,
  title,
  image,
  className,
  onClick,
}: InfoCardProps) {
  return (
    <Container className={className} onClick={onClick}>
      {image && <img src={image} alt="" />}{" "}
      <div className="info">
        <h4>{title}</h4>
        <p>{author}</p>

        <strong>{isPublic ? "Public" : "Private"}</strong>
      </div>
      <BookmarkButton />
    </Container>
  );
}
