import React, { useEffect, useState } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styles from "./Initial.css"
import { getNews } from "../../services/initial";
import Card from "../../components/card";

interface INews {
  id: number;
  titulo: string;
  descricao: string;
}

export default function Initial(){
  const [news, setNews] = useState<INews[]>([])

  useEffect(() => {
    getNews.then((news: any) => {
      console.log(news)
      setNews(news)
    })
  }, [])

  return(
    <Wrapper>
      <Paper style={styles.paper} square elevation={0}>
        <Typography gutterBottom variant="h4" style={styles.headingFour}>NOVIDADES</Typography>

        {
          news.map((singleNews) => (
            <Card key={singleNews.id} title={singleNews.titulo} description={singleNews.descricao} />
          ))
        }
      </Paper>
    </Wrapper>
  )
}