import BgImg from "../../assets/races-bg.png";

const styles = {
  racesContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap" as "wrap",
    paddingTop: 10
  },

  raceOutterContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row" as "row",
    flexBasis: "50%"
  },

  raceInnerContainer: {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    padding: 60,
    paddingTop: 50,
    paddingRight: 50
  },

  cardTxt: {
    fontWeight: 700,
    fontSize: 11
  },

  editIconDiv: {
    display: "flex",
    justifyContent: "flex-end"
  },

  statsMinusAndPlus: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20
  }
}

export default styles;