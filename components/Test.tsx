'use client';

import { randomBytes } from "crypto";

const Test = () => {

    const handleClick = () => {
        const rs = randomBytes(25).toString('hex');
        console.log(rs);
    }

    return (
        <button onClick={handleClick}> generate random bytes </button>
    )
};

export default Test;