import Template from "../components/Template";

import signupImg from "../assets/health-care-img.png"
export default function signup({setIsLoggedIn}){
    return(
        <Template
        title="Join us on this journey"
        desc1="You can help others."
        desc2="Or you can seek help with others."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}