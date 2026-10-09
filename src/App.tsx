/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Offerings } from './components/Offerings';
import { Trust } from './components/Trust';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#E5E7EB] font-sans selection:bg-white/10 selection:text-white">
      <Navbar />
      <Hero />
      <Vision />
      <Offerings />
      <Trust />
      <Footer />
    </div>
  );
}
