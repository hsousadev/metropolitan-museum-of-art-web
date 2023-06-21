/* eslint-disable react/no-unescaped-entities */
import { GetServerSidePropsContext } from "next";

import { Bookmark } from "lucide-react";

import { TopBar } from "@/shared/components/TopBar";
import { Footer } from "@/shared/components/Footer";
import { SearchBar } from "@/shared/components/SearchBar";
import { SectionTitle } from "@/shared/components/SectionTitle";

import { parseCookies } from "nookies";

import { Container } from "./styles";
import { InfoCard } from "@/shared/components/InfoCard";
import { DataProps } from "@/shared/types/DataProps";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  let favoriteIDs = [];

  if (cookies.favoriteIDs) {
    try {
      favoriteIDs = JSON.parse(cookies.favoriteIDs);
    } catch (error) {
      console.error("Error parsing favoriteIDs cookie:", error);
    }
  }

  const favoriteDataPromises = await favoriteIDs.map((id: number) =>
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    )
  );

  const favoriteDataResponses = await Promise.all(favoriteDataPromises);
  const data = await Promise.all(
    favoriteDataResponses.map((response) => response.json())
  );

  return { props: { data } };
}

export default function Favorites({ data }: DataProps) {
  return (
    <Container>
      <TopBar />
      <div className="hero">
        <Bookmark color={`var(--Orange)`} size={64} />

        <h1>
          Here are your <strong>favorites</strong>
        </h1>
      </div>

      {data.length ? (
        <>
          <SectionTitle subtitle="Saved by you" title="Your favorite list" />
          <div className="favorite-list">
            {data.map((item, index) => (
              <InfoCard
                id={item.objectID}
                key={index}
                author={item.artistDisplayName}
                image={item.primaryImageSmall}
                isPublic={item.isPublicDomain}
                title={item.title}
              />
            ))}
          </div>
        </>
      ) : (
        <SectionTitle subtitle="Your favorites will appear here" title="You have no saved items yet :(" />
      )}

      <Footer />
    </Container>
  );
}
