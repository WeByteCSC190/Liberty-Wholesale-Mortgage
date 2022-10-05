import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';

const layout = ({children}) => (
    <Fragment  >
        <Navbar>
            {children}
        </Navbar>
    </Fragment>
);

export default layout;
