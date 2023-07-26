/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';

const dynamicProduct = () => {
    const router = useRouter();
    return (
        <div>
            <h2>This is dynamic page: {router.query.productId}</h2>
        </div>
    );
};

export default dynamicProduct;