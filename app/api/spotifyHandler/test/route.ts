import { NextResponse } from "next/server";

export async function GET(request : Request) {
    try {
        const accessToken = 'thisistheaccesstoken';

        return NextResponse.json({
            message : "GET test success",
            accessToken : accessToken
        })
    } catch (err) {
        return NextResponse.json({
            message : `Error on the get function of test : ${err}`
        })
    }
}