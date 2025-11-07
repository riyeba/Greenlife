



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
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          <div className="px-6 md:px-8 py-8">
            <div className="flex flex-col gap-6">
              {/* Top Row - Avatar and Info */}
              <div className="flex gap-6 flex-col md:flex-row items-center md:items-start md:gap-40">
               

                <div className="relative mx-auto sm:mx-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                H
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              </div>
            </div>
                
                 <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{profile.name}</h1>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600  min-w-[140px] sm:min-w-[160px]">Profession:</span>
                      <span className="text-gray-500">{profile.profession}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600  min-w-[140px] sm:min-w-[160px]">Current Team:</span>
                      <span className="text-gray-500">{profile.team}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600  min-w-[140px] sm:min-w-[160px]">Height:</span>
                      <span className="text-gray-500">{profile.height}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600  min-w-[140px] sm:min-w-[160px]">Age:</span>
                      <span className="text-gray-500">{profile.age}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600  min-w-[140px] sm:min-w-[160px]">Father's nationality:</span>
                      <span className="text-gray-500">{profile.fatherNationality}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600  min-w-[140px] sm:min-w-[160px]">Mother's Nationality:</span>
                      <span className="text-gray-500">{profile.motherNationality}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-600  min-w-[140px] sm:min-w-[160px]">Country of birth:</span>
                      <span className="text-gray-500">{profile.birthCountry}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Row - Icons above button on mobile, side by side on desktop */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Icons - Top on mobile, Right on desktop */}
                <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 order-1 md:order-2">
                  <button className="p-2 hover:bg-emerald-50 rounded-full transition-colors duration-200">
                    <MessageCircle size={22} className="text-[#00D66C]" />
                  </button>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
                    <Users size={18} className="text-[#00D66C]" />
                    <span className="font-semibold text-gray-700">{profile.connections}</span>
                  </div>
                </div>

                {/* Connect Button - Bottom on mobile, Left on desktop */}
                <button className="bg-gradient-to-r from-[#00D66C] to-[#00B85A] hover:from-[#00C05E] hover:to-[#00A650] text-white font-semibold px-16 py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto order-2 md:order-1">
                  <Users size={22} />
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <User className="text-[#00D66C]" size={28} />
            </div>
            About me
          </h2>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed text-center text-base md:text-lg">{about}</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Trophy className="text-[#00D66C]" size={28} />
            </div>
            Achievement/Accomplishment
          </h2>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {achievements.map((achievement, index) => (
                <span key={index} className="bg-gradient-to-r from-emerald-50 to-emerald-100 text-gray-800 font-semibold px-8 py-3 rounded-full border-2 border-emerald-200 shadow-md">
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Game Highlights */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Play className="text-[#00D66C]" size={28} />
            </div>
            Game Highlights
          </h2>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-12">
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer" onClick={() => setActiveVideo(!activeVideo)}>
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center hover:from-emerald-200 hover:to-emerald-100 transition-all duration-300 shadow-lg">
                <Play size={48} className="text-[#00D66C] transition-colors duration-300" />
              </div>
              <p className="text-gray-700 text-center font-medium">
                <span className="text-[#00D66C] font-bold hover:text-[#00C05E] transition-colors duration-200">Click to view</span> or play video
              </p>
            </div>
          </div>
        </div>

        {/* Job Experience */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Briefcase className="text-[#00D66C]" size={28} />
            </div>
            Job Experience
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-50 to-teal-50">
                  <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm md:text-base">Organization Name</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm md:text-base">Start Year</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm md:text-base">End Year</th>
                </tr>
              </thead>
              <tbody>
                {experience.map((exp, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-4 px-6 text-gray-800 font-medium text-sm md:text-base">{exp.organization}</td>
                    <td className="py-4 px-6 text-gray-600 text-sm md:text-base">{exp.start}</td>
                    <td className="py-4 px-6 text-gray-600 text-sm md:text-base">{exp.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <GraduationCap className="text-[#00D66C]" size={28} />
            </div>
            Education
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-50 to-teal-50">
                  <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm md:text-base">School Name</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm md:text-base">Field of Study</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm md:text-base">Education Level</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-800">
                    <GraduationCap className="inline text-[#00D66C]" size={24} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {education.map((edu, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-4 px-6 text-gray-800 font-medium text-sm md:text-base">{edu.school}</td>
                    <td className="py-4 px-6 text-gray-600 text-sm md:text-base">{edu.field}</td>
                    <td className="py-4 px-6 text-gray-600 text-sm md:text-base">{edu.level}</td>
                    <td className="py-4 px-6 text-center">
                      {edu.completed ? (
                        <svg className="inline w-6 h-6 text-[#00D66C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-gray-600 text-sm font-semibold bg-gray-100 px-3 py-1 rounded-full">Active</span>
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