import { Container } from "./styles";

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

export function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <Container>
      <h4>{subtitle}</h4>
      <h2>{title}</h2>
    </Container>
  );
}
