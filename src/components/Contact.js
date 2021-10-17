import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import { helpHttp } from '../services/helpHttp';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: '#233',
    height: '100vh',
  },
  heading: {
    color: 'tomato',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  input: {
    color: '#fff',
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tan',
  },
  field: {
    margin: '1rem 0rem',
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        color: '#fff',
        borderColor: 'tan',
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ name: '', email: '', content: '' });

  const handleOnChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    helpHttp()
      .post('https://formsubmit.co/ajax/damian.diego.2510@gmail.com', {
        body: form,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((res) => {
        setForm({ name: '', email: '', content: '' });
        alert('Mensaje enviado!!!');
      });
  };

  return (
    <Box component='div' className={classes.contactContainer}>
      <Grid container justify='center'>
        <Box component='form' className={classes.form}>
          <Typography variant='h5' className={classes.heading}>
            Contactame...
          </Typography>
          <InputField
            fullWidth={true}
            label='Nombre'
            variant='outlined'
            inputProps={{ className: classes.input }}
            onChange={handleOnChange}
            value={form.name}
            name='name'
          />
          <InputField
            fullWidth={true}
            label='Email'
            variant='outlined'
            inputProps={{ className: classes.input }}
            className={classes.field}
            onChange={handleOnChange}
            value={form.email}
            name='email'
          />
          <InputField
            fullWidth={true}
            label='Mensaje'
            variant='outlined'
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            onChange={handleOnChange}
            value={form.content}
            name='content'
          />
          <Button
            variant='outlined'
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            onClick={handleSubmit}>
            Enviar
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
