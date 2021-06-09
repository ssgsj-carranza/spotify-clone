export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId= '5631d2c9649f4199bdcfbc963bb89b14';
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;