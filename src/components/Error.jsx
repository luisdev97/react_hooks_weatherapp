import React from 'react';

const Error = ({ messagge }) => {
    return (
        <div className="card-panel red darken-4 error col s12">
            { messagge }
        </div>
    );
};

export default Error;