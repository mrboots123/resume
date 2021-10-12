import React, {useState} from 'react';
import * as Fa from "react-icons/si";
import { IoArrowForwardOutline }  from 'react-icons/io5'


const Icon = props => {
    const { iconName, size, color } = props;
    console.log(iconName)
    const icon = React.createElement(Fa[iconName]);
    return (
        <div style={{ fontSize: size, color: color }}>{icon}</div>
    );
};

function splitToChunks(array, parts) {
    const copyArray = array.slice();
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(copyArray.splice(0, Math.ceil(copyArray.length / i)));
    }
    return result;
}

const Card = ({ content }) => {
    const [isFlipped, setFlipped] = useState(false);
    const { company, role, technologies, tenure, description } = content
    const parts = (technologies.length / 4);

    return (
        <div className="d-flex flex-column w-100 border rounded bg-light shadow py-3 px-4 card">
            {
                isFlipped ?
                    <p className="vertical-spread flex-wrap body-2 text-secondary">{ description }</p>:
                    <React.Fragment>
                        <div className="d-flex align-items-center">
                            <h2 className="text-primary fw-bold">{ company }</h2>
                            <div className="ms-auto text-dark">{ tenure }</div>
                        </div>
                        <div className="d-flex text-secondary">
                            { role }
                        </div>
                        <div className="d-flex pt-3">
                            {
                                splitToChunks(technologies, parts).map( (elements, index) =>
                                    <div className="pe-5">
                                        <div className="d-flex flex-column">
                                            {
                                                elements.map(element => {
                                                        const { logo, technology } = element;
                                                        return <div className="d-flex align-items-center">
                                                            {
                                                                logo.length > 0 &&
                                                                <Icon iconName={logo} size={25}/>
                                                            }
                                                            <div className="ps-2 ">{ technology }</div>
                                                        </div>
                                                    }
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </React.Fragment>
            }
            <div className="d-flex flex-grow-1 ms-auto align-items-end">
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setFlipped(!isFlipped)}
                >
                    <IoArrowForwardOutline size={'1.25em'} color={'white'}/>
                </button>
            </div>

        </div>
    )
}

export default Card;
