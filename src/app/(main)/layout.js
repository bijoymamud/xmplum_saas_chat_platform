import MainLayout from "../../../MainLayout";

export default function RootGroupLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <MainLayout>    
                <div className="flex-1">
                    {children}
                </div>
            </MainLayout>
        </div>
    );
}