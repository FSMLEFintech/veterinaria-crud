import React from 'react';
import Button2 from './Button2';
import { Menu } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Header({ onToggleSidebar }) {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center z-10">
      <Button2 variant="ghost" size="icon" onClick={onToggleSidebar}>
        <Menu className="h-6 w-6" />
      </Button2>
      <h1 className="text-2xl font-bold flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" /> {/* Logo reemplazando el texto */}
      </h1>
      <div className="w-6" /> {/* Placeholder for right side to center the logo */}
    </header>
  );
}
