import React from "react";
import './BaseComponent.scss';
const BaseComponent:React.FC<
{
  title:string,
  name:string

}> = (props) =>{

const {title , name } = props;
return (

    <div className="title">
<h1> Welcome BaseComponent</h1>
 <p>{title }</p>
 {name}
    </div>
)


};

export default BaseComponent;