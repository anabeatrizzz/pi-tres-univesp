import React, { useEffect, useState } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import { getNews } from "../../services/initial";
import Card from "../../components/card";

interface INews {
  id: number;
  titulo: string;
  descricao: string;
}

export default function Initial() {
  const [news, setNews] = useState<INews[]>([])

  useEffect(() => {
    getNews.then((news: any) => {
      console.log(news)
      setNews(news)
    })
  }, [])

  return (
    <Wrapper paperComponent title="NOVIDADES">
      {
        news.map((singleNews) => (
          <Card key={singleNews.id} title={singleNews.titulo} description={singleNews.descricao} />
        ))
      }
    </Wrapper>
  )
}