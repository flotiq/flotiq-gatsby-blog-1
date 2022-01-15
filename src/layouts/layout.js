import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
    <main className="font-sora bg-light-gray">
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
