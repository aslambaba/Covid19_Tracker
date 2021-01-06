import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './style/global.css';

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
    if (Object.keys(global).length == 0) {
        return (
            <div className='loadingSection'>
                <h1>Loading....</h1>
            </div>
        )
    }
    else {
        return (
            <div className='root'>
                <h1 className='GlobalHeading'>Gobally Statics of COVID-19</h1>
                <Grid container spacing={3}>
                    {
                        Object.keys(global).map((obj, ind) => {
                            let conditionalcss;
                            if(obj == 'TotalDeaths'){
                                conditionalcss = 'totaldeath';
                            }
                            if(obj == 'TotalRecovered'){
                                conditionalcss = 'totalrecovered'
                            }
                            return (
                                <Grid item xs={4} key={ind}>
                                    <Paper>
                                        <div className={`paper ${conditionalcss}`}>
                                            <h3>{obj}</h3>
                                            <h4>{global[obj]}</h4>
                                        </div>
                                    </Paper>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </div>
        );
    }
}
