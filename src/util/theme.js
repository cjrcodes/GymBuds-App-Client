export default {
  palette: {
    primary: {
      light: "#ffac33",
      main: "#ff9800",
      dark: "#b26a00",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffef62",
      main: "#ffeb3b",
      dark: "#b2a429",
      contrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true,
  },

  formStyle: {
    form: {
      textAlign: "center",
    },

    image: {
      margin: "20px auto 20px auto",
    },

    pageTitle: {
      margin: "20px auto 20px auto",
    },

    textField: {
      margin: "20px auto 20px auto",
    },

    button: {
      marginTop: 20,
      position: "relative",
    },

    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10,
    },

    progress: {
      position: "absolute",
    },
  },

  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%",
      },
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle",
      },
      "& a": {
        color: "#00bcd4",
      },
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0",
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },

  editDetails: {
    button: {
      float: "right",
    },
  },

  postBudcall: {
    submitButton: {
      position: "relative",
      float: "right",
      marginTop: 10,
    },
    progressSpinner: {
      position: "absolute",
    },

    closeButton: {
      position: "absolute",
      left: "91%",
      top: "6%",
    },
  },

  deleteBudcall: {
    deleteButton: {
      position: "absolute",
      left: "90%",
      top: "10%",
    },
  },

  budcallDialog: {
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20,
    },

    invisibleSeparator: {
      border: "none",
      margin: 4,
    },
    profileImage: {
      maxWidth: 200,
      height: 200,
      borderRadius: "50%",
      objectFit: "cover",
    },

    dialogContent: {
      padding: 20,
    },

    closeButton: {
      position: "absolute",
      left: "90%",
    },

    expandButton: {
      position: "absolute",
      left: "90%",
    },

    spinnerDiv: {
      textAlign: "center",
      marginTop: 40,
      marginBottom: 50,
    },

    commentImage: {
      maxWidth: "100%",
      height: 100,
      objectFit: "cover",
      borderRadius: "50%",
    },

    commentData: {
      marginLeft: 20,
    },

    button: {
      position: "relative",
      margin: 10,
      left: "40%",
    },
  },

  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px",
    },
  },

  skeleton: {
    card: {
      display: "flex",
      marginBottom: 20,
    },

    cardContent: {
      width: "100%",
      flexDirection: "column",
      padding: 25,
    },

    cover: {
      minWidth: 200,
      objectFit: "cover",
    },

    handle: {
      width: 60,
      height: 18,
      backgroundColor: "#ff9800",
      marginBottom: 7,
    },

    date: {
      height: 14,
      width: 100,
      backgroundColor: "rgba(0,0,0, 0.3)",
      marginBottom: 10,
    },

    fullLine: {
      height: 15,
      width: "90%",
      backgroundColor: "rgba(0,0,0,0.6)",
      marginBottom: 10,
    },
    halfLine: {
      height: 15,
      width: "50%",
      backgroundColor: "rgba(0,0,0,0.6)",
      marginBottom: 10,
    },
  },

  profileSkeleton: {
    handle: {
      height: 20,
      backgroundColor: "#ff9800",
      width: 60,
      margin: "0 auto 7px auto",
    },

    fullLine: {
      height: 15,
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      marginBottom: 10,
    },
    halfLine: {
      height: 15,
      width: "50%",
      backgroundColor: "rgba(0,0,0,0.6)",
      marginBottom: 10,
    },
  },
};
