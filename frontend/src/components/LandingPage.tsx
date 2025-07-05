import React from 'react';

interface LandingPageProps {
  photoUrl?: string;
  mainHeading: string;
  landingText: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({ 
  photoUrl, 
  mainHeading, 
  landingText 
}) => {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Blogger Photo */}
        {photoUrl && (
          <div className="mb-8">
            <img 
              src={photoUrl} 
              alt="Blogger" 
              className="w-32 h-32 rounded-full shadow-2xl border-4 border-white mx-auto object-cover"
            />
          </div>
        )}
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {mainHeading}
        </h1>
        
        {/* Landing Text */}
        <div 
          className="prose prose-lg md:prose-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: landingText }}
        />
        
        {/* Call to Action */}
        <div className="mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
            Start Reading
          </button>
        </div>
      </div>
    </div>
  );
}; 