import { createContext, ReactNode, useState } from "react";
import { ArticleProps } from "../types";

interface CartContextData {
  articles: ArticleProps[];
  addArticle: (article: ArticleProps) => void;
  removeArticle: (article: ArticleProps) => void;
  purchasedArticles: ArticleProps[];
  submitCheckout: () => void;
  formatter: (amount: number) => string;
}

interface CartProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [purchasedArticles, setPurchasedArticles] = useState<ArticleProps[]>(
    []
  );

  function addArticle(article: ArticleProps) {
    setArticles((prev) => {
      return [...prev, article];
    });
  }

  function removeArticle(article: ArticleProps) {
    setArticles((prev) => {
      let remainingArticles = prev.filter((ele) => ele.id !== article.id);
      return [...remainingArticles];
    });
  }

  function submitCheckout() {
    setPurchasedArticles((prev)=>[...prev, ...articles]);
    setArticles([]);
  }

  function formatter(amount: number): string {
    const formatterObj = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatterObj.format(amount);
  }

  return (
    <CartContext.Provider
      value={{
        articles,
        addArticle,
        removeArticle,
        purchasedArticles,
        submitCheckout,
        formatter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
