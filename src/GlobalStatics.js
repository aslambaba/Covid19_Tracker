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
            const globalapi = await fetch('https://api.covid19api.com/summary');
            const globalapijson = await globalapi.json();
            console.log(globalapijson.Global);
            setGlobal(globalapijson.Global);
        }
        getglobal();
    }, [])
    console.log(global)
    const classes = useStyles();
    if (Object.keys(global).length == 0) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }
    else {
        return (
            <div className={classes.root}>
                <h1 className={classes.main_heading}>Gobally Statics of COVID-19</h1>
                <Grid container spacing={3}>
                    {
                        Object.keys(global).map((obj, ind) => {
                            return (
                                <Grid item xs={4} key={ind}>
                                    <Paper className={classes.paper}><div>
                                        <h3>{obj.replace(/_/g, ' ').toUpperCase()}</h3>
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
}
