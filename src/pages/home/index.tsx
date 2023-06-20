/* eslint-disable react/no-unescaped-entities */
import { SearchBar } from "@/shared/components/SearchBar";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { HighlightCard } from "@/shared/components/HighlightCard";
import { InfoCard } from "@/shared/components/InfoCard";

import { DataProps } from "@/shared/types/DataProps";

import { Container } from "./styles";

export function Home({ todayData, latestData }: DataProps) {
  return (
    <Container>
      <div className="hero">
        <h1>
          Let's Find Some <strong>Art</strong> Here!
        </h1>

        <SearchBar />
      </div>

      <SectionTitle subtitle="Recently added" title="Today highlights" />
      <div className="highlight-cards">
        {todayData.slice(0, 3).map((item) => (
          <HighlightCard
            key={item.objectID}
            artistDisplayName={item.artistDisplayName}
            primaryImageSmall={item.primaryImageSmall}
            isPublicDomain={item.isPublicDomain}
            title={item.title}
            country={item.country}
          />
        ))}
      </div>

      <SectionTitle subtitle="Latest Added" title="Other recently works for you" />
      <div className="other-works-list">
        {latestData.map((item) => (
          <InfoCard
            key={item.objectID}
            author={item.artistDisplayName}
            image={item.primaryImageSmall}
            isPublic={item.isPublicDomain}
            title={item.title}
          />
        ))}
      </div>
    </Container>
  );
}
