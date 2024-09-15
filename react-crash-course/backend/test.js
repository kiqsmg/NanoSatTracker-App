import axios from 'axios';

MONGO_URL='mongodb+srv://dummyuser:dzizhPZZMXzedrIn@cluster0.myq0n3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

export const fetchData = async () => {
    try {
        const response = await axios.get(MONGO_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
