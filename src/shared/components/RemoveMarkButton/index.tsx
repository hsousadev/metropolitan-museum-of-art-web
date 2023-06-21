import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Bookmark } from "lucide-react";

import { Container } from "./styles";

interface RemoveMarkButtonProps {
  id: number;
  isFavorite: boolean;
  setIsFavorite: Dispatch<SetStateAction<any>>;
}

export function RemoveMarkButton({
  id,
  isFavorite,
  setIsFavorite,
}: RemoveMarkButtonProps) {
  const [cookieArray, setCookieArray] = useState<number[]>([]);

  useEffect(() => {
    const storedCookie = Cookies.get("favoriteIDs");
    if (storedCookie) {
      setCookieArray(JSON.parse(storedCookie));
    }
  }, []);

  const removeStringFromCookieArray = (index: number) => {
    const updatedArray = cookieArray.filter((value) => value !== index);
    Cookies.set("favoriteIDs", JSON.stringify(updatedArray));
    setIsFavorite(!isFavorite);
  };

  return (
    <Container onClick={() => removeStringFromCookieArray(id)}>
      <div className="content">
        <Bookmark size={32} color={`var(--Orange)`} />
      </div>
    </Container>
  );
}
