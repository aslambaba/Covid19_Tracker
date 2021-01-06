import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  main_heading: {
    textAlign: 'center',

  },
}));

export default function CountryStatics({ }) {

  const classes = useStyles();
  const [listcountries, Setlistcountries] = useState([]);
  const [country, Setcountry] = useState({});

  useEffect(() => {

    async function getcountryapi() {
      const countryapi = await fetch('https://api.covid19api.com/summary');
      const countryapijson = await countryapi.json();
      Setlistcountries(countryapijson.Countries);
    }
    getcountryapi();
  }, [])

  const Search = () => {
    var s = document.getElementsByName('Country')[0];
    var text = s.options[s.selectedIndex].text;
    let selet = listcountries.find(ele => ele.Country == text);
    delete selet.CountryCode;
    delete selet.Slug;
    delete selet.Premium;

    Setcountry(selet);
  };

  if (listcountries.length == 0) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  else if (listcountries.length != 0) {
    if (Object.keys(country).length == 0) {
      return (
        <div>
          <h1>By Country</h1>
          <select name='Country'>
            {
              listcountries.map((obj, ind) => {
                return <option key={ind} value={obj.Country}>{obj.Country}</option>
              })
            }
          </select>
          <button onClick={Search}>Search</button>
        </div>
      );
    }
    else if (Object.keys(country).length != 0) {
      return (
        <div>
          <div>
            <h1>By Country</h1>
            <select name='Country'>
              {
                listcountries.map((obj, ind) => {
                  return <option key={ind} value={obj.Country}>{obj.Country}</option>
                })
              }
            </select>
            <button onClick={Search}>Search</button>
          </div>
          <div className={classes.root}>
            <h1 className={classes.main_heading}>Gobally Statics of COVID-19</h1>
            <Grid container spacing={3}>
              {
                Object.keys(country).map((obj, ind) => {
                  console.log()
                  return (
                    <Grid item xs={4} key={ind}>
                      <Paper className={classes.paper}><div>
                        <h3>{obj}</h3>
                        <h4>{country[obj]}</h4>
                      </div></Paper>
                    </Grid>
                  )
                })
              }
            </Grid>
          </div>
        </div>
      )
    }
  }
}
