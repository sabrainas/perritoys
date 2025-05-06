import { Brinquedo } from "../types/brinquedos";

export const brinquedosPorCategoria: Record<string, Brinquedo[]> = {
  "jogos-eletronicos": [
    {
      codigo: 1,
      descricao: "Console portátil com 400 jogos",
      categoria: "jogos-eletronicos",
      marca: "GameTech",
      img: "/img/console.jpg",
      valor: 199.99,
      detalhes: "Console retrô com tela colorida e controles embutidos.",
    },
    // mais jogos eletrônicos
  ],

  "jogos-de-tabuleiro": [
    {
      codigo: 2,
      descricao: "Jogo de estratégia familiar",
      categoria: "jogos-de-tabuleiro",
      marca: "Grow",
      img: "/img/tabuleiro.jpg",
      valor: 89.90,
      detalhes: "Jogo divertido para todas as idades, com cartas e peças.",
    },
    // mais tabuleiros
  ],

  "brinquedos": [
    {
      codigo: 3,
      descricao: "Carrinho de corrida vermelho",
      categoria: "brinquedos",
      marca: "HotWheels",
      img: "/img/carrinho.jpg",
      valor: 49.90,
      detalhes: "Carrinho de alta velocidade com rodas esportivas.",
    },
  ],
};
