import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl mb-8">
              Rencontrez. Échangez. Innovez.
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-12">
              Rejoignez nos soirées entrepreneuriales exclusives et développez votre réseau professionnel dans un cadre privilégié.
            </p>
            <Link
              to="/evenements"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Découvrir nos événements
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Des événements conçus pour les entrepreneurs
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <dt className="text-lg font-semibold leading-7 text-black mb-4">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-black" />
                    <span className="ml-3">Networking Ciblé</span>
                  </div>
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  Rencontrez des entrepreneurs qui partagent vos ambitions et vos défis dans un cadre professionnel.
                </dd>
              </div>

              <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <dt className="text-lg font-semibold leading-7 text-black mb-4">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-black" />
                    <span className="ml-3">Événements Premium</span>
                  </div>
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  Des soirées thématiques organisées dans des lieux sélectionnés pour leur excellence.
                </dd>
              </div>

              <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <dt className="text-lg font-semibold leading-7 text-black mb-4">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-6 w-6 text-black" />
                    <span className="ml-3">Opportunités Business</span>
                  </div>
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  Développez votre réseau et découvrez de nouvelles opportunités de collaboration.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}