import React, { useRef, useEffect } from 'react';
import QRCode from 'qrcode';

interface ShareImageProps {
  score: number;
  onImageGenerated: (dataUrl: string) => void;
}

const ShareImage: React.FC<ShareImageProps> = ({ score, onImageGenerated }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateQRCode = async () => {
      if (!containerRef.current) return;
      
      try {
        const qrCanvas = document.createElement('canvas');
        await QRCode.toCanvas(qrCanvas, 'https://www.smarttest.cc', {
          width: 100,
          margin: 1,
          color: {
            dark: '#4F46E5',
            light: '#FFFFFF'
          }
        });

        const qrDataUrl = qrCanvas.toDataURL();
        if (containerRef.current) {
          const qrImg = containerRef.current.querySelector('#qr-code') as HTMLImageElement;
          if (qrImg) {
            qrImg.src = qrDataUrl;
            qrImg.alt = 'QR Code to access Smart Test';
            await new Promise((resolve) => {
              qrImg.onload = resolve;
            });
            onImageGenerated('ready');
          }
        }
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, [onImageGenerated]);

  return (
    <div 
      ref={containerRef}
      className="w-[600px] h-[800px] bg-white p-8 flex flex-col items-center justify-between"
      style={{ 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative'
      }}
    >
      <div className="text-center w-full">
        <div className="w-24 h-24 text-[96px] text-indigo-600 mx-auto mb-6" role="img" aria-label="Trophy emoji">
          🏆
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Your Smart Test Score: {score}
        </h2>
        <p className="text-xl text-gray-600">
          Based on comprehensive cognitive assessment standards
        </p>
      </div>

      <div className="bg-indigo-50 w-full rounded-xl p-8">
        <h3 className="text-2xl font-semibold mb-4">Performance Analysis</h3>
        <p className="text-gray-700 mb-4">
          Your performance indicates {score >= 130 ? 'exceptional' : score >= 110 ? 'above average' : 'average'} cognitive abilities in:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>★ Pattern Recognition</li>
          <li>★ Logical Reasoning</li>
          <li>★ Problem-Solving Skills</li>
          <li>★ Memory and Processing</li>
          <li>★ Visual-Spatial Processing</li>
        </ul>
      </div>

      <div className="text-center w-full">
        <img 
          id="qr-code" 
          alt="QR Code to access Smart Test"
          className="mx-auto mb-4 w-[100px] h-[100px]"
          style={{ imageRendering: 'pixelated' }}
        />
        <p className="text-gray-500">
          Take the test at www.smarttest.cc
        </p>
      </div>
    </div>
  );
};

export default ShareImage;