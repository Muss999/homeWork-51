import "./Ball.css";

interface Props {
    number: number;
}

const Ball = (props: Props) => {
    return (
        <div className="ball">
            <p>{props.number}</p>
        </div>
    );
};

export default Ball;
