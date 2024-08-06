'use strict';

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function searchImagesByQuery({ q, page, per_page }) {
    const API_KEY = '45152929-a1340ee97784cf10d0ad70de4';
    const params = new URLSearchParams({
        key: API_KEY,
        q: q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page,
    });

    try {
        return await axios
            .get('', { params })
            .then(({ data }) => data)
            .catch(err => console.log(err));
    } catch (err) {
        console.error(err);
    }
}