import { orange } from "@material-ui/core/colors";
import { lightBlue } from "@material-ui/core/colors";

const theme = {
  palette: {
    primary: orange,
    secondary: lightBlue,
  },
  typography: {
    useNextVariants: true,
  },

  formStyle: {
    appTitle: {
      fontFamily: "Recursive",
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      '&::-webkit-background-clip': 'text',
      '&:: -webkit-text-fill-color': 'transparent',

     
     
     
      
      filter: "drop-shadow(2px 3px #333)",
     
    },

    form: {
      textAlign: "center",
    },

    imageLogo: {
      margin: "20px auto 20px auto",
    },

    image: {
      margin: "20px auto 20px auto",
    },

    pageTitle: {
      margin: "20px auto 20px auto",
      fontFamily: "Josefin Sans",
      color: "#eee",
    },

    textField: {
      margin: "20px auto 20px auto",
      textAlign: "center",
      fontFamily: "Heebo",
    },

    button: {
      marginTop: 20,
      position: "relative",
      fontFamily: "Josefin Sans",
      color: "white",
    },

    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10,
    },

    progress: {
      position: "absolute",
    },

    medium: {
      fontFamily: "Heebo",
    },
  },

  profileCard: {
    paper: {
      color: "white",

      background:
        "-webkit-linear-gradient(90deg, rgb(0, 106, 228) 0%, rgb(34, 193, 195) 100%)",
      padding: 10,
      marginLeft: 20,
      marginRight: 20,
    },
    profile: {
      color: "white",
      fontFamily: "Heebo",
      background:
        "-webkit-linear-gradient(90deg, rgb(0, 80, 150) 30%, rgb(189, 90, 0) 100%)",
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
          color: "#ff9800",
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

      buttons: {
        textAlign: "center",
        "& a": {
          color: "white",
          fontFamily: "Josefin Sans",

          margin: "20px 10px",
        },
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
      justifyContent: "center",
      marginTop: 10,
    },
    progressSpinner: {
      position: "absolute",
    },

    closeButton: {
      position: "absolute",
      left: "90%",
      top: "3%",
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
      fontFamily: "Heebo",
    },
  },

  buttons: {
    textAlign: "center",

    "& a": {
      margin: "20px 10px",
    },
  },

  budcall: {
    card: {
      position: "relative",
      display: "flex",
      marginBottom: 20,
      background:
        "-webkit-linear-gradient(45deg, rgba(0, 106, 228, 1) 80%, rgba(189, 123, 0, 0) 100%)",
    },

    image: {
      minWidth: 200,
    },
    content: {
      color: "white",

      padding: 25,
      objectFit: "cover",
    },
  },

  skeleton: {
    card: {
      display: "flex",
      marginBottom: 20,
      background:
        "-webkit-linear-gradient(90deg, rgb(0, 106, 228) 0%, rgb(189, 123, 0) 100%)",
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

export default theme;