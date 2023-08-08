import { Navigate } from "react-router-dom"

const Protected = (props) => {
    console.log(props);
    if (!props.isSignedIn) {
        return <Navigate to="/" />
    }
    return props.children
}
export default Protected;