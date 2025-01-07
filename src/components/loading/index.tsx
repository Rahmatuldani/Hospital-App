import { PulseLoader } from "react-spinners";

function LoadingComponent() {
    return (
        <div className="d-flex justify-content-center">
            <PulseLoader color="#808080" className="m-auto"/>
        </div>
    );
}

export default LoadingComponent;