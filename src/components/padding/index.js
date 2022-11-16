export default function Padding(props) {
    let size = 6;

    if (props.size === "huge") {
        size = 68;
    }

    if (props.size === "big") {
        size = 32;
    }
    if(props.size === "input"){
        size = 18;
    }
    if(props.size === "13"){
        size = 13;
    }

    return <div style={{height: `${size}px`}}></div>
}