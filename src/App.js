import React from "react";
import Product from "./components/Product.js";
import brahma from './img/brahma.png';
import budweiser from "./img/budweiser.png";
import corona from "./img/corona.png";
import heineken from "./img/heineken.png";
import schin from "./img/schin.png";

import "./App.css";

function App() {
  
  return <> 
  <Product img={brahma} >
    BRAHMA: Brahma é uma marca de cerveja brasileira criada em 1888, no Rio de Janeiro, pela Manufactura de Cerveja Brahma Villiger 
    e Companhia, que depois mudaria de nome para Companhia Cervejaria Brahma, e depois seria sucedida pela AmBev. A cerveja Brahma é
    a segunda marca de cerveja mais consumida no Brasil, e a nona cerveja mais consumida em todo o mundo. No Brasil, é considerada a
    3ª marca mais valiosa do país, avaliada em 4,3 bilhões de dólares estadunidenses.
  </Product>;
  <Product img={budweiser}>
    Budweiser, também conhecida popularmente como Bud, é uma cerveja do tipo long americana, fabricada pela AB
    InBev, fundada em 1876. Tem sua versão light, a Bud Light, que é a cerveja mais consumida nos Estados Unidos.Recentemente foi vendida
    à belgo-brasileira InBev, maior cervejaria do mundo, o que permitiu a venda regular da marca no Brasil. A Budweiser é a nova líder do
    mercado brasileiro de cervejas premium, que representa 4,7% do total de 13 bilhões de litros de cerveja produzidos no Brasil</Product>;
  <Product img={corona}>
    Corona Extra é a marca de cerveja mais popular do México, fundada em 1925 e foi a segunda cerveja a ser produzida pelo Grupo Modelo. 
    Em 2012 a multinacional Belga-brasileira Anheuser-Busch InBev comprou o Grupo Modelo, dona da Cerveja Corona Extra
  </Product>
  <Product img={heineken}>
    Heineken International é uma cervejaria holandesa, fundada em 1863 por Wandscheer Heineken na cidade de Amsterdã. 
    Heineken possui cerca de 140 cervejarias em mais de 70 países, empregando aproximadamente 85.000pessoas. Com uma produção anual de 
    121 800 000 de hectolitros de cerveja, é a terceira maior cervejaria do mundo, ficando atrás apenas da belgo-brasileira ABInBev e da 
    sul-africana SABMiller em 2009. Em 2011 teve lucro de 2,2 bilhões de dólares.
  </Product>
  <Product img={schin}>
    A Brasil Kirin, anteriormente Schincariol, foi uma empresa de bebidas com sede no Brasil. No mercado de cervejas, foi proprietária 
    das marcas Schin, Glacial, Cintra, Baden Baden, Devassa e Eisenbahn. A empresa concorria com a AmBev e o Grupo Petrópolis, 
    além de outras microcervejarias brasileiras.
  </Product>
  </>
}

export default App;

// assim ?
