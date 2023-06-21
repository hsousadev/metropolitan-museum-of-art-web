/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import { SearchBar } from "@/shared/components/SearchBar";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { HighlightCard } from "@/shared/components/HighlightCard";
import { InfoCard } from "@/shared/components/InfoCard";

import { DataProps } from "@/shared/types/DataProps";
import { Context } from "..";

import { Container } from "./styles";

export function Home({ latestData }: DataProps) {
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
            subtitle="Search list"
            title={`${dataSearched.length} results found`}
          />
          <div className="searched-list">
            {dataSearched.map((item, index) => (
              <InfoCard
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
        <>
          <SectionTitle subtitle="Recently added" title="Highlights" />
          <div className="highlight-cards">
            {latestData.slice(0, 3).map((item, index) => (
              <HighlightCard
                key={index}
                artistDisplayName={item.artistDisplayName}
                primaryImageSmall={item.primaryImageSmall}
                isPublicDomain={item.isPublicDomain}
                title={item.title}
                country={item.country}
              />
            ))}
          </div>

          <SectionTitle
            subtitle="Latest Added"
            title="Other recently works for you"
          />
          <div className="other-works-list">
            {latestData.slice(3).map((item, index) => (
              <InfoCard
                key={index}
                author={item.artistDisplayName}
                image={item.primaryImageSmall}
                isPublic={item.isPublicDomain}
                title={item.title}
              />
            ))}
          </div>
        </>
      )}
    </Container>
  );
}
