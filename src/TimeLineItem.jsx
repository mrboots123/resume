import React from 'react';
import Card from "./Card";

const TimeLineItem = ({ job, final }) => {
    const { logo } = job;
    return (
        <div className="d-flex pt-3">
            <div className="d-flex flex-column pe-4">
                <div className="d-flex">
                    <img
                        className="rounded-circle border bg-white"
                        src={logo}
                        height={80}
                        width={80}
                    />
                </div>
                {
                    !final &&
                    <div className="d-flex h-100 pt-2">
                        <div className="h-100 w-50"/>
                        <div className="h-100 w-50 border-start border-dark"/>
                    </div>
                }
            </div>
            <Card content={job}/>
        </div>
    );
};

export default TimeLineItem;
