import React from 'react';
import Header from './components/Header';
import LiveRadioPlayer from './components/LiveRadioPlayer';
import NewsCard from './components/NewsCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breaking News Banner */}
        <div className="bg-red-600 text-white px-4 py-2 rounded-lg mb-8">
          <span className="font-bold">BREAKING:</span>
          <span className="ml-2">Parliament Passes New Education Reform Bill</span>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <NewsCard
            featured
            title="Ghana's Economy Shows Strong Growth in Q1 2024"
            category="Business"
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            time="2 hours ago"
          />
          <NewsCard
            title="National Football Team Announces New Coach"
            category="Sports"
            image="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80"
            time="3 hours ago"
          />
          <NewsCard
            title="Tech Innovation Hub Opens in Accra"
            category="Technology"
            image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
            time="4 hours ago"
          />
          <NewsCard
            title="Cultural Festival Celebrates Local Heritage"
            category="Entertainment"
            image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
            time="5 hours ago"
          />
        </div>

        {/* Categories Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b-2 border-red-600 pb-2">Politics</h2>
            <div className="space-y-4">
              {['Electoral Commission Announces New Reforms', 'Opposition Party Calls for Dialogue', 'Local Government Elections Update'].map((title, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">{i + 1}</span>
                  <p className="text-gray-800 hover:text-red-600 cursor-pointer">{title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b-2 border-red-600 pb-2">Business</h2>
            <div className="space-y-4">
              {['Stock Market Hits New High', 'Oil Prices Impact Local Market', 'Start-up Funding Reaches Record'].map((title, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">{i + 1}</span>
                  <p className="text-gray-800 hover:text-red-600 cursor-pointer">{title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b-2 border-red-600 pb-2">Entertainment</h2>
            <div className="space-y-4">
              {['New Movie Premier in Accra', 'Music Awards Nominations', 'Celebrity Charity Event'].map((title, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">{i + 1}</span>
                  <p className="text-gray-800 hover:text-red-600 cursor-pointer">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <LiveRadioPlayer />
    </div>
  );
}

export default App;