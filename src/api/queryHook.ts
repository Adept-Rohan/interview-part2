import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const queryHook = () => {
    return useQuery({
        queryKey: ['products'], // Unique key for this query
        queryFn: async () => {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products');
                console.log(data);
                return data;
            } catch (err) {
                console.error('Error fetching products:', err);
                throw err;
            }
        }
    });
};
