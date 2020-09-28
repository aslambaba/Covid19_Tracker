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

export default function GlobalStatic() {

    const [global, setGlobal] = useState({});
    useEffect(() => {
        async function getglobal() {
            const globalapi = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const globalapijson = await globalapi.json();

            const globaldata = globalapijson.results[0];
            delete globaldata.source;
            setGlobal(globaldata);
        }
        getglobal();
    })

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.main_heading}>Gobally Statics of COVID-19</h1>
            <Grid container spacing={3}>
                {
                    Object.keys(global).map((obj, ind) => {
                        return (
                            <Grid item xs={4} key={ind}>
                                <Paper className={classes.paper}><div>
                                    <h3>{obj.replace(/_/g,' ').toUpperCase()}</h3>
                                    <h4>{global[obj]}</h4>
                                </div></Paper>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}
