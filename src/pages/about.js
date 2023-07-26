import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import RootLayout from '../../components/layout/rootLayout';

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

AboutPage.getLayout = function getLayout(page){
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}