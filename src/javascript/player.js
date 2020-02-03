document.addEventListener("DOMContentLoaded", () => {

    let Base64 = "basic ZjFlYmQ5YmRjMTVlNDhlMGIxYmNmZjhiNmY0NmNjZjA6ZTFmZjNkNDhjMDRiNGIzNGFjYzZkMmYyMGQxYmNjMDY=";
    let scope = "user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing streaming"

    fetch('https://accounts.spotify.com/api/token', {
        method: 'post',
        body: `grant_type=client_credentials&scope=${scope}`,
        headers: {
            'Authorization': Base64,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(res => res.json())
    .then(json => {

        console.log(json)

        let accessToken = "Bearer "+ json.access_token;

        fetch('https://api.spotify.com/v1/me/player', {
            method: 'get',
            headers: {
                'Authorization': accessToken,
            }
        })
        .then(res => res.json())
        .then(tracks => { 

            console.log(tracks)

            let accessToken = "Bearer "+ json.access_token;

            fetch('https://api.spotify.com/v1/me/player/play', {
                method: 'put',
                body: {
                    "uris": [
                        "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
                        "spotify:track:1301WleyT98MSxVHPZCA6M"
                    ],
                    "offset": {"position": 5},
                    "position_ms": 0
                },
                headers: {
                    'Authorization': accessToken,
                }
            })
            .then(res => res.json())
            .then(tracks => {
                console.log(tracks)
            });
        });
    });
});
