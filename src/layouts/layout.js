import React from 'react';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
    <main>
        {children}
        <Footer />
    </main>
);

export default Layout;
