import React from 'react';
import RootLayout from '../../components/layout/rootLayout';
import DashboardLayout from '../../components/layout/DashboardLayout';

const adminPage = () => {
    return (
        <div>
            <h2>This is admin page. checking nested layout</h2>
        </div>
    );
};

export default adminPage;

adminPage.getLayout = function getLayout(page){
    return (
        <RootLayout>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayout>
    )
}