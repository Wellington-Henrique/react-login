import React, { useContext } from "react";
import { Route, Redirect} from "react-router-dom";
import StoreContext from "components/Store/Context";

const RoutsPrivate = ({ component: Component, ...rest}) => {
    const { token } = useContext(StoreContext);
    console.log(token)
    return (
        <Route
            { ...rest }
            
            render={() => token
                ? <Component { ...rest }/> 
                : <Redirect  to="/login"/>
            }
        />
    )
}

export default RoutsPrivate;
