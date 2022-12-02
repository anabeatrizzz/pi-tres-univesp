import React, { useEffect, useState } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import { getNews } from "../../services/initial";
import Card from "../../components/card";
import Button from "../../components/button";

interface INews {
  id: number;
  titulo: string;
  descricao: string;
}

export default function Initial() {
  const [news, setNews] = useState<INews[]>([])
  const [count, setCount] = useState(0);

  useEffect(() => {
    getNews.then((news: any) => {
      setNews(news)
    })
  }, [])

  return (
    <Wrapper paperComponent title="NOVIDADES">
      <Button
        onClick={() => { setCount(count + 1) }}
        style={{ marginBottom: 10 }}
        btntype="plus"
        title="Adicionar notícia"
      />

      {
        Array(count).fill(1).map((_, index) => (
          <Card
            editable
            key={index}
            id={0}
          />
        ))
      }

      {
        news.map((singleNews) => (
          <Card
            key={singleNews.id}
            id={singleNews.id}
            title={singleNews.titulo}
            description={singleNews.descricao}
          />
        ))
      }
    </Wrapper>
  )
}