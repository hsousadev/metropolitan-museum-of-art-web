/* eslint-disable react/no-unescaped-entities */

import { SearchBar } from "@/shared/components/SearchBar";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { HighlightCard } from "@/shared/components/HighlightCard";
import { InfoCard } from "@/shared/components/InfoCard";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <div className="hero">
        <h1>
          Let's Find Some <strong>Art</strong> Here!
        </h1>

        <SearchBar />
      </div>

      <SectionTitle subtitle="Topics for you" title="Our special gallery" />
      <div className="highlight-cards">
        <HighlightCard
          author="Giovanni Britto"
          image="https://images.metmuseum.org/CRDImages/dp/web-large/DP-19387-001.jpg"
          isPublic
          title="Charles V, bust length, holding a sword, facing right"
        />
        <HighlightCard
          author="Giovanni Britto"
          image="https://images.metmuseum.org/CRDImages/dp/web-large/DP-19387-001.jpg"
          isPublic
          title="Charles V, bust length, holding a sword, facing right"
        />
        <HighlightCard
          author="Giovanni Britto"
          image="https://images.metmuseum.org/CRDImages/dp/web-large/DP-19387-001.jpg"
          isPublic
          title="Charles V, bust length, holding a sword, facing right"
        />
      </div>

      <SectionTitle subtitle="Here some more" title="Other works for you" />
      <div className="other-works-list">
        <InfoCard
          author="Giovanni Britto"
          isPublic
          title="Charles V, bust length, holding a sword, facing right"
          image="https://images.metmuseum.org/CRDImages/dp/web-large/DP-19387-001.jpg"
        />
        <InfoCard
          author="Giovanni Britto"
          isPublic
          title="Charles V, bust length, holding a sword, facing right"
          image="https://images.metmuseum.org/CRDImages/dp/web-large/DP-19387-001.jpg"
        />
        <InfoCard
          author="Giovanni Britto"
          isPublic
          title="Charles V, bust length, holding a sword, facing right"
          image="https://images.metmuseum.org/CRDImages/dp/web-large/DP-19387-001.jpg"
        />
        <InfoCard
          author="Giovanni Britto"
          isPublic
          title="Charles V, bust length, holding a sword, facing right"
          image="https://images.metmuseum.org/CRDImages/dp/web-large/DP-19387-001.jpg"
        />
        <InfoCard
          author="Giovanni Britto"
          isPublic
          title="Charles V, bust length, holding a sword, facing right"
          image="https://images.metmuseum.org/CRDImages/dp/web-large/DP-19387-001.jpg"
        />
        <InfoCard
          author="Giovanni Britto"
          isPublic
          title="Charles V, bust length, holding a sword, facing right"
          image="https://images.metmuseum.org/CRDImages/dp/web-large/DP-19387-001.jpg"
        />
      </div>
    </Container>
  );
}
