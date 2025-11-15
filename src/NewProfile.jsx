



// import React, { useState } from 'react';
// import { User, Trophy, Briefcase, GraduationCap, Play, Users, MessageCircle } from 'lucide-react';

// export default function NewProfile() {
//   const [activeVideo, setActiveVideo] = useState(false);

//   const profile = {
//     name: "Jackson Sola",
//     profession: "Athlete",
//     team: "Chicago FC",
//     height: "6.5 fts",
//     age: 21,
//     fatherNationality: "Canada",
//     motherNationality: "France",
//     birthCountry: "Canada",
//     connections: 313
//   };

//   const about = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

//   const achievements = [
//     "Highest goal scorer",
//     "Tournament MVP"
//   ];

//   const experience = [
//     { organization: "Nike sport", start: "May-2022", end: "Sep-2025" },
//     { organization: "Nike sport", start: "May-2022", end: "Current" }
//   ];

//   const education = [
//     { school: "Machester University", field: "sport activeness", level: "Bsc", completed: true },
//     { school: "UIC", field: "coaching Therapy", level: "Masters", completed: true },
//     { school: "University of Illinois at Chicago", field: "sport science", level: "Masters", completed: false }
//   ];

//   return (
//     <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
//       <div className="max-w-6xl mx-auto p-4 md:p-8">
//         {/* Header Card */}
//         <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
//           <div className="px-6 md:px-8 py-8">
//             <div className="flex flex-col gap-6">
//               {/* Top Row - Avatar and Info */}
//               <div className="flex gap-6 flex-col md:flex-row items-center md:items-start md:gap-40">
               

//                 <div className="relative mx-auto sm:mx-0">
//               <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
//                 H
//               </div>
//               <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
//                 <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
//               </div>
//             </div>
                
//                  <div className="flex-1">
//                   <h1 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">{profile.name}</h1>
//                   <div className="space-y-2">
//                     <div className="flex gap-2">
//                       <span className="font-medium text-gray-800  min-w-[140px] sm:min-w-[160px]">Profession:</span>
//                       <span className="text-gray-900 ">{profile.profession}</span>
//                     </div>
//                     <div className="flex gap-2">
//                       <span className="font-medium text-gray-800  min-w-[140px] sm:min-w-[160px]">Current Team:</span>
//                       <span className="text-gray-900">{profile.team}</span>
//                     </div>
//                     <div className="flex gap-2">
//                       <span className="font-medium text-gray-800  min-w-[140px] sm:min-w-[160px]">Height:</span>
//                       <span className="text-gray-900 ">{profile.height}</span>
//                     </div>
//                     <div className="flex gap-2">
//                       <span className="font-medium text-gray-800  min-w-[140px] sm:min-w-[160px]">Age:</span>
//                       <span className="text-gray-900 ">{profile.age}</span>
//                     </div>
//                     <div className="flex gap-2">
//                       <span className="font-medium text-gray-800  min-w-[140px] sm:min-w-[160px]">Father's nationality:</span>
//                       <span className="text-gray-900">{profile.fatherNationality}</span>
//                     </div>
//                     <div className="flex gap-2">
//                       <span className="font-medium text-gray-800  min-w-[140px] sm:min-w-[160px]">Mother's Nationality:</span>
//                       <span className="text-gray-900">{profile.motherNationality}</span>
//                     </div>
//                     <div className="flex gap-2">
//                       <span className="font-medium text-gray-800  min-w-[140px] sm:min-w-[160px]">Country of birth:</span>
//                       <span className="text-gray-900">{profile.birthCountry}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Action Row - Icons above button on mobile, side by side on desktop */}
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                 {/* Icons - Top on mobile, Right on desktop */}
//                 <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 order-1 md:order-2">
//                   <button className="p-2 hover:bg-emerald-50 rounded-full transition-colors duration-200">
//                     <MessageCircle size={22} className="text-[#00D66C]" />
//                   </button>
//                   <span className="text-gray-300">•</span>
//                   <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
//                     <Users size={18} className="text-[#00D66C]" />
//                     <span className="font-semibold text-gray-700">{profile.connections}</span>
//                   </div>
//                 </div>

//                 {/* Connect Button - Bottom on mobile, Left on desktop */}
//                 <button className="bg-gradient-to-r from-[#00D66C] to-[#00B85A] hover:from-[#00C05E] hover:to-[#00A650] text-white font-semibold px-16 py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto order-2 md:order-1">
//                   <Users size={22} />
//                   Connect
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* About Me */}
//         <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-6">
//           <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
//             <div className="p-2 bg-emerald-100 rounded-lg">
//               <User className="text-[#00D66C]" size={28} />
//             </div>
//             About me
//           </h2>
//           <div className="border-2 border-dashed border-gray-200 rounded-xl p-6">
//             <p className="text-gray-700 leading-relaxed text-center text-base md:text-lg">{about}</p>
//           </div>
//         </div>

//         {/* Achievements */}
//         <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-6">
//           <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
//             <div className="p-2 bg-emerald-100 rounded-lg">
//               <Trophy className="text-[#00D66C]" size={28} />
//             </div>
//             Achievement
//           </h2>
//           <div className="border-2 border-dashed border-gray-200 rounded-xl p-6">
//             <div className="flex flex-wrap gap-4 justify-center">
//               {achievements.map((achievement, index) => (
//                 <span key={index} className="bg-gradient-to-r from-emerald-50 to-emerald-100 text-gray-800 font-semibold px-8 py-3 rounded-full border-2 border-emerald-200 shadow-md">
//                   {achievement}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Game Highlights */}
//         <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-6">
//           <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
//             <div className="p-2 bg-emerald-100 rounded-lg">
//               <Play className="text-[#00D66C]" size={28} />
//             </div>
//             Game Highlights
//           </h2>
//           <div className="border-2 border-dashed border-gray-200 rounded-xl p-12">
//             <div className="flex flex-col items-center justify-center gap-4 cursor-pointer" onClick={() => setActiveVideo(!activeVideo)}>
//               <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center hover:from-emerald-200 hover:to-emerald-100 transition-all duration-300 shadow-lg">
//                 <Play size={48} className="text-[#00D66C] transition-colors duration-300" />
//               </div>
//               <p className="text-gray-700 text-center font-medium">
//                 <span className="text-[#00D66C] font-bold hover:text-[#00C05E] transition-colors duration-200">Click to view</span> or play video
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Job Experience */}
//         <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-6">
//           <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//             <div className="p-2 bg-emerald-100 rounded-lg">
//               <Briefcase className="text-[#00D66C]" size={28} />
//             </div>
//             Job Experience
//           </h2>
//           <div className="overflow-x-auto rounded-xl border border-gray-200">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gradient-to-r from-emerald-50 to-teal-50">
//                   <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm md:text-base">Organization Name</th>
//                   <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm md:text-base">Start Year</th>
//                   <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm md:text-base">End Year</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {experience.map((exp, index) => (
//                   <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50 transition-colors duration-200">
//                     <td className="py-4 px-6 text-gray-800 font-medium text-sm md:text-base">{exp.organization}</td>
//                     <td className="py-4 px-6 text-gray-600 text-sm md:text-base">{exp.start}</td>
//                     <td className="py-4 px-6 text-gray-600 text-sm md:text-base">{exp.end}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Education */}
//         <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
//           <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//             <div className="p-2 bg-emerald-100 rounded-lg">
//               <GraduationCap className="text-[#00D66C]" size={28} />
//             </div>
//             Education
//           </h2>
//           <div className="overflow-x-auto rounded-xl border border-gray-200">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gradient-to-r from-emerald-50 to-teal-50">
//                   <th className="text-left py-4 px-4 font-bold text-gray-800 text-sm md:text-base">School Name</th>
//                   <th className="text-left py-4 px-4 font-bold text-gray-800 text-sm md:text-base">Field of Study</th>
//                   <th className="text-left py-4 px-4 font-bold text-gray-800 text-sm md:text-base">Education Level</th>
//                   <th className="text-center py-4 px-4 font-bold text-gray-800">
//                     <GraduationCap className="inline text-[#00D66C]" size={24} />
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {education.map((edu, index) => (
//                   <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50 transition-colors duration-200">
//                     <td className="py-4 px-4 text-gray-800 font-medium text-sm md:text-base">{edu.school}</td>
//                     <td className="py-4 px-4 text-gray-600 text-sm md:text-base">{edu.field}</td>
//                     <td className="py-4 px-4 text-gray-600 text-sm md:text-base">{edu.level}</td>
//                     <td className="py-4 px-4 text-center">
//                       {edu.completed ? (
//                         <svg className="inline w-6 h-6 text-[#00D66C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                         </svg>
//                       ) : (
//                         <span className="text-gray-600 text-sm font-semibold bg-gray-100 px-3 py-1 rounded-full">Active</span>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { User, Trophy, Briefcase, GraduationCap, Play, Users, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function ProfessionalProfile() {
  const [activeVideo, setActiveVideo] = useState(false);

  const profile = {
    name: "Jackson Sola",
    profession: "Professional Athlete",
    team: "Chicago FC",
    position: "Forward",
    height: "198 cm (6'6\")",
    weight: "90 kg (198 lbs)",
    age: 21,
    dateOfBirth: "March 15, 2003",
    nationality: "Canadian-French",
    birthplace: "Toronto, Canada",
    connections: 313,
    email: "jackson.sola@chicagofc.com",
    phone: "+1 (312) 555-0123"
  };

  const about = "Accomplished professional athlete with a proven track record in competitive sports. Dedicated to excellence both on and off the field, with a strong commitment to teamwork, leadership, and continuous improvement. Experienced in high-pressure situations and passionate about inspiring the next generation of athletes through mentorship and community engagement.";

  const achievements = [
    { title: "Top Scorer", year: "2024", description: "League Season" },
    { title: "Tournament MVP", year: "2023", description: "International Championship" },
    { title: "Rising Star Award", year: "2022", description: "Professional League" }
  ];

  const experience = [
    { 
      organization: "Chicago FC", 
      position: "Professional Athlete",
      start: "May 2022", 
      end: "Present",
      location: "Chicago, IL"
    },
    { 
      organization: "Nike Sports Academy", 
      position: "Brand Ambassador",
      start: "May 2022", 
      end: "September 2025",
      location: "Portland, OR"
    }
  ];

  const education = [
    { 
      school: "University of Manchester", 
      field: "Sports Science", 
      level: "Bachelor of Science",
      year: "2020-2024",
      completed: true 
    },
    { 
      school: "University of Illinois at Chicago", 
      field: "Coaching & Sports Therapy", 
      level: "Master's Degree",
      year: "2024-Present",
      completed: false 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
            {/* Left Section - Avatar */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold shadow-lg">
                  JS
                </div>
                <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 lg:bottom-3 lg:right-3 w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 bg-emerald-500 rounded-full border-3 sm:border-4 border-white shadow-md flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Right Section - Info */}
            <div className="flex-1 w-full">
              {/* Name */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 text-center lg:text-left break-words">{profile.name}</h1>
              
              {/* Profile Details */}
              <div className="space-y-1 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-center lg:text-left text-gray-700">
                <p className="break-words">{profile.profession}</p>
                <p className="break-words">{profile.team}</p>
                <p className="break-words">{profile.position}</p>
              </div>
              
              {/* Mobile/Tablet Buttons */}
              <div className="flex lg:hidden flex-col sm:flex-row items-center justify-center gap-3 pt-3 sm:pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">
                    <Users size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>Connect</span>
                  </button>
                  <button className="inline-flex items-center justify-center p-2.5 sm:p-3 border-2 border-gray-300 hover:border-emerald-600 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 rounded-lg transition-all duration-200">
                    <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                  <span className="text-gray-400">•</span>
                  <Users size={16} className="sm:w-[18px] sm:h-[18px] text-gray-500" />
                  <span className="font-bold text-gray-900">{profile.connections}</span>
                </div>
              </div>
              
              {/* Desktop - All Actions in One Row */}
              <div className="hidden lg:flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="inline-flex items-center gap-2 px-8 lg:px-10 py-3 lg:py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                  <Users size={20} />
                  <span>Connect</span>
                </button>
                
                <div className="flex items-center gap-3 lg:gap-4">
                  <button className="inline-flex items-center justify-center p-2.5 lg:p-3 border-2 border-gray-300 hover:border-emerald-600 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 rounded-lg transition-all duration-200">
                    <MessageCircle size={20} />
                  </button>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users size={20} className="text-gray-500" />
                    <span className="font-bold text-gray-900">{profile.connections}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User size={20} className="text-emerald-600" />
                Personal Information
              </h2>
              <div className="space-y-3">
                <InfoRow label="Position" value={profile.position} />
                <InfoRow label="Height" value={profile.height} />
                <InfoRow label="Weight" value={profile.weight} />
                <InfoRow label="Age" value={`${profile.age} years`} />
                <InfoRow label="Date of Birth" value={profile.dateOfBirth} />
                <InfoRow label="Father's nationality" value="Canadian" />
                <InfoRow label="Mother's Nationality" value="French" />
                <InfoRow label="Nationality" value={profile.nationality} />
                <InfoRow label="Country of birth" value={profile.birthplace} />
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Mail size={20} className="text-emerald-600" />
                Contact
              </h2>
              <div className="space-y-3">
                <ContactRow icon={<Mail size={16} />} value={profile.email} />
                <ContactRow icon={<Phone size={16} />} value={profile.phone} />
                <ContactRow icon={<MapPin size={16} />} value="Chicago, IL, USA" />
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Trophy size={20} className="text-emerald-600" />
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="font-semibold text-gray-900 text-sm">{achievement.title}</div>
                    <div className="text-xs text-gray-600 mt-1">{achievement.description} • {achievement.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{about}</p>
            </div>

            {/* Game Highlights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Play size={20} className="text-emerald-600" />
                Game Highlights
              </h2>
              <div 
                className="relative bg-gray-100 rounded-lg overflow-hidden cursor-pointer group aspect-video"
                onClick={() => setActiveVideo(!activeVideo)}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-gray-900/60 group-hover:from-emerald-900/80 group-hover:to-emerald-900/60 transition-all duration-300">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-emerald-600 ml-1" fill="currentColor" />
                    </div>
                    <p className="text-white font-medium text-sm sm:text-base">Click to play highlights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase size={20} className="text-emerald-600" />
                Professional Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-emerald-600 pl-4 py-2">
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-emerald-600 font-medium mt-1">{exp.organization}</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600 mt-2">
                      <span>{exp.start} - {exp.end}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-emerald-600" />
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-emerald-600 pl-4 py-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{edu.level}</h3>
                        <p className="text-emerald-600 font-medium mt-1">{edu.school}</p>
                        <p className="text-sm text-gray-600 mt-1">{edu.field}</p>
                        <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
                      </div>
                      {edu.completed ? (
                        <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <span className="flex-shrink-0 text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-start gap-2 py-1">
      <span className="text-sm text-gray-600 font-medium">{label}:</span>
      <span className="text-sm text-gray-900 text-right">{value}</span>
    </div>
  );
}

function ContactRow({ icon, value }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="text-gray-500">{icon}</div>
      <span className="text-gray-700 break-all">{value}</span>
    </div>
  );
}