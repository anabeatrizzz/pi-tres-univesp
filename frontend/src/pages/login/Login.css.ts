import colors from "../../components/colors";

const styles = {
  link: {
    color: "black"
  },

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

  divInputs: {
    display: "flex",
    flexDirection: "column" as "column"
  },

  cardActions: {
    justifyContent: "center"
  },

  loginBtn: {
    background: colors.darkYellow
  },

  loginTxt: {
    fontFamily: "Griffy",
    fontSize: 15,
    color: "black"
  }
}

export default styles;