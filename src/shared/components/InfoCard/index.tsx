/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";
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
  id: string;
}

export function InfoCard({
  id,
  author,
  isPublic,
  title,
  image,
  className,
  isHighlighted,
}: InfoCardProps) {
  const router = useRouter();
  const [errorImage, setErrorImage] = useState(false);

  function setCookie(name: string, value: string) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
  }

  function handleClick() {
    setCookie("workID", id);
    router.push("/work");
  }

  return (
    <Container className={className} onClick={handleClick}>
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
