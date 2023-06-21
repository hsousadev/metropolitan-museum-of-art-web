/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

import { WorkProps } from "@/shared/types/WorkProps";
import { InfoCard } from "../InfoCard";

import { Container } from "./styles";

export function HighlightCard({
  objectID,
  primaryImageSmall,
  title,
  artistDisplayName,
  isPublicDomain,
  country,
}: WorkProps) {

  const router = useRouter()

  function setCookie(name: string, value: string) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
  }

  function handleClick() {
    setCookie("workID", objectID);
    router.push("/work");
  }

  return (
    <Container onClick={handleClick}>
      <div className="content">
        <img src={primaryImageSmall} alt="" />
        <InfoCard
          id={objectID}
          className="info-card"
          author={artistDisplayName ? artistDisplayName : country}
          isPublic={isPublicDomain}
          title={title}
          isHighlighted
        />
      </div>
    </Container>
  );
}
