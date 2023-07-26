import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const dashboardPage = () => {
    return (
        <div>
            <h1>This is dashboard page</h1>
        </div>
    );
};

export default dashboardPage;

dashboardPage.getLayout = function getLayout(page){
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}