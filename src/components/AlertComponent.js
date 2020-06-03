import React from 'react'
// import { Alert } from 'reactstrap';

const Alert = ({ alert }) => {
    return (
        <div>
            <div class="alert alert-danger" role="alert">
                {alert}
            </div>
        </div>
    )
};
export default Alert;