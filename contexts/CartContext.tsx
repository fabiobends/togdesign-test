import { createContext, ReactNode, useState } from "react";
import { ArticleProps } from "../types";

interface CartContextData {
  articles: ArticleProps[];
  addArticle: (article: ArticleProps) => void;
  removeArticle: (article: ArticleProps) => void;
  formatter: (amount: number) => string;
}

interface CartProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0.0);

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

  function formatter(amount: number): string {
    const formatterObj = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatterObj.format(amount);
  }

  return (
    <CartContext.Provider
      value={{ articles, addArticle, removeArticle, formatter }}
    >
      {children}
    </CartContext.Provider>
  );
}
