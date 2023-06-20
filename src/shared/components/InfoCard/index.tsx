/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";

import { BookmarkButton } from "../BookmarkButton";
import InfoCardDefaultIcon from "@/shared/assets/icons/info-card-default-icon.svg";

import { Container } from "./styles";
interface InfoCardProps {
  className?: string;
  image?: string;
  title: string;
  author: string | undefined;
  isPublic: boolean;
  onClick?: () => void;
  isHighlighted?: boolean;
}

export function InfoCard({
  author,
  isPublic,
  title,
  image,
  className,
  onClick,
  isHighlighted,
}: InfoCardProps) {
  const [errorImage, setErrorImage] = useState(false);

  return (
    <Container className={className} onClick={onClick}>
      {image && <img onError={() => setErrorImage(true)} src={image} alt="" />}

      {(errorImage || !image) && !isHighlighted && (
        <Image src={InfoCardDefaultIcon} alt="" width={80} height={80} />
      )}
      <div className="info">
        <h4>{title}</h4>
        <p>{author}</p>

        <strong>{isPublic ? "Public" : "Private"}</strong>
      </div>
      <BookmarkButton />
    </Container>
  );
}
