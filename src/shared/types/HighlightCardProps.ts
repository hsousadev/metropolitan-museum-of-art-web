export interface HighlightCardProps {
  objectID?: string;
  primaryImageSmall: string;
  title: string;
  artistDisplayName: string;
  isPublicDomain: boolean;
  country?: string;
  onClick?: () => void;
}