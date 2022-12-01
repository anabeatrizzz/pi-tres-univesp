import colors from "../../components/colors"

const styles = {
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  progressDiv: {
    display: "flex",
    flexDirection: "row" as "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },

  progress: {
    width: "70%"
  },

  rightDiv: {
    width: "100%",
    marginLeft: 20,
    marginTop: 30
  },

  btn: {
    background: colors.darkYellow,
    marginTop: 20
  },

  link: {
    color: "black",
    textDecoration: "none",
    fontFamily: "Griffy",
    fontSize: 15
  },

  card: {
    display: 'flex',
    width: "30%"
  },

  cardBox: {
    display: 'flex',
    flexDirection: 'column' as "column"
  },

  statsDiv: {
    display: "flex",
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap"
  },

  particularsDiv: {
    flexDirection: "row" as "row",
    display: "flex",
    justifyContent: "space-between"
  },

  createEquipmentDiv: {
    justifyContent: "center",
    display: "flex"
  }
}

export default styles