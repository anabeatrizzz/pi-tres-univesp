import colors from "../../components/colors"

const styles = {
  divCards: {
    display: "flex",
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap"
  },

  btn: {
    background: colors.darkYellow
  },

  plusTxt: {
    fontFamily: "Griffy",
    fontSize: 25
  },

  minusTxt: {
    fontFamily: "Griffy",
    color: "black"
  },

  divRow: {
    display: "flex",
    //flexDirection: "row" as "row"
  },

  statsRow: {
    flexDirection: "row" as "row",
    display: "flex"
  },

  statsMinusAndPlus: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20
  }
}

export default styles