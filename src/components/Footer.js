import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <>
   <footer className="bg-light text-center text-lg-start" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        Claire Using React JS & Redux JS integrated with Rapyd API
      </div>
    </footer>
    </>
  );
}
