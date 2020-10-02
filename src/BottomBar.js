import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        position: 'fixed',
        left: 0,
        bottom: 0,
        textAlign: 'center',
        width: '100%'
    },
});



export default function BottomBar({ screenConfig }) {

    const classes = useStyles();
    const value = useState(0);

    const handleChange = (event, newValue) => {
        value[1](newValue);

        screenConfig[1](newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={screenConfig[0]}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Globaly" />
                <Tab label="By Country" />
                <Tab label="Developer" />
            </Tabs>
        </Paper>
    );
}
