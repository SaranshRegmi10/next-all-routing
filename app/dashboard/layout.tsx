export default function DashboardLayout({
    children,
    users,
    revenue,
    notification,
    activate,
}:{
    children: React.ReactNode;
    users:React.ReactNode;
    revenue:React.ReactNode;
    notification:React.ReactNode;
    activate:React.ReactNode;
})
{
    const isLogged = true;
    return isLogged?(

            <div>
            <h1>{children}</h1>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notification}</div>
            </div>
        </div>
    )
        : (
            activate
        )
}