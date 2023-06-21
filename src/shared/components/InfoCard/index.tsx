/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import InfoCardDefaultIcon from "@/shared/assets/icons/info-card-default-icon.svg";

import { BookmarkButton } from "../BookmarkButton";
import { RemoveMarkButton } from "../RemoveMarkButton";

import { Container } from "./styles";
import { InfoCardProps } from "@/shared/types/InfoCardProps";

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
  const [isFavorited, setIsFavorited] = useState(false);

  const object = {
    id,
    author,
    isPublic,
    title,
    image,
  };

  function setCookie(name: string, value: string) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
  }

  function handleClick() {
    setCookie("workID", id.toString());
    router.push("/work");
  }

  function handleAddFavorite() {
    setIsFavorited(true);

    const storedFavorites = localStorage.getItem("favoriteList");
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    const newFavorites = [...parsedFavorites, object];

    localStorage.setItem("favoriteList", JSON.stringify(newFavorites));
  }

  function handleRemoveFavorite() {
    setIsFavorited(false);

    const storedFavorites = localStorage.getItem("favoriteList");
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    const updatedFavorites = parsedFavorites.filter((favorite: InfoCardProps) => {
      return (
        favorite.id !== object.id ||
        favorite.author !== object.author ||
        favorite.isPublic !== object.isPublic ||
        favorite.title !== object.title ||
        favorite.image !== object.image
      );
    });

    localStorage.setItem("favoriteList", JSON.stringify(updatedFavorites));
  }

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteList");
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (
      parsedFavorites.some(
        (item: InfoCardProps) => JSON.stringify(item) === JSON.stringify(object)
      )
    ) {
      setIsFavorited(true);
    }
  }, [isFavorited]);

  return (
    <Container className={className}>
      {!isHighlighted && !errorImage && (
        <img onError={() => setErrorImage(true)} src={image} alt="" />
      )}

      {errorImage && !isHighlighted && (
        <Image src={InfoCardDefaultIcon} alt="" width={80} height={80} />
      )}
      <div className="info" onClick={handleClick}>
        <h4>{title}</h4>
        <p>{author}</p>

        <strong>{isPublic ? "Public" : "Private"}</strong>
      </div>

      {isFavorited ? (
        <RemoveMarkButton onClick={() => handleRemoveFavorite()} />
      ) : (
        <BookmarkButton onClick={() => handleAddFavorite()} />
      )}
    </Container>
  );
}
