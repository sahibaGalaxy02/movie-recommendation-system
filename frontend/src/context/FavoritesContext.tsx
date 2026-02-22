import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext<any>(null);

export const FavoritesProvider = ({ children }: any) => {

  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const addFavorite = (movie: any) => {
    const updated = [...favorites, movie];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const removeFavorite = (id: number) => {
    const updated = favorites.filter(m => m.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
