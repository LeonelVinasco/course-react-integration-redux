const selectSong = () => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export default selectSong;