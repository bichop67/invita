import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import EventForm from '../../components/admin/EventForm';
import EventList from '../../components/admin/EventList';
import ReservationList from '../../components/admin/ReservationList';
import { Event, Reservation } from '../../types';
import { toast } from 'react-hot-toast';
import { LayoutDashboard, CalendarPlus, Users, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { logoutAdmin } from '../../store/auth';

export default function AdminDashboard() {
  const [events, setEvents] = useState<Event[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'events' | 'reservations'>('events');
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
    fetchReservations();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast.error('Erreur lors du chargement des événements');
    }
  };

  const fetchReservations = async () => {
    try {
      const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReservations(data || []);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      toast.error('Erreur lors du chargement des réservations');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/connexion');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <LayoutDashboard className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold">Administration</span>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'events' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'
              }`}
            >
              <CalendarPlus className="h-5 w-5" />
              <span>Événements</span>
            </button>

            <button
              onClick={() => setActiveTab('reservations')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'reservations' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Réservations</span>
            </button>
          </nav>

          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 p-8">
        {activeTab === 'events' ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Gestion des événements</h2>
              <button
                onClick={() => setShowEventForm(!showEventForm)}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <CalendarPlus className="h-5 w-5" />
                <span>{showEventForm ? 'Masquer le formulaire' : 'Nouvel événement'}</span>
              </button>
            </div>

            {showEventForm && (
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
                <h3 className="text-lg font-semibold mb-4">Créer un nouvel événement</h3>
                <EventForm onSuccess={() => {
                  fetchEvents();
                  setShowEventForm(false);
                }} />
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <EventList 
                events={events} 
                onEventDeleted={fetchEvents}
                onEventUpdated={fetchEvents}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Gestion des réservations</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ReservationList 
                reservations={reservations} 
                onReservationUpdated={fetchReservations} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}