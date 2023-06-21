export interface InfoCardProps {
  className?: string;
  image: string;
  title: string;
  author: string | undefined;
  isPublic: boolean;
  onClick?: () => void;
  isHighlighted?: boolean;
  id: number;
  showImage?: boolean;
}