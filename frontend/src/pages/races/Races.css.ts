import BgImg from "../../assets/races-bg.png";

const styles = {
  racesContainer: {
    display: "flex",
    paddingTop: 10
    //justifyContent: "space-evenly",
    //flexWrap: "wrap" as "wrap"
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
    padding: 60
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