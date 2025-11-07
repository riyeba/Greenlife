import React, { useState } from 'react';
import { User, Trophy, Briefcase, GraduationCap, Play, Users, MessageCircle } from 'lucide-react';

export default function NewProfile() {
  const [activeVideo, setActiveVideo] = useState(false);

  const profile = {
    name: "Jackson Sola",
    profession: "Athlete",
    team: "Chicago FC",
    height: "6.5 fts",
    age: 21,
    fatherNationality: "Canada",
    motherNationality: "France",
    birthCountry: "Canada",
    connections: 313
  };

  const about = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  const achievements = [
    "Highest goal scorer",
    "Tournament MVP"
  ];

  const experience = [
    { organization: "Nike sport", start: "May-2022", end: "Sep-2025" },
    { organization: "Nike sport", start: "May-2022", end: "Current" }
  ];

  const education = [
    { school: "Machester University", field: "sport activeness", level: "Bsc", completed: true },
    { school: "UIC", field: "coaching Therapy", level: "Masters", completed: true },
    { school: "University of Illinois at Chicago", field: "sport science", level: "Masters", completed: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <div className="px-6 md:px-8 py-8">
            <div className="flex flex-col gap-6">
              {/* Top Row - Avatar, Info, and Connection Count */}
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-[#00D66C] rounded-full flex items-center justify-center shadow-lg relative">
                    <span className="text-5xl md:text-6xl text-white font-bold">H</span>
                    <div className="absolute bottom-1 right-1 w-7 h-7 bg-white rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-4 h-4 bg-[#00D66C] rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{profile.name}</h1>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600">Profession:</span>
                      <span className="text-gray-500">{profile.profession}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600">Current Team:</span>
                      <span className="text-gray-500">{profile.team}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600">Height:</span>
                      <span className="text-gray-500">{profile.height}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600">Age:</span>
                      <span className="text-gray-500">{profile.age}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600">Father's nationality:</span>
                      <span className="text-gray-500">{profile.fatherNationality}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600">Mother's Nationality:</span>
                      <span className="text-gray-500">{profile.motherNationality}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600">Country of birth:</span>
                      <span className="text-gray-500">{profile.birthCountry}</span>
                    </div>
                  </div>
                </div>

                {/* Connection count - Top Right */}
                
              </div>

              

              {/* Bottom Row - Connect Button */}
              <div className= 'flex items-center justify-between'>

                <div>
                <button className="bg-[#00D66C] hover:bg-[#00C05E] text-white px-12 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-md w-full md:w-auto">
                  <Users size={20} />
                  Connect
                </button>
              </div>
                <div className="flex items-center gap-3 text-gray-500  mb-0">
                  <MessageCircle size={20} />
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span className="font-medium">{profile.connections}</span>
                  </div>
                </div>
              
              
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <User className="text-[#00D66C]" size={28} />
            About me
          </h2>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed text-center">{about}</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Trophy className="text-[#00D66C]" size={28} />
            Achievement/Accomplishment
          </h2>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {achievements.map((achievement, index) => (
                <span key={index} className="bg-gradient-to-r from-emerald-50 to-emerald-100 text-gray-700 px-6 py-3 rounded-full border border-emerald-200">
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Game Highlights */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Play className="text-[#00D66C]" size={28} />
            Game Highlights
          </h2>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-12">
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer" onClick={() => setActiveVideo(!activeVideo)}>
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-50 transition-colors duration-300">
                <Play size={48} className="text-gray-400 hover:text-[#00D66C] transition-colors duration-300" />
              </div>
              <p className="text-gray-600">
                <span className="text-[#00D66C] font-semibold hover:text-[#00C05E] transition-colors duration-200">Click to view</span> or play video
              </p>
            </div>
          </div>
        </div>

        {/* Job Experience */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Briefcase className="text-[#00D66C]" size={28} />
            Job Experience
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Organization Name</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Start year</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-700">End year</th>
                </tr>
              </thead>
              <tbody>
                {experience.map((exp, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-4 px-4 text-gray-700">{exp.organization}</td>
                    <td className="py-4 px-4 text-gray-600">{exp.start}</td>
                    <td className="py-4 px-4 text-gray-600">{exp.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <GraduationCap className="text-[#00D66C]" size={28} />
            Education
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-700">School Name</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Field of Study</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Education Level</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-700">
                    <GraduationCap className="inline text-[#00D66C]" size={24} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {education.map((edu, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-4 px-4 text-gray-700">{edu.school}</td>
                    <td className="py-4 px-4 text-gray-600">{edu.field}</td>
                    <td className="py-4 px-4 text-gray-600">{edu.level}</td>
                    <td className="py-4 px-4 text-center">
                      {edu.completed ? (
                        <svg className="inline w-6 h-6 text-[#00D66C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-gray-500 text-sm">active</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}