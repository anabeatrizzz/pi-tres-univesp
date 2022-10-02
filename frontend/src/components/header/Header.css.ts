import colors from "../colors";

const styles = {
  header: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    background: colors.yellow
  },

  nav: {
    display: 'block',
    justifyContent: 'center',
    alignContent: 'center',
  },

  navDiv: {
    marginLeft: "auto"
  },

  navLink: {
    textDecoration: 'none',
    color: 'black',
    marginTop: 0,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: "center",
    fontFamily: "Griffy",
    fontSize: 25,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },

  navLinkActive: {
    color: 'white',
    background: colors.red
  },

  ul: {
    display: 'flex',
    listStyle: 'none',
    //justifyContent: "center",
    alignItems: "center",
  },

  characterBackgroundDiv: {
    justifyContent: "flex-end",
    display: "flex"
  },

  characterBackgroundImg: {
    width: "40%",
    zIndex: 1,
    position: "fixed" as "fixed",
    top: 0
  }
}

export default styles;