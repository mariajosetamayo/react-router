import React from 'react';
import {Link} from 'react-router';

// this component displays a single contact

export default function Contact(props) {
    return (
        <div>
            <strong>
                <Link to={'/contacts/' + props.id}>
                    {props.name}
                </Link>
            </strong>
            &nbsp;
            {props.phoneNumber}
        </div>
    );
};
