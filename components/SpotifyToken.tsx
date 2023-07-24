// 'use client'

// import { useSpotifyTokenContext } from "@/providers/SpotifyTokenProvider";

// interface SpotifyTokenProps {
//     children : React.ReactNode
//     authenticated : boolean;
// };

// const SpotifyToken : React.FC<SpotifyTokenProps> = ({
//     children,
//     authenticated
// }) => {
//     const { spotifyToken, updateSpotifyToken } = useSpotifyTokenContext();

//     if (spotifyToken === '' && authenticated) {
//         getSpotifyToken()
//             .then((accessToken) => {
//                 console.log('Access token : ', accessToken)
//                 updateSpotifyToken(accessToken)
//             })
//             .catch((err) => {
//                 console.error('Error fetching spotify token', err)
//             }) 
//     }

//     return (
//         <>
//             {children}
//         </>
//     )
// };

// async function getSpotifyToken() {
//     try {
//         const response = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       Authorization: `Basic ${Buffer.from(
//         `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
//       ).toString("base64")}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams({
//       grant_type: "client_credentials",
//     }),
//   });
        
//         if (!response.ok) {
//             throw new Error('failed to fetch spotify token')
//         }

//         const data = await response.json();
//         const accessToken = data.access_token;
//         return accessToken;

//     } catch (err) {
//         throw err;
//     }
// }

// export default SpotifyToken;