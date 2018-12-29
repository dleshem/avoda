import axios from 'axios';

const normalizeId = id => id.padStart(9, '0');

export default class AvodaClient {
	constructor({baseUrl = 'https://www.haavoda.com/Registration/', timeout = 0} = {}) {
        this._client = axios.create({
            baseURL: baseUrl,
            timeout
        });
    }

    async getAccountDetails({id}) {
        try {
			const response = await this._client.post('CheckTZUpdateInfo', `tz=${normalizeId(id)}`);
            return response.data;
        } catch (e) {
            if (e.code === 'ECONNABORTED') {
                throw { type: 'timeout' };
            } else {
                throw { type: 'other' };
            }
        }
    }
};
