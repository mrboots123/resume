import React from 'react';
import asu from "./assets/Arizona_State_University_logo.svg";
import SectionHeader from "./SectionHeader";

const Education = () => {
    return (
        <React.Fragment>
            <SectionHeader title={'Education'}/>
            <div className="d-flex pb-5">
                <div>
                    <img src={asu} height={30} width={180}/>
                </div>
                <div className="d-flex flex-column w-100">
                    <div className="d-flex w-100">
                        <h4 className="text-danger fw-bold"> Arizona State University</h4>
                        <div className="ms-auto text-dark">May 2012 - May 2016</div>
                    </div>
                    <div className="text-secondary">Computer Science</div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default Education;
