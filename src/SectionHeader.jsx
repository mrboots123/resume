import React from 'react';

const SectionHeader = ({ title }) => {

    return (
        <div className="d-flex pb-3">
            <h1 className="text-secondary">{ title}</h1>
            <span className="d-flex flex-column w-100 ps-3">
                <div className="h-50"/>
                <div className="h-50 border-top border-dark"/>
            </span>
        </div>
    );
};

export default SectionHeader;
