import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1>THis is about page</h1>
            <Button type='primary'>
                <Link href={'/'}>Back to home</Link>
            </Button>
        </div>
    );
};

export default AboutPage;