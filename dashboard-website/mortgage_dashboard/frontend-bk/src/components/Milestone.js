import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  body: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0EFA2'
  },
  ol: {
    display: 'flex',
    listStyle: 'none',
    textAlign: 'center',
    counterReset: 'milestones',
    width: '100%',
    margin: 0,
    padding: 0,

    li: {
      flexGrow: 1,
      flexBasis: 0,
      margin: 0,
      position: 'relative',
      zIndex: 1,
      fontSize: '.75em',
      lineHeight: '1.25em',
      color: "#ffefee"
    },

    a: {
      display: 'block',
      textDecoration: 'none',
      '&::before': {
        display: 'block',
        fontSize: '.75em',
        boxSizing: 'border-box',
        borderRadius: '50%',
        textDecoration: 'none',
        content: 'counter(milestones)',
        counterIncrement: 'milestones',
        width: '4em',
        height: '5em',
        lineHeight: '4em',
        margin: '0 auto .5em',
      },
      '&::after': {
        display: 'block',
        fontSize: '.75em',
        boxSizing: 'border-box',
        content: "",
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: 0,
        border: 0,
        left: '50%',
        top: '2em',
        borderBottomWidth: '5em',
        marginTop: '-2em',
      }
    },
  },


});

const conditional = () => {
  fetch('http://localhost/api/user?token='
    + document.getElementByID('auth_token')
    + '?username=' + document.getElementByID('user_name'))
    ;

}

const Milestone = () => {
  const [state] = useState([]);
  useEffect(() => {
    fetch('http://localhost/api/user?token='
      + document.getElementByID('auth_token')
      + '?username=' + document.getElementByID('user_name'))
      .then(response => response.json())
      .then(data => {
        setstate(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ol>
          <li>
            <a href="#">Goal 1</a></li>

          <li>
            <a href="#">Goal 2</a></li>

          <li>
            <a href="#">Goal 3</a></li>

          <li>
            <a href="#">Goal 4</a></li>

          <li>
            <a href="#">Goal 5</a></li>

        </ol>
      </Container>
    </ThemeProvider>
  );

}
export default function Milestones() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ol>
          <li>
            <a href="#">Goal 1</a></li>

          <li>
            <a href="#">Goal 2</a></li>

          <li>
            <a href="#">Goal 3</a></li>

          <li>
            <a href="#">Goal 4</a></li>

          <li>
            <a href="#">Goal 5</a></li>

        </ol>
      </Container>
    </ThemeProvider>
  )
}


