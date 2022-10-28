import React, { useEffect, useState } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import { getNews, postNews } from "../../services/initial";
import Card from "../../components/card";
import { getUsers } from "../../services/users";
import Button from "../../components/button";

interface INews {
  id: number;
  titulo: string;
  descricao: string;
}

export default function Initial() {
  const [news, setNews] = useState<INews[]>([])

  function post(){
    postNews({
      titulo: "teste",
      descricao: "teste",
      //autor: "teste"
    })
  }

  useEffect(() => {
    getNews.then((news: any) => {
      setNews(news)
    })

    getUsers.then((users: any) => { })
  }, [])

  return (
    <Wrapper paperComponent title="NOVIDADES">
      <Button onClick={() => post()}>POST</Button>
      {
        news.map((singleNews) => (
          <Card key={singleNews.id} title={singleNews.titulo} description={singleNews.descricao} />
        ))
      }
    </Wrapper>
  )
}