import React, { useState } from "react"
import { Card as MUICard, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Edit from '@mui/icons-material/Edit';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import colors from "../colors";
import styles from "./Card.css"
import Button from "../button";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ICard {
  description?: string;
  title?: string;
  editable?: boolean;
  onClick?: () => void;
}

export default function Card(props: ICard) {
  const [expanded, setExpanded] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <MUICard style={styles.card} sx={{ maxWidth: 590 }}>
      {
        !props.editable && !isEditable ? (
          <>
            <CardHeader
              title={props.title}
              subheader="01 de outubro de 2022"
              avatar={
                <Avatar sx={{ bgcolor: colors.orange }} aria-label="recipe">
                  M
                </Avatar>
              }
              action={
                <IconButton onClick={() => setIsEditable(true) } aria-label="edit">
                  <Edit />
                </IconButton>
              }
              titleTypographyProps={{
                variant: "h6"
              }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{props.description}</Typography>
              </CardContent>
            </Collapse>
          </>
        ) : (
          <>
            <CardHeader
              title={
                <TextField
                  required
                  id="title"
                  label="Título"
                  variant="standard"
                  margin="normal"
                  fullWidth
                />
              }
              titleTypographyProps={{
                variant: "h6"
              }}
            />
            <CardContent>
              <TextField
                required
                id="description"
                label="Descrição"
                variant="standard"
                margin="normal"
                multiline
                fullWidth
                minRows={3}
              />
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }} disableSpacing>
              <Button btntype="minus" />
              <Button onClick={() => {
                if(props.onClick !== undefined){
                  props.onClick()
                } else {
                  return
                }
              }}
              
              btntype="save"
              />
            </CardActions>
          </>
        )
      }
    </MUICard>
  )
}