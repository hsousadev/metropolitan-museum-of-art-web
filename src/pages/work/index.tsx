/* eslint-disable @next/next/no-img-element */
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

import { FileImage } from "lucide-react";

import { TopBar } from "@/shared/components/TopBar";
import { Footer } from "@/shared/components/Footer";
import { BookmarkButton } from "@/shared/components/BookmarkButton";

import { Container } from "./styles";
import { WorkProps } from "@/shared/types/WorkProps";

interface WorkPageProps {
  data: WorkProps;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  const id = cookies.workID;

  const req = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
  );
  const data = await req.json();

  return { props: { data } };
}

export default function Work({ data }: WorkPageProps) {
  return (
    <Container>
      <TopBar />

      <div className="hero">
        <div className="thumb-image">
          <img
            onClick={() => window.open(data?.primaryImage)}
            src={data?.primaryImageSmall}
            alt=""
          />
        </div>
        {/* <BookmarkButton /> */}

        <h2>{data?.title}</h2>
        <button onClick={() => window.open(data?.artistWikidata_URL)}>
          <h3>{data?.artistDisplayName}</h3>
        </button>
        <h4>{data?.objectDate || data?.objectBeginDate}</h4>

        <button onClick={() => window.open(data?.primaryImage)}>
          <FileImage color={`var(--Orange)`} size={32} />{" "}
          <h3>See original image</h3>
        </button>
      </div>

      <div className="overview">
        <h2>Overview</h2>
        <div className="descriptions">
          {data?.artistNationality && (
            <h4>
              Artist nacionality: <strong>{data.artistNationality}</strong>
            </h4>
          )}

          {data?.dimensions && (
            <h4>
              Dimensions: <strong>{data?.dimensions}</strong>
            </h4>
          )}

          {data?.creditLine && (
            <h4>
              Credit Line: <strong>{data?.creditLine}</strong>
            </h4>
          )}

          {data?.repository && (
            <h4>
              Repository: <strong>{data?.repository}</strong>
            </h4>
          )}

          {data?.isPublicDomain ? <h4>Public</h4> : <h4>Private</h4>}
        </div>
      </div>

      <Footer />
    </Container>
  );
}
