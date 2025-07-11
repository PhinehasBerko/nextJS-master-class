import React, { ReactNode } from 'react';

const Layout = (
    {children}:{children:ReactNode}
) => {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    );
}

export default Layout;
