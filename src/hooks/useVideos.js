import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyCW6HWPQWxvqHsVKzzONIpZjHmBHuGhlps';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            // params contains query string parameters that we want added onto the request
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY
            }
        });
        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;