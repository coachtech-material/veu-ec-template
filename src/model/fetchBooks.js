import axios from "axios";

export default async function fetchBooks(){
    const records = [
        '9784297120481',
        '9784297123093',
        '9784797386677',
        '9784797388817',
        '9784797398892',
        '9784798060125',
        '9784815609610',
        '9784822292270',
    ]
    try {
        const response = [];
        await Promise.all(records.map(async (record) => {
            const {data} = await axios.get(`https://api.openbd.jp/v1/get?isbn=${record}&pretty`)
            response.push(data[0]);
        }))
        return response.sort((a, b) => a.summary.isbn - b.summary.isbn);
    } catch (error) {
        console.error({error});
    }
}