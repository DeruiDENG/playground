import * as React from "react";
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/message">Message</Link>
            </li>
        </ul>
    )
};


export default Catalog;