import Image from "next/image";
import { useRouter } from "next/router";

import { Bookmark } from "lucide-react";
import { Home } from "lucide-react";

import MuseumLogo from "@/shared/assets/logos/museum-logo.svg";

import { Container } from "./styles";

export function TopBar() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const isFavorites = router.pathname === "/favorites";

  return (
    <Container id="top">
      <Image src={MuseumLogo} alt="" height={64} width={204} />

      <div className="options">
        {!isHome && (
          <button onClick={() => router.push("/")}>
            <h4>Home</h4>
            <Home size={32} color={`var(--Orange)`} />
          </button>
        )}
        {!isFavorites && (
          <button onClick={() => router.push("/favorites")}>
            <h4>Your favorites</h4>
            <Bookmark size={32} color={`var(--Orange)`} />
          </button>
        )}
      </div>
    </Container>
  );
}
