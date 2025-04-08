import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const friendlyLinks = [
    { name: "Prayer Request", url: "https://www.sending-prayers.com/" },
    { name: "TAT Test", url: "https://www.tat-test.com" },
    { name: "Difficult Person Test", url: "https://www.difficult-person-test.com" },
    { name: "Thumbnail Tester", url: "https://www.thumbnail-tester.com" },
    { name: "Calculator App", url: "https://www.calculator-app.org" }
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
            <p className="text-gray-600">
              Professional IQ testing platform based on established psychological research and validated methodologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Age Groups</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Children (6-12 years)</li>
              <li>Teenagers (13-17 years)</li>
              <li>Adults (18+ years)</li>
              <li>Seniors (60+ years)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/test" className="hover:text-indigo-600 transition-colors">
                  Take IQ Test
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition-colors">
                  About Our Tests
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-indigo-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:contact@www.smarttest.cc"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Friendly Links</h3>
            <ul className="space-y-2">
              {friendlyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} www.smarttest.cc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}