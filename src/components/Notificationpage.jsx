import React, { useState } from 'react';
import { X, Check, Youtube, Music, Instagram } from 'lucide-react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: 'Micheal Zacine',
      role: 'Football athlete',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      type: 'connection'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Basketball coach',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      type: 'connection'
    }
    
  ]);

  const handleAccept = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
    console.log('Accepted connection:', id);
  };

  const handleIgnore = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
    console.log('Ignored connection:', id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/20 to-gray-50">
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Left Sidebar - User Profile Card */}
          <aside className="w-full lg:w-80 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    H
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h2 className="font-bold text-gray-900 text-xl mb-1">Jordan Luis</h2>
                <p className="text-green-600 text-sm font-medium mb-1">Coach Baski</p>
                <p className="text-gray-500 text-sm">@Chicago Fire</p>
              </div>

              <div className="flex items-center justify-center gap-12 mt-6 pt-6 border-t border-gray-100">
                <div className="text-center group cursor-pointer">
                  <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto mb-2 group-hover:border-green-500 transition-colors">
                    <span className="text-gray-400 text-sm group-hover:text-green-500 transition-colors">0</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Following</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="w-14 h-14 rounded-full border-2 border-green-500 flex items-center justify-center mx-auto mb-2 group-hover:bg-green-50 transition-colors">
                    <span className="text-green-600 text-lg font-bold">5</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Followers</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Center - Notifications */}
          <main className="flex-1 order-1 lg:order-2 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
                <p className="text-gray-600 text-sm mt-1">Manage your connection requests</p>
              </div>
              {notifications.length > 0 && (
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {notifications.length} pending
                </div>
              )}
            </div>
            
            {notifications.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-16 text-center">
                <div className="text-green-500 mb-4">
                  <Check className="w-20 h-20 mx-auto" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">All caught up!</h3>
                <p className="text-gray-600 text-base">You have no new notifications at the moment</p>
              </div>
            ) : (
              notifications.map((notification, index) => (
                <div 
                  key={notification.id} 
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={notification.avatar}
                        alt={notification.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-green-100"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-base mb-1">{notification.name}</h3>
                      <p className="text-gray-600 text-sm">{notification.role}</p>
                      <p className="text-gray-400 text-xs mt-1">Wants to connect with you</p>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                      <button
                        onClick={() => handleAccept(notification.id)}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleIgnore(notification.id)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm hover:shadow-md transform hover:-translate-y-0.5"
                      >
                        Ignore
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </main>

          {/* Right Sidebar - Social Links */}
          <aside className="w-full lg:w-80 order-3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="font-bold text-gray-900 text-lg mb-6">Follow Skoats on</h2>
              
              <div className="space-y-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-gray-200 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-900 font-semibold">Youtube</span>
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-gray-200 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-900 font-semibold">TikTok</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-gray-200 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-900 font-semibold">Instagram</span>
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">Stay connected with our community</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}