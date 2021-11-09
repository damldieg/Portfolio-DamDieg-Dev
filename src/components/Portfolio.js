import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import project1 from '../images/adogtame.jpg';
import project2 from '../images/gournet.jpg';
import project3 from '../images/weather.jpg';
import project4 from '../images/podcast.jpg';
import project5 from '../images/lite.jpg';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
  },
}));

const projects = [
  {
    name: 'Adogtame',
    description: `Proyecto grupal final del bootcamp de Soy Henry. En el aplicamos React.js, Redux, Node.js, Express.js, Sequelize, PostgreSQL, Tailwind, Firebase. La aplicacion tiene como fin conectar a aquellas persona que quieren adoptar una mascota con aquellos que tienen mascotas para adoptar.`,
    image: project1,
    href: 'https://github.com/damldieg/Henry-PG-G11',
    href2: 'https://adogtame.vercel.app/',
  },

  {
    name: 'Gournet',
    description: `Aplicacion que consume la API de Spooncular. Cuenta con un backend que provee al frontend con una API que le permite buscar recetas, traer todas la recetas de la API y crear nuevas recetas. Se desarrollo con  React.js, Redux, Node.js, Express.js, Sequelize, PostgreSQL y CSS`,
    image: project2,
    href: 'https://github.com/damldieg/Gour.net',
  },
  {
    name: 'Wheather App',
    description: `Aplicacion que consume la API de Wheather. Se desarrolla por completo en el frontend. Permite buscar una ciudad en particular y ver su clima en el momento actual. Tambien se puede acceder a un detalle de la misma donde se muestra mas informacion. Se desarrollo con  React.js, Redux, Fetch y CSS`,
    image: project3,
    href: 'https://github.com/damldieg/The-Weather-App',
    href2: 'https://the-weather-app-pi.vercel.app/',
  },
  {
    name: 'Lite Crush',
    description: `Version lite del famoso juego de los caramelos. Desarrollada principalmente con React.js. La idea principal fue entender la logica detras del juego y poder aplicarlas de forma exitosa. Se iran implementando nuevas funcionalidades proximamente`,
    image: project5,
    href: 'https://github.com/damldieg/Lite-Crush',
    href2: 'https://lite-crush.vercel.app/',
  },
  {
    name: 'Podcast Channel',
    description: `Aplicacion hecha solo con HTML y Css a modo de practica. La misma tiene como finalidad mostrar diferentes episodios de podcast consumiendo la API de Spotify. Se desarrollo con la finalidad de consolidar los conocimientos aprendidos anteriormente`,
    image: project4,
    href: 'https://github.com/damldieg/damldieg.github.io',
    href2: 'https://damldieg.github.io/',
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mainContainer}>
      <Grid container justify='center'>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 1'
                  height='140'
                  image={project.image}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  href={project.href}
                  target='_blank'
                  rel='noreferrence'
                  underline='hover'>
                  {'Github Repo'}
                </Link>
                {project.href2 && (
                  <Link
                    href={project.href2}
                    target='_blank'
                    rel='noreferrence'
                    underline='hover'>
                    {'Demo'}
                  </Link>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
