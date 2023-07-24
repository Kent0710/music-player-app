import { NextResponse } from "next/server";

export async function GET(request : Request,
    { params } : { params : { expired : string } }    
) {
    try {
        const accessToken = 'thisistheaccesstoken';
        if (params.expired === 'authorized') {
    
            return NextResponse.json({
                message : "GET test success on expired on auth",
                accessToken : accessToken
            })
        }
        return NextResponse.json({
            message : "GET test success on expired on not auth",
            accessToken : accessToken
        })
    } catch (err) {
        return NextResponse.json({
            message : `Error on the get function of test on expired : ${err}`
        })
    }
}