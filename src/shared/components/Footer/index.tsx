import Image from "next/image";

import Code from "@/shared/assets/icons/code.svg";
import Logo from "@/shared/assets/logos/museum-logo.svg";
import ArrowCircleUp from "@/shared/assets/icons/arrow-circle-up.svg";

import smoothScroll from "@/shared/utils/smoothScroll";

import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <div className="logo-and-return-top">
          <Image src={Logo} alt="" width={204} />

          <div className="return-top">
            <button onClick={() => smoothScroll("top")}>
              <h4>Voltar ao topo</h4>
              <Image src={ArrowCircleUp} alt="" width={40} height={40} />
            </button>
          </div>
        </div>
        <div className="copyrights">
          <h4>
            © 2023 Data from
            <a
              href="https://metmuseum.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Metropolitan Museum of Art Collection API
            </a>
          </h4>
          <h4>
            <Image alt="" width={24} height={24} src={Code} />
            Desenvolvido por{" "}
            <strong>
              <a
                href="https://henriquesousadev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Henrique Sousa
              </a>
            </strong>
          </h4>
        </div>
      </Content>
    </Container>
  );
}
