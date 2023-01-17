import React from "react";
import PropTypes from "prop-types";

const SimpleComonent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button className="btn btn-primary" onClick={onLogOut}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={onLogin}>
                    Войти
                </button>
            )}
        </>
    );
};

SimpleComonent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComonent;
