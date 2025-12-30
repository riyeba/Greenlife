import React, { useState } from 'react';
import { Calendar, Clock, Users, Plus, Send, Search, Filter, MapPin, Star, Heart, Share2, Bell, User, Settings, LogOut, X, Upload, Image as ImageIcon } from 'lucide-react';

export default function EventManagement() {
  const [activeTab, setActiveTab] = useState('events');
  const [announcement, setAnnouncement] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [myEvents, setMyEvents] = useState(new Set([1]));
  const [nextEventId, setNextEventId] = useState(7);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    category: 'Sports',
    description: '',
    image: ''
  });
  const [imagePreview, setImagePreview] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent({...newEvent, image: reader.result});
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setNewEvent({...newEvent, image: ''});
    setImagePreview('');
  };

  const [allEvents, setAllEvents] = useState([
    {
      id: 1,
      title: 'Chicago youth Basketball',
      date: '2024-12-16',
      time: '14:20',
      attendees: 1,
      location: 'Chicago Sports Center',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
      description: 'Join us for an exciting youth basketball tournament!'
    },
    {
      id: 2,
      title: 'Football Tournament',
      date: '2024-11-15',
      time: '12:30',
      attendees: 2,
      location: 'Central Stadium',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
      description: 'Annual football championship - all teams welcome!'
    },
    {
      id: 3,
      title: 'Summer Music Festival',
      date: '2025-01-20',
      time: '18:00',
      attendees: 45,
      location: 'Green Park Amphitheater',
      category: 'Music',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop',
      description: 'Experience live performances from top artists!'
    },
    {
      id: 4,
      title: 'Tech Innovation Summit',
      date: '2025-02-10',
      time: '09:00',
      attendees: 120,
      location: 'Convention Center Hall A',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
      description: 'Discover the latest in tech and innovation.'
    },
    {
      id: 5,
      title: 'Art Gallery Exhibition',
      date: '2025-01-15',
      time: '16:00',
      attendees: 35,
      location: 'Modern Art Museum',
      category: 'Art',
      image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=400&h=300&fit=crop',
      description: 'Contemporary art showcase featuring local artists.'
    },
    {
      id: 6,
      title: 'Cooking Workshop',
      date: '2025-01-25',
      time: '11:00',
      attendees: 15,
      location: 'Culinary Institute',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
      description: 'Learn to cook authentic Italian cuisine from master chefs.'
    }
  ]);

  const filteredEvents = allEvents.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const myEventsList = allEvents.filter(event => myEvents.has(event.id));

  const handleSendAnnouncement = () => {
    if (announcement.trim()) {
      alert(`Announcement sent: "${announcement}"`);
      setAnnouncement('');
    }
  };

  const handleRSVP = (eventId) => {
    setMyEvents(prev => {
      const newSet = new Set(prev);
      const isRSVPing = !newSet.has(eventId);
      
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
        // Decrease attendee count
        setAllEvents(events => events.map(event => 
          event.id === eventId 
            ? {...event, attendees: Math.max(0, event.attendees - 1)}
            : event
        ));
        alert('You have cancelled your RSVP for this event.');
      } else {
        newSet.add(eventId);
        // Increase attendee count
        setAllEvents(events => events.map(event => 
          event.id === eventId 
            ? {...event, attendees: event.attendees + 1}
            : event
        ));
        alert('You have successfully RSVP\'d to this event!');
      }
      return newSet;
    });
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.time && newEvent.location) {
      const createdEvent = {
        id: nextEventId,
        title: newEvent.title,
        date: newEvent.date,
        time: newEvent.time,
        attendees: 1,
        location: newEvent.location,
        category: newEvent.category,
        description: newEvent.description,
        image: newEvent.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop'
      };
      
      setAllEvents(prev => [...prev, createdEvent]);
      setMyEvents(prev => new Set([...prev, nextEventId]));
      setNextEventId(prev => prev + 1);
      
      alert(`Event "${newEvent.title}" created successfully! You've been automatically RSVP'd.`);
      setNewEvent({
        title: '',
        date: '',
        time: '',
        location: '',
        category: 'Sports',
        description: '',
        image: ''
      });
      setImagePreview('');
      setActiveTab('myevents');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const renderEventCard = (event) => (
    <div
      key={event.id}
      className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
        />
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-green-600">
          {event.category}
        </div>
      </div>
      
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-green-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-green-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-green-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium truncate">{event.location}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              {event.attendees} {event.attendees === 1 ? 'Attendee' : 'Attendees'}
            </span>
          </div>
          
          <button
            onClick={() => handleRSVP(event.id)}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 ${
              myEvents.has(event.id)
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
            }`}
          >
            {myEvents.has(event.id) ? 'Cancel' : 'RSVP'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content Area */}
          <div className="xl:col-span-2 space-y-4 sm:space-y-6">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-1.5 sm:p-2 flex space-x-1 sm:space-x-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab('events')}
                className={`flex-1 min-w-[90px] py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ease-in-out whitespace-nowrap ${
                  activeTab === 'events'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md transform scale-[1.02]'
                    : 'text-gray-600 hover:bg-gray-100/70 hover:text-gray-800'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setActiveTab('myevents')}
                className={`flex-1 min-w-[90px] py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ease-in-out whitespace-nowrap ${
                  activeTab === 'myevents'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md transform scale-[1.02]'
                    : 'text-gray-600 hover:bg-gray-100/70 hover:text-gray-800'
                }`}
              >
                My Events ({myEvents.size})
              </button>
              <button
                onClick={() => setActiveTab('create')}
                className={`flex-1 min-w-[90px] py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ease-in-out whitespace-nowrap ${
                  activeTab === 'create'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md transform scale-[1.02]'
                    : 'text-gray-600 hover:bg-gray-100/70 hover:text-gray-800'
                }`}
              >
                <Plus className="w-4 h-4 inline mr-1" />
                Create
              </button>
            </div>

            {/* All Events Tab */}
            {activeTab === 'events' && (
              <>
                {/* Search and Filter */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 ease-in-out hover:scale-110"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <button className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100/80 hover:bg-gray-200/80 rounded-lg sm:rounded-xl transition-all duration-300 ease-in-out hover:shadow-sm">
                      <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      <span className="font-medium text-gray-700 text-sm sm:text-base">Filter</span>
                    </button>
                  </div>
                  {searchQuery && (
                    <p className="mt-3 text-sm text-gray-600">
                      Found {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} for "{searchQuery}"
                    </p>
                  )}
                </div>

                {/* Events Grid */}
                {filteredEvents.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sm:gap-6">
                    {filteredEvents.map(renderEventCard)}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No events found</h3>
                    <p className="text-gray-600">Try adjusting your search terms</p>
                  </div>
                )}
              </>
            )}

            {/* My Events Tab */}
            {activeTab === 'myevents' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-100">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Your Events</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    You have RSVP'd to {myEvents.size} event{myEvents.size !== 1 ? 's' : ''}
                  </p>
                </div>

                {myEventsList.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sm:gap-6">
                    {myEventsList.map(renderEventCard)}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No events yet</h3>
                    <p className="text-gray-600 mb-4">RSVP to events to see them here</p>
                    <button
                      onClick={() => setActiveTab('events')}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                    >
                      Browse Events
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Create Event Tab */}
            {activeTab === 'create' && (
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Create New Event</h3>
                
                <form onSubmit={handleCreateEvent} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Title *
                    </label>
                    <input
                      type="text"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                      placeholder="e.g., Summer Music Festival"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Time *
                      </label>
                      <input
                        type="time"
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      value={newEvent.location}
                      onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                      placeholder="e.g., Central Park"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      value={newEvent.category}
                      onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="Sports">Sports</option>
                      <option value="Music">Music</option>
                      <option value="Technology">Technology</option>
                      <option value="Art">Art</option>
                      <option value="Food">Food</option>
                      <option value="Education">Education</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Image (Optional)
                    </label>
                    
                    {/* Image Preview */}
                    {imagePreview && (
                      <div className="mb-3 relative">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="w-full h-48 object-cover rounded-xl"
                        />
                        <button
                          type="button"
                          onClick={clearImage}
                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300 shadow-lg"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {/* Upload Options */}
                    <div className="space-y-3">
                      {/* File Upload */}
                      <div>
                        <label className="block w-full cursor-pointer">
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-500 transition-all duration-300">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm font-medium text-gray-700">
                              Click to upload from device
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {/* URL Input */}
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="px-2 bg-white text-gray-500">OR</span>
                        </div>
                      </div>

                      <input
                        type="url"
                        value={!imagePreview ? newEvent.image : ''}
                        onChange={(e) => {
                          setNewEvent({...newEvent, image: e.target.value});
                          setImagePreview('');
                        }}
                        placeholder="Paste image URL here"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        disabled={!!imagePreview}
                      />
                    </div>
                    
                    <p className="mt-2 text-xs text-gray-500">
                      Upload an image from your device or paste an image URL. If left empty, a default image will be used.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={newEvent.description}
                      onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                      placeholder="Tell people about your event..."
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-95"
                    >
                      Create Event
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setNewEvent({
                          title: '',
                          date: '',
                          time: '',
                          location: '',
                          category: 'Sports',
                          description: '',
                          image: ''
                        });
                        setImagePreview('');
                      }}
                      className="px-6 bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out hover:shadow-sm transform hover:scale-[1.02] active:scale-95"
                    >
                      Clear
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Make Announcement Card - Sticky */}
            <div className="sticky top-4 bg-gradient-to-br from-white to-green-50 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-green-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                Make Announcement
              </h3>
              
              <textarea
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                placeholder="Share something with your community..."
                className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none mb-3 sm:mb-4"
                rows="4"
              />
              
              <button
                onClick={handleSendAnnouncement}
                disabled={!announcement.trim()}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-md transform hover:scale-[1.02] active:scale-95 disabled:transform-none"
              >
                Send Announcement
              </button>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}