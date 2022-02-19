import axios from "axios";

export default async function fetchBook(isbn){
    try {
        const { data } = await axios.get(`https://api.openbd.jp/v1/get?isbn=${isbn}&pretty`)
        return data[0];
    } catch (error) {
        console.error({error});
    }
}