/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

import { Bookmark } from "lucide-react";

import { TopBar } from "@/shared/components/TopBar";
import { Footer } from "@/shared/components/Footer";
import { SectionTitle } from "@/shared/components/SectionTitle";

import { Container } from "./styles";
import { InfoCard } from "@/shared/components/InfoCard";
import { InfoCardProps } from "@/shared/types/InfoCardProps";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedArray = localStorage.getItem("favoriteList");
    const parsedFavorites = storedArray ? JSON.parse(storedArray) : [];

    setFavorites(parsedFavorites);
  }, []);

  return (
    <Container>
      <TopBar />
      <div className="hero">
        <Bookmark color={`var(--Orange)`} size={64} />

        <h1>
          Here are your <strong>favorites</strong>
        </h1>
      </div>

      {favorites?.length ? (
        <>
          <SectionTitle subtitle="Saved by you" title="Your favorite list" />
          <div className="favorite-list">
            {favorites.map((item: InfoCardProps, index) => (
              <InfoCard
                id={item.id}
                key={index}
                author={item.author}
                image={item.image}
                isPublic={item.isPublic}
                title={item.title}
              />
            ))}
          </div>
        </>
      ) : (
        <SectionTitle
          subtitle="Your favorites will appear here"
          title="You have no saved items yet :("
        />
      )}

      <Footer />
    </Container>
  );
}
