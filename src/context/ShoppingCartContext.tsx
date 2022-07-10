import { createContext, ReactNode, useContext } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type Props = {
  children: ReactNode;
};

export function ShoppingCartProvider({ children }: Props) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
