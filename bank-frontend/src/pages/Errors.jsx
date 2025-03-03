import React from 'react';
import {Link} from "react-router";

const Errors = () => {
    return (
        <div>
            <p>404- Not Found</p>
            <Link to="/">Retour</Link>
        </div>
    );
};

export default Errors;