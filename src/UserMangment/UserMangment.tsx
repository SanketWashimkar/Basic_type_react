import styless from './UserMangment.module.scss';

const UserMangment:React.FC<{
isLogin:boolean

}> = ({isLogin}) => {

    const classValue = isLogin? 'main-container' : 'mainContainerLogout';


return (
 <div className={styless[classValue]}>
<p> UserMangment</p>
 </div>

)



}

export default UserMangment;