import React from 'react';
import { MessageCircle, Calendar, Heart, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function GreenLeafLanding() {
  const { t } = useTranslation();

  return (
    <div className="mt-10 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t('Welcome to')} <span className="text-green-500">GreenLeaf</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('Connect, share, and engage with your community. Join events, share moments, and build meaningful connections.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('Share & Connect')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('Post updates, photos, and connect with friends')}</p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('Join Events')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('Discover and RSVP to exciting local events')}</p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('Build Community')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('Like, comment, and engage with your network')}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition duration-200 min-w-32">
            {t('Get Started')}
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-lg border border-gray-200 transition duration-200 min-w-32">
            {t('View Feed')}
          </button>
        </div>
      </div>
    </div>
  );
}
