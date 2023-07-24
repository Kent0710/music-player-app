import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request : Request,
    { params } : { params : { searchQuery : string } }    
) {
    try {
        const searchResults = await searchForTracks(params.searchQuery);
        const searchResultsData = await searchResults.json();
        // success
        if (searchResultsData.status === 200) {
            return NextResponse.json({
                message : 'success',
                searchResultsData : searchResultsData,
                tracks : searchResultsData.response.tracks
            })
        } else if (searchResultsData.status === 401) /*expired token*/ {
            const newSpotifyAccessTokenReq = await fetchNewSpotifyAccessToken();
            const newSpotifyAccessTokenData = await newSpotifyAccessTokenReq.json();

            if (newSpotifyAccessTokenData.ok) {
                // new token fetched
                // search again
                const trySearchResults = await searchForTracks(params.searchQuery);
                const trySearchResultsData = await trySearchResults.json();

                if (trySearchResultsData.status === 200) {
                    return NextResponse.json({
                        message : "success on try",
                        trySearchResultsData : trySearchResultsData,
                        tracks : trySearchResultsData.response.tracks
                    })
                } else {
                    return NextResponse.json({
                        message : "status 401 or 500 occured on try search result",
                        trySearchResultsData : trySearchResultsData,
                        tracks : undefined
                    })
                }
            } else {
                return NextResponse.json({
                    message : "failed to fetch new spotify access token on 401",
                    searchResultsData : undefined,
                    tracks : undefined
                })
            }
        } else /* if 500, unhandled error occured*/ {
            return NextResponse.json({
                message : "unhandled error 500 occured",
                searchResultsData : undefined,
                tracks : undefined
            })
        };
    } catch (err) {
        return NextResponse.json({
            message  :`Search for tracks get function failed : ${err}`
        })
    }
};

async function searchForTracks(searchQuery : string, e? : React.SyntheticEvent) {
    e?.preventDefault();
    try {
        const spotifyAccessToken = cookies().get('spotifyAccessToken')?.value;

        const sqf = {
            q : searchQuery,
            type : 'track',
            market : "PH",
            limit : 10,
            offset : 0
        };

        const response = await fetch (`https://api.spotify.com/v1/search?q=${encodeURIComponent(sqf.q)}&type=${sqf.type}&market=${sqf.market}&limit=${sqf.limit}&offset=${sqf.offset}`, {
            method : "GET",
            headers : {
                'Authorization' : `Bearer ${spotifyAccessToken}`
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                return NextResponse.json({
                    message : "Access token expired",
                    response : null,
                    status : 401
                })
            } else {
                return NextResponse.json({
                    message : "Error occured  on API search",
                    response : null,
                    status : 500,
                })
            }
        }

        const data = await response.json();
        return NextResponse.json({
            message : 'Search successful',
            response : data,
            status : 200
        })

    } catch (err) {
        throw new Error (`Error occured on search tracks function : ${err}`)
    }
}

async function fetchNewSpotifyAccessToken(e? : React.SyntheticEvent) {
    e?.preventDefault();
    try {
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
                message : "can't fetch new token",
                ok : false,
            })
        }

        const responseData = await response.json();
        const newSpotifyAccessToken = responseData.access_token;

        cookies().set({
            name : 'spotifyAccessToken',
            value : newSpotifyAccessToken,
            path : '/'
        })

        return NextResponse.json({
            newSpotifyAccessToken : newSpotifyAccessToken,
            ok : true
        });
    } catch (err) {
        throw new Error (`Error occured on fetch new spotify token function : ${err}`)
    }
}