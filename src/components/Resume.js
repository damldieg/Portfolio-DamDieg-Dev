import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Sobre mi
      </Typography>
      <Box component="div" className={classes.timeLine}>
       {/*  <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography> */}
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Quien soy
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Damian Diego - Fullstack Developer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Soy una persona curiosa y que esta en constante aprendizaje. Me gusta investigar sobre las nuevas tendencias en tecnologia y aplicarlas a proyectos. Valoro mucho el trabajo en grupo y me gusta aprender de mis compañeros. Considero que la programacion es una de las herramientas mas potentes para ayudar a aquellos que mas lo necesitan y poder conectar a todos a esta nueva era de la globalizacion. En mis tiempos libres disfruto de ver futbol, formula 1, viajar y jugar videojuegos. 
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Mis habilidades
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            En que me destaco
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           Adaptabilidad, responsabilidad, escucha activa, trabajo en grupo y ambicion son algunas de mis habilidades mas fuertes a la hora del trabajo y la vida cotidiana.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Mis herramientas
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Lenguajes de programacion 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Javascript, React.js, Redux, Html, Css, Tailwind son las herramientas que utilizo para la parte de Frontend.
            Node.js, Express.js, Sequelize, PostgreSQL para la parte de Backend. 
            Git, Github y Visual Studio para la parte de desarrollo y control de versiones. 
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Mis estudios
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Educacion
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Recientemente termine el bootcamp de programacion Web Fullstack en Soy Henry. En el desarrolle mis habilidades como programador y las aplique a diferentes proyectos que pueden ver en el apartado de Proyectos.
            Ademas estudie 4 años la carrera de Derecho en la Universidad de Buenos Aires hasta que descubri mi amor por la programacion.
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experiencia
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Ayudante de enseñanza Fullstack
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Soy Henry
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Mis tareas eran: acompañar a los nuevos alumnos en las etapas tempranas del curso. Resolver dudas y orientarlos en cuanto al contenido. Consolidar el grupo de estudio e integrar a todos al mismo. Proponer nuevas ideas y actividades para realizar con los alumnos. Hacer un seguimiento de la progrecion del grupo respecto del bootcamp.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Analista de Intermediacion Laboral
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Ministerio de Desarrollo Social de la Ciudad de Buenos Aires
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Desarrollo de un documento funcional para la aplicacion de un nuevo CRM orientado a la gestion publica. Seguimiento, testeo y administracion del CRM. Analisis de datos y confeccion de informes para la toma de decisiones acerca del abordaje territorial y politicas publicas. 
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Agente de presupuestos y compras
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Ministerio de Desarrollo Social de La Nacion - Argentina
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Busqueda y consolidacion de proveedores para el sector publico. Armado de compulsas de precios y evaluacion de cada oferta. Logista de envio y compras. Confeccion de informes y analisis de datos de cada compulsa mensual y anual. 
          </Typography>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Resume;
