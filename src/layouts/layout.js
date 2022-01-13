import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => (
    <main>
        <Header />
        {children}
    </main>
);

export default Layout;
