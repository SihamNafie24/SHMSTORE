import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalCarrinho = ({ children }) => {
  const [produtosCarrinho, setprodutosCarrinho] = React.useState([]);
  const [showCarrinho, setShowCarrinho] = React.useState(false);

  function adicionarProduto(id, price) {
    const copiaprodutosCarrinho = [...produtosCarrinho];
    const item = copiaprodutosCarrinho.find((produto) => produto.id === id);

    if (!item) {
      copiaprodutosCarrinho.push({ id, qtd: 1, price: price });
    } else {
      item.qtd = item.qtd + 1;
    }

    setprodutosCarrinho(copiaprodutosCarrinho);
  }

  function removerProduto(id) {
    let copiaprodutosCarrinho = [...produtosCarrinho];
    const item = copiaprodutosCarrinho.find((produto) => produto.id === id);

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setprodutosCarrinho(copiaprodutosCarrinho);
    } else {
      copiaprodutosCarrinho = copiaprodutosCarrinho.filter(
        (produto) => produto.id !== id,
      );
      setprodutosCarrinho(copiaprodutosCarrinho);
    }
  }

  function limparCarrinho() {
    setprodutosCarrinho([]);
  }

  return (
    <GlobalContext.Provider
      value={{
        produtosCarrinho,
        adicionarProduto,
        removerProduto,
        limparCarrinho,
        showCarrinho,
        setShowCarrinho
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
