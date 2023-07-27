import DashboardLayout from '@/components/layout/DashboardLayout';
import RootLayout from '@/components/layout/RootLayout';

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