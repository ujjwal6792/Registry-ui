import React from 'react';
import {AppProvider} from '.';

const Providers = (props) => {
    return <AppProvider>{props.children}</AppProvider>;
};

export default Providers;