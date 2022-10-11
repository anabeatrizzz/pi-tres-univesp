import colors from "../../components/colors"

const styles = {
  card: {
    padding: 20,
    backgroundColor: "#e6e6e6",
    marginBottom: 10
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },

  div: {
    display: "flex",
    flexDirection: "column" as "column"
  },

  link: {
    color: "black",
    textDecoration: "none"
  },

  btn: {
    background: colors.darkYellow
  },

  btnTxt: {
    fontFamily: "Griffy",
    fontSize: 15,
    color: "black"
  }
}

export default styles