import axios from "axios";

export default {
    getCoins: async(url) => (await axios.get(url, {
        params: {
            limit : 10,
        }
    })).data,
}