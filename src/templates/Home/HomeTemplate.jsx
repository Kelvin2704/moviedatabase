import { Route } from "react-router-dom";
import Header from "../../pages/Home/Header";

const HomeTemplates = (props) => {
const {Component,...restProps} = props;
return (
  <Route {...restProps} render={(propsRoute)=>(
    <>
    <Header {...propsRoute}/>
    <Component {...propsRoute}/>
    </>
  )} />
)
}
export default HomeTemplates