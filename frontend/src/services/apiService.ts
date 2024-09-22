import axios from 'axios';

export const fetchTranslatedText = async () => {
    const response = await axios.get('/get_text');
    return response.data;
};

export const resetText = async () => {
    await axios.post('/reset_text');
};

export const setStableTime = async (stableTime: number) => {
    await axios.post('/set_stable_time', `stable_time=${stableTime}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
};
