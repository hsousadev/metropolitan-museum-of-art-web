/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";

import InfoCardDefaultIcon from "@/shared/assets/icons/info-card-default-icon.svg";

import { BookmarkButton } from "../BookmarkButton";
import { RemoveMarkButton } from "../RemoveMarkButton";

import { Container } from "./styles";
interface InfoCardProps {
  className?: string;
  image?: string;
  title: string;
  author: string | undefined;
  isPublic: boolean;
  onClick?: () => void;
  isHighlighted?: boolean;
  id: number;
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
  const storedFavorites = Cookies.get("favoriteIDs") || "";

  const router = useRouter();
  const [errorImage, setErrorImage] = useState(false);

  const [isFavorited, setIsFavorited] = useState();

  function setCookie(name: string, value: string) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
  }

  function handleClick() {
    setCookie("workID", id.toString());
    router.push("/work");
  }

  useEffect(() => {
    let favorites = [];
    if (storedFavorites !== "") {
      favorites = JSON.parse(storedFavorites);
    }

    const initialFavoriteValue = favorites.includes(id);

    setIsFavorited(initialFavoriteValue);
  }, []);

  return (
    <Container className={className}>
      {image && <img onError={() => setErrorImage(true)} src={image} alt="" />}

      {(errorImage || !image) && !isHighlighted && (
        <Image src={InfoCardDefaultIcon} alt="" width={80} height={80} />
      )}
      <div className="info" onClick={handleClick}>
        <h4>{title}</h4>
        <p>{author}</p>

        <strong>{isPublic ? "Public" : "Private"}</strong>
      </div>

      {isFavorited ? (
        <RemoveMarkButton
          isFavorite={isFavorited}
          setIsFavorite={setIsFavorited}
          id={id}
        />
      ) : (
        <BookmarkButton
          isFavorite={isFavorited}
          setIsFavorite={setIsFavorited}
          id={id}
        />
      )}
    </Container>
  );
}
