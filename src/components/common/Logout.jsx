import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clearUser } from "../../redux/action/userAction";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        dispatch(clearUser());
        navigate("/");
    },[])
}

export default Logout;