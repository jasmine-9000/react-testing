import {NavLink, Link} from "react-router-dom";

function Reference(props) {
    
    let result = "<p className = \"p5\">";




    return (
        <p className="p5">
            <a href={props.hyperlink}>{props.name}</a>
        </p>
    );

}

export default Reference;