import css from './Header.module.css'
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks";

const Header = () => {

    const {currentUser} = useAppSelector(state => state.auth);

    return (
        <div className={css.Header}>
            <div>
                <h1>Cars</h1>
            </div>
            {
                currentUser?
                    <div>{currentUser.username} --{currentUser.last_login}</div>
                    :
                    <div className={css.tools}>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
            }
        </div>
    );
};

export {Header};