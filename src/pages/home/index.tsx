/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import { SearchBar } from "@/shared/components/SearchBar";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { HighlightCard } from "@/shared/components/HighlightCard";
import { InfoCard } from "@/shared/components/InfoCard";

import { DataProps } from "@/shared/types/DataProps";
import { Context } from "..";

import { Container } from "./styles";

export default function Home({ data }: DataProps) {
  const { dataSearched } = useContext(Context);

  return (
    <Container>
      <div className="hero">
        <h1>
          Let's Find Some <strong>Art</strong> Here!
        </h1>

        <SearchBar />
      </div>

      {dataSearched.length ? (
        <>
          <SectionTitle
            subtitle="Results on display at the museum"
            title="Works founded"
          />
          <div className="searched-list">
            {dataSearched.map(
              (item, index) =>
                item.title && (
                  <InfoCard
                    id={item.objectID}
                    key={index}
                    author={item.artistDisplayName}
                    image={item.primaryImageSmall}
                    isPublic={item.isPublicDomain}
                    title={item.title}
                  />
                )
            )}
          </div>
        </>
      ) : (
        <>
          <SectionTitle subtitle="Recently added" title="Highlights" />
          <div className="highlight-cards">
            {data
              ?.slice(0, 3)
              ?.map(
                (item, index) =>
                  item.primaryImageSmall && (
                    <HighlightCard
                      objectID={item.objectID}
                      key={index}
                      artistDisplayName={item.artistDisplayName}
                      primaryImageSmall={item.primaryImageSmall}
                      isPublicDomain={item.isPublicDomain}
                      title={item.title}
                      country={item.country}
                    />
                  )
              )}
          </div>

          <SectionTitle
            subtitle="Latest Added"
            title="Other recently works for you"
          />
          <div className="other-works-list">
            {data
              ?.slice(3)
              ?.map(
                (item, index) =>
                  item.primaryImageSmall && (
                    <InfoCard
                      id={item.objectID}
                      key={index}
                      author={item.artistDisplayName}
                      image={item.primaryImageSmall}
                      isPublic={item.isPublicDomain}
                      title={item.title}
                    />
                  )
              )}
          </div>
        </>
      )}
    </Container>
  );
}
