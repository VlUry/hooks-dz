import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const WOCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChacnge = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const validateWOCallback = (data) => {
        console.log(data);
    };
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        validateWOCallback(data);
        validateWithCallback(data);
    }, [data]);

    useEffect(() => {
        WOCallback.current++;
    }, [validateWOCallback]);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render WOCallback: {WOCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChacnge}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
