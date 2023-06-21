import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Bookmark } from "lucide-react";

import { Container } from "./styles";

interface BookmarkButtonProps {
  id: number;
  setIsFavorite: Dispatch<SetStateAction<any>>;
  isFavorite: any;
}

export function BookmarkButton({
  id,
  isFavorite,
  setIsFavorite,
}: BookmarkButtonProps) {
  const [cookieArray, setCookieArray] = useState<number[]>([]);

  const addStringToCookieArray = (newString: number) => {
    const updatedArray = [...cookieArray, newString];
    setCookieArray(updatedArray);
    Cookies.set("favoriteIDs", JSON.stringify(updatedArray));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const storedCookie = Cookies.get("favoriteIDs");
    if (storedCookie) {
      setCookieArray(JSON.parse(storedCookie));
    }
  }, []);

  return (
    <Container onClick={() => addStringToCookieArray(id)}>
      <div className="content">
        <Bookmark size={32} color={`var(--Orange)`} />
      </div>
    </Container>
  );
}
