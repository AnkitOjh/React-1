import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>
                Error Occured.
                {
                    err.data
                }
            </h1>
        </div>
    );
}

export default Error;