import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState(false);
    useEffect(() => {
        prevState.current = otherState.toString();
    }, [otherState]);

    const toggleOtherState = () => {
        setOtherState(!otherState);
    };

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее задание</SmallTitle>
            <Divider />
            <p>prev state: {prevState.current}</p>
            <p>currnet state: {otherState.toString()}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                toggleOtherState
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
