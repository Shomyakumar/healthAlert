import Template from "../components/Template";
import loginImg from '../assets/doc-group-1.png';

export default function Login({setIsLoggedIn}){
    return(
        <Template
            title="Welcome Back"
            desc1="Immediately get help."
            desc2="You can seek help with people around you."
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}

        />
    )
}