import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request,
    { params } : { params : { expired : string } }
) {
    try {
        const expired = params.expired;
        if (expired === "false") {
            const accessToken = cookies().get('spotifyAccessToken');
            if (accessToken) {
                return NextResponse.json({
                    message : "spotify token is already set.",
                    accessToken : accessToken.value
                })
            } 
        }

        const response = await fetch (`https://accounts.spotify.com/api/token`, {
            method : "POST",
            headers : {
                Authorization : `Basic ${Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString('base64')}`,
                'Content-Type' : "application/x-www-form-urlencoded"
            },
            body : new URLSearchParams({
                grant_type : 'client_credentials'
            })
        });

        if (!response.ok) {
            return NextResponse.json({
                message : "failed to fetch spotify token from the api"
            }, { status : response.status })
        }

        const data = await response.json();
        const newAccessToken = data.access_token;

        if (newAccessToken) {
            cookies().set({
                name : 'spotifyAccessToken',
                value : newAccessToken,
                path : '/'
            });

            return NextResponse.json({
                message : "Spotify access token successfully fetched and set.",
                accessToken : newAccessToken
            })
        }

        return NextResponse.json({
            message : "error occured",
            accessToken : newAccessToken
        })
    } catch (err) {
        return NextResponse.json({
            message : `Error on get function of fetch token : ${err}`
        })
    }
    // try {
    //     const expired = params.expired;

    //     // if (expired === 'yes') {
    //     //     const accessToken = cookies().get('spotifyAccessToken');
    //     //     if (accessToken) {
    //     //         return NextResponse.json({
    //     //             message: "Spotify token is already set.",
    //     //             accessToken: accessToken.value
    //     //         });
    //     //     }
    //     // }

    //     const response = await fetch('https://accounts.spotify.com/api/token', {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Basic ${Buffer.from(
    //                 `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    //             ).toString('base64')}`,
    //             'Content-Type': "application/x-www-form-urlencoded"
    //         },
    //         body: new URLSearchParams({
    //             grant_type: 'client_credentials'
    //         })
    //     });

    //     if (!response.ok) {
    //         return NextResponse.json({
    //             message: "Failed to fetch spotify token from the API"
    //         }, { status: response.status });
    //     }

    //     const data = await response.json();
    //     const newAccessToken = data.access_token;

    //     if (newAccessToken) {
    //         cookies().set({
    //             name: 'spotifyAccessToken',
    //             value: newAccessToken,
    //             path: '/',
    //         });

    //         // if success return this
    //         return NextResponse.json({
    //             message: "Spotify token successfully fetched and set.",
    //             accessToken: newAccessToken,
    //         });
    //     }
    //     return NextResponse.json({
    //         message : "Failed to fetch access token from Spotify API."
    //     })
    // } catch (err) {
    //     return NextResponse.json({
    //         message : `Error on getting the spotify token : ${err}`
    //     })
    // }
}
