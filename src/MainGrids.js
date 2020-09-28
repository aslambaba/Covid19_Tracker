import React from 'react';
import GlobalStatics from './GlobalStatics';
import CountryStatics from './CountryStatics';
import Developer from './Developer';

export default function MainGrids({ currentScreen }) {

    console.log('check' + currentScreen);
    
    if (currentScreen === 0) {
        return (
            <GlobalStatics />
        );
    }
    else if (currentScreen === 1) {
        return (
            <CountryStatics />
        );
    }
    else if (currentScreen === 2) {
        return(
            <Developer />
        );
    }
}
