import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalCarrinho = ({ children }) => {
  const [produtosCarrinho, setprodutosCarrinho] = React.useState([]);

  function adicionarProduto(id) {
    const copiaprodutosCarrinho = [...produtosCarrinho];
    const item = copiaprodutosCarrinho.find((produto) => produto.id === id);

    if (!item) {
      copiaprodutosCarrinho.push({ id: id, qtd: 1 });
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
