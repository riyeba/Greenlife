import React, { useState } from 'react';
import { User, Users, Trophy, Heart, MapPin, Globe, Calendar, Ruler, Camera, Plus, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const FcSportsMode = ({ size, className }) => <span className={className} style={{ fontSize: size }}>⚽</span>;
const VscOrganization = ({ size, className }) => <span className={className} style={{ fontSize: size }}>🏢</span>;
const GiFlyingFlag = ({ size, className }) => <span className={className} style={{ fontSize: size }}>🚩</span>;
const GiTeacher = ({ size, className }) => <span className={className} style={{ fontSize: size }}>📋</span>;
const FaUsersViewfinder = ({ size, className }) => <span className={className} style={{ fontSize: size }}>🔍</span>;
const FaUserTie = ({ size, className }) => <span className={className} style={{ fontSize: size }}>👔</span>;

const COUNTRIES = [
  { code: 'Eng', name: 'English' },
  { code: 'Arabic', name: 'Arabic' },
  { code: 'French', name: 'French' },
];

const SPORTS = [
  'Basketball', 'Football', 'Athletics', 'Badminton', 'Baseball', 'Boxing', 'Cricket',
  'Cycling', 'Golf', 'Gymnastics', 'Hockey', 'Martial Arts',
  'Other', 'Rugby', 'Swimming', 'Table Tennis', 'Tennis', 'Volleyball',
  'Weightlifting', 'Wrestling',
];

const EDUCATION_LEVELS = [
  'High School', 'Associate Degree', "Bachelor's Degree",
  "Master's Degree", 'Doctorate (PhD)', 'Professional Certification',
  'Trade School', 'Other',
];

const getFormConfigs = (t) => ({
  athlete: [
    { name: 'language', label: t('register.language'), type: 'select', required: true, options: ['English', 'عربي', 'Français'] },
    { name: 'fullName', label: t('register.fullName'), type: 'text', required: true, placeholder: t('register.fullNamePlaceholder') },
    { name: 'position', label: t('register.positionOfPlay'), type: 'text', placeholder: t('register.positionPlaceholder') },
    { name: 'school', label: t('register.schoolName'), type: 'text', placeholder: t('register.schoolPlaceholder') },
    { name: 'sport', label: t('register.sportName'), type: 'select', required: true, options: SPORTS },
    { name: 'dateOfBirth', label: t('register.dateOfBirth'), type: 'date', required: true, icon: Calendar },
    { name: 'height', label: t('register.height'), type: 'height-select', required: true, icon: Ruler },
    { name: 'country', label: t('register.countryOfResidence'), type: 'country-select', required: true, options: COUNTRIES, icon: MapPin },
    { name: 'state', label: t('register.stateOfResidence'), type: 'text', required: true, placeholder: t('register.statePlaceholder') },
    { name: 'city', label: t('register.cityOfResidence'), type: 'text', required: true, placeholder: t('register.cityPlaceholder') },
    { name: 'fatherNationality', label: t('register.fatherNationality'), type: 'country-select', required: true, options: COUNTRIES, icon: Globe },
    { name: 'motherNationality', label: t('register.motherNationality'), type: 'country-select', required: true, options: COUNTRIES, icon: Globe },
    { name: 'highlights', label: t('register.youtubeLinks'), type: 'youtube-links', placeholder: t('register.youtubePlaceholder') },
    { name: 'aboutYourself', label: t('register.aboutYourself'), type: 'textarea', required: true, rows: 4, placeholder: t('register.aboutAthletePlaceholder') },
    { name: 'achievements', label: t('register.achievements'), type: 'achievement-list', rows: 3 },
  ],
  coach: [
    { name: 'language', label: t('register.language'), type: 'select', required: true, options: ['English', 'عربي', 'Français'] },
    { name: 'fullName', label: t('register.fullName'), type: 'text', required: true, placeholder: t('register.fullNamePlaceholder') },
    { name: 'sport', label: t('register.coachingSport'), type: 'select', required: true, options: SPORTS },
    { name: 'currentTeam', label: t('register.currentTeam'), type: 'text', required: true, placeholder: t('register.currentTeamPlaceholder') },
    { name: 'aboutYourself', label: t('register.aboutYourself'), type: 'textarea', required: true, rows: 4, placeholder: t('register.aboutCoachPlaceholder') },
    { name: 'country', label: t('register.countryOfResidence'), type: 'country-select', required: true, options: COUNTRIES, icon: MapPin },
    { name: 'state', label: t('register.stateOfResidence'), type: 'text', required: true, placeholder: t('register.statePlaceholder') },
    { name: 'city', label: t('register.cityOfResidence'), type: 'text', required: true, placeholder: t('register.cityPlaceholder') },
    { name: 'achievements', label: t('register.achievements'), type: 'achievement-list', rows: 3 },
    { name: 'experience', label: t('register.coachingExperience'), type: 'coaching-experience-list' },
    { name: 'education', label: t('register.education'), type: 'education-list' },
  ],
  scout: [
    { name: 'language', label: t('register.language'), type: 'select', required: true, options: ['English', 'عربي', 'Français'] },
    { name: 'fullName', label: t('register.fullName'), type: 'text', required: true, placeholder: t('register.fullNamePlaceholder') },
    { name: 'scoutingComapy', label: t('register.scoutingCompany'), type: 'text', required: true, placeholder: t('register.scoutingCompanyPlaceholder') },
    { name: 'sport', label: t('register.scoutingSport'), type: 'select', required: true, options: SPORTS },
    { name: 'aboutYourself', label: t('register.aboutYourself'), type: 'textarea', required: true, rows: 4, placeholder: t('register.aboutScoutPlaceholder') },
    { name: 'country', label: t('register.countryOfResidence'), type: 'country-select', required: true, options: COUNTRIES, icon: MapPin },
    { name: 'state', label: t('register.stateOfResidence'), type: 'text', required: true, placeholder: t('register.statePlaceholder') },
    { name: 'city', label: t('register.cityOfResidence'), type: 'text', required: true, placeholder: t('register.cityPlaceholder') },
    { name: 'experience', label: t('register.workExperience'), type: 'work-experience-list', required: true },
    { name: 'education', label: t('register.education'), type: 'education-list', required: true },
  ],
  sportProfessional: [
    { name: 'language', label: t('register.language'), type: 'select', required: true, options: ['English', 'عربي', 'Français'] },
    { name: 'fullName', label: t('register.firstLastName'), type: 'text', required: true, placeholder: t('register.fullNamePlaceholder') },
    { name: 'team', label: t('register.currentCompany'), type: 'text', required: true, placeholder: t('register.companyPlaceholder') },
    { name: 'currentJobTitle', label: t('register.currentJobTitle'), type: 'text', required: true, placeholder: t('register.jobTitlePlaceholder') },
    { name: 'country', label: t('register.selectYourCountry'), type: 'country-select', required: true, options: COUNTRIES, icon: MapPin },
    { name: 'state', label: t('register.stateOfResidence'), type: 'text', required: true, placeholder: t('register.statePlaceholder') },
    { name: 'city', label: t('register.cityOfResidence'), type: 'text', required: true, placeholder: t('register.cityPlaceholder') },
    { name: 'experience', label: t('register.workExperience'), type: 'work-experience-list', required: true },
    { name: 'education', label: t('register.education'), type: 'education-list', required: true },
  ],
  club: [
    { name: 'language', label: t('register.language'), type: 'select', required: true, options: ['English', 'عربي', 'Français'] },
    { name: 'clubName', label: t('register.clubName'), type: 'text', required: true, placeholder: t('register.clubNamePlaceholder') },
    { name: 'sport', label: t('register.primarySport'), type: 'select', required: true, options: SPORTS },
    { name: 'establishedYear', label: t('register.establishedYear'), type: 'date', required: true, icon: Calendar },
    { name: 'aboutYourself', label: t('register.aboutClub'), type: 'textarea', required: true, rows: 4, placeholder: t('register.aboutClubPlaceholder') },
    { name: 'country', label: t('register.selectYourCountry'), type: 'country-select', required: true, options: COUNTRIES, icon: MapPin },
    { name: 'state', label: t('register.stateOfResidence'), type: 'text', required: true, placeholder: t('register.statePlaceholder') },
    { name: 'city', label: t('register.cityOfResidence'), type: 'text', required: true, placeholder: t('register.cityPlaceholder') },
    { name: 'achievements', label: t('register.achievements'), type: 'achievement-list', rows: 3 },
    { name: 'highlights', label: t('register.clubYoutubeLinks'), type: 'youtube-links', placeholder: t('register.youtubePlaceholder') },
  ],
  fan: [
    { name: 'fullName', label: t('register.fullName'), type: 'text', required: true, placeholder: t('register.firstNamePlaceholder') },
    { name: 'sport', label: t('register.favoriteSport'), type: 'select', options: SPORTS },
    { name: 'country', label: t('register.selectYourCountry'), type: 'country-select', required: true, options: COUNTRIES, icon: MapPin },
    { name: 'state', label: t('register.stateOfResidence'), type: 'text', required: true, placeholder: t('register.statePlaceholder') },
    { name: 'city', label: t('register.cityOfResidence'), type: 'text', required: true, placeholder: t('register.cityPlaceholder') },
  ],
});

const getCategories = (t) => [
  { id: 'athlete', label: t('register.athlete'), icon: FcSportsMode, description: t('register.athleteDesc') },
  { id: 'coach', label: t('register.coach'), icon: GiTeacher, description: t('register.coachDesc') },
  { id: 'scout', label: t('register.scout'), icon: FaUsersViewfinder, description: t('register.scoutDesc') },
  { id: 'sportProfessional', label: t('register.sportProfessional'), icon: FaUserTie, description: t('register.sportProfessionalDesc') },
  { id: 'club', label: t('register.club'), icon: VscOrganization, description: t('register.clubDesc') },
  { id: 'fan', label: t('register.fan'), icon: GiFlyingFlag, description: t('register.fanDesc') },
];

const SimpleTextInput = ({ id, type = 'text', value, onChange, placeholder, className, style, min, max, rows }) => {
  if (type === 'textarea') return <textarea id={id} value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={className} style={style} rows={rows} />;
  return <input id={id} type={type} value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={className} style={style} min={min} max={max} />;
};

const SimpleSelectInput = ({ id, value, onChange, options, placeholder, className, style }) => (
  <select id={id} value={value || ''} onChange={(e) => onChange(e.target.value)} className={className} style={style}>
    <option value="">{placeholder}</option>
    {options?.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
);

const SimpleCountrySelect = ({ id, value, onChange, options, placeholder, className, style }) => (
  <select id={id} value={value || ''} onChange={(e) => onChange(e.target.value)} className={className} style={style}>
    <option value="">{placeholder}</option>
    {options?.map(country => <option key={country.code} value={country.name}>{country.name}</option>)}
  </select>
);

const WorkExperienceList = ({ label, value, onChange }) => {
  const { t } = useTranslation();
  const experiences = value || [{ organization: '', position: '', start: '', end: '', country: '', state: '', city: '', current: '' }];
  const addExperience = () => onChange([...experiences, { organization: '', position: '', start: '', end: '', country: '', state: '', city: '', current: '' }]);
  const removeExperience = (index) => { if (experiences.length > 1) onChange(experiences.filter((_, i) => i !== index)); };
  const updateExperience = (index, field, newValue) => { const updated = [...experiences]; updated[index] = { ...updated[index], [field]: newValue }; onChange(updated); };
  return (
    <div className="space-y-4 sm:space-y-6">
      {experiences.map((experience, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            {experiences.length > 1 && <button type="button" onClick={() => removeExperience(index)} className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"><Trash2 size={16} /></button>}
          </div>
          <SimpleTextInput value={experience.organization} onChange={(v) => updateExperience(index, 'organization', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" placeholder={label} style={{ fontSize: '16px' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t('register.position')}</label>
              <SimpleTextInput value={experience.position} onChange={(v) => updateExperience(index, 'position', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t('register.startedDate')}</label>
              <SimpleTextInput type="date" value={experience.start} onChange={(v) => updateExperience(index, 'start', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t('register.currentJobRole')}</label>
              <select value={experience.current} onChange={(e) => updateExperience(index, 'current', e.target.value)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }}>
                <option value="present">{t('register.present')}</option>
                <option value="past">{t('register.past')}</option>
              </select>
            </div>
            <div className="space-y-2">
              <SimpleTextInput type="date" value={experience.end} onChange={(v) => updateExperience(index, 'end', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t('register.country')}</label>
              <select value={experience.country} onChange={(e) => updateExperience(index, 'country', e.target.value)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }}>
                <option value="" disabled>{t('register.selectCountry')}</option>
                {COUNTRIES.map(c => <option key={c.code} value={c.name}>{c.name}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t('register.state')}</label>
              <SimpleTextInput value={experience.state} onChange={(v) => updateExperience(index, 'state', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t('register.city')}</label>
              <SimpleTextInput value={experience.city} onChange={(v) => updateExperience(index, 'city', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
            </div>
          </div>
        </div>
      ))}
      <button type="button" onClick={addExperience} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-base font-medium" style={{ fontSize: '16px' }}>
        {t('register.clickToAddMore')}
      </button>
    </div>
  );
};

const AchievementList = ({ value, onChange }) => {
  const { t } = useTranslation();
  const experiences = value || [{ title: '', year: '', description: '' }];
  const addExperience = () => onChange([...experiences, { title: '', year: '', description: '' }]);
  const removeExperience = (index) => { if (experiences.length > 1) onChange(experiences.filter((_, i) => i !== index)); };
  const updateExperience = (index, field, newValue) => { const updated = [...experiences]; updated[index] = { ...updated[index], [field]: newValue }; onChange(updated); };
  return (
    <div className="space-y-4 sm:space-y-6">
      {experiences.map((experience, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">{t('register.achievementEventName')}</label>
            {experiences.length > 1 && <button type="button" onClick={() => removeExperience(index)} className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"><Trash2 size={16} /></button>}
          </div>
          <SimpleTextInput value={experience.title} onChange={(v) => updateExperience(index, 'title', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" placeholder={t('register.achievementEventName')} style={{ fontSize: '16px' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t('register.achievementYear')}</label>
              <SimpleTextInput value={experience.year} onChange={(v) => updateExperience(index, 'year', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t('register.achievementName')}</label>
              <SimpleTextInput value={experience.description} onChange={(v) => updateExperience(index, 'description', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
            </div>
          </div>
        </div>
      ))}
      <button type="button" onClick={addExperience} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-base font-medium" style={{ fontSize: '16px' }}>
        {t('register.clickToAddMore')}
      </button>
    </div>
  );
};

const EducationList = ({ value, onChange }) => {
  const { t } = useTranslation();
  const educations = value || [{ school: '', level: '', field: '', startYear: '', endYear: '', completed: false }];
  const addEducation = () => onChange([...educations, { school: '', level: '', field: '', startYear: '', endYear: '', completed: false }]);
  const removeEducation = (index) => { if (educations.length > 1) onChange(educations.filter((_, i) => i !== index)); };
  const updateEducation = (index, field, newValue) => { const updated = [...educations]; updated[index] = { ...updated[index], [field]: newValue }; onChange(updated); };
  return (
    <div className="space-y-4 sm:space-y-6">
      {educations.map((education, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium text-green-600">{t('register.education')}</h4>
            {educations.length > 1 && <button type="button" onClick={() => removeEducation(index)} className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"><Trash2 size={16} /></button>}
          </div>
          <SimpleTextInput value={education.school} onChange={(v) => updateEducation(index, 'school', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" placeholder={t('register.schoolNamePlaceholder')} style={{ fontSize: '16px' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-600">{t('register.educationLevel')}</label>
              <SimpleSelectInput value={education.level} onChange={(v) => updateEducation(index, 'level', v)} options={EDUCATION_LEVELS} placeholder={t('register.educationLevelPlaceholder')} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-600">{t('register.degreeName')}</label>
              <SimpleTextInput value={education.field} onChange={(v) => updateEducation(index, 'field', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" placeholder={t('register.degreeNamePlaceholder')} style={{ fontSize: '16px' }} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-600">{t('register.startYear')}</label>
            <SimpleTextInput type="date" value={education.startYear} onChange={(v) => updateEducation(index, 'startYear', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-600">{t('register.completed')}</label>
            <select value={education.completed} onChange={(e) => updateEducation(index, 'completed', e.target.value)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }}>
              <option value="">{t('register.select')}</option>
              <option value="yes">{t('register.yes')}</option>
              <option value="no">{t('register.inProgress')}</option>
            </select>
          </div>
          {education.completed === 'yes' && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-600">{t('register.graduationYear')}</label>
              <SimpleTextInput type="date" value={education.endYear} onChange={(v) => updateEducation(index, 'endYear', v)} className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base" style={{ fontSize: '16px' }} />
            </div>
          )}
        </div>
      ))}
      <button type="button" onClick={addEducation} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-base font-medium" style={{ fontSize: '16px' }}>
        {t('register.clickToAddMore')}
      </button>
    </div>
  );
};

const HeightInput = ({ value, onChange, IconComponent }) => {
  const { t } = useTranslation();
  const [unit, setUnit] = useState('cm');
  const [showUnitMenu, setShowUnitMenu] = useState(false);
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [cm, setCm] = useState('');
  const heightUnits = [
    { value: 'cm', label: t('register.centimeters') },
    { value: 'ft', label: t('register.feetInches') },
  ];
  React.useEffect(() => {
    if (value && typeof value === 'object') {
      setUnit(value.unit || 'cm');
      if (value.unit === 'ft') { setFeet(value.feet || ''); setInches(value.inches || ''); }
      else { setCm(value.cm || ''); }
    }
  }, [value]);
  return (
    <div className="space-y-3">
      <div className="relative">
        <button type="button" onClick={() => setShowUnitMenu(!showUnitMenu)} className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 hover:bg-gray-50 transition-colors" style={{ fontSize: '16px' }}>
          <div className="flex justify-between items-center">
            <span>{heightUnits.find(u => u.value === unit)?.label || t('register.chooseHeightUnit')}</span>
            <svg className={`w-5 h-5 transition-transform ${showUnitMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </button>
        {showUnitMenu && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            {heightUnits.map(unitOption => (
              <button key={unitOption.value} type="button" onClick={() => { setUnit(unitOption.value); setShowUnitMenu(false); if (unitOption.value === 'cm') onChange({ unit: unitOption.value, cm }); else onChange({ unit: unitOption.value, feet, inches }); }} className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${unit === unitOption.value ? 'bg-green-50 text-green-600' : 'text-gray-700'}`} style={{ fontSize: '16px' }}>
                {unitOption.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        {IconComponent && <IconComponent size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />}
        {unit === 'cm' ? (
          <SimpleTextInput type="number" min="100" max="250" value={cm} onChange={(v) => { setCm(v); onChange({ unit: 'cm', cm: v }); }} className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${IconComponent ? 'pl-10' : ''}`} placeholder={t('register.heightPlaceholder')} style={{ fontSize: '16px' }} />
        ) : (
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <SimpleTextInput type="number" min="3" max="8" value={feet} onChange={(v) => { setFeet(v); onChange({ unit: 'ft', feet: v, inches }); }} className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12`} placeholder="5" style={{ fontSize: '16px' }} />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">ft</span>
            </div>
            <div className="flex-1 relative">
              <SimpleTextInput type="number" min="0" max="11" value={inches} onChange={(v) => { setInches(v); onChange({ unit: 'ft', feet, inches: v }); }} className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="8" style={{ fontSize: '16px' }} />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">in</span>
            </div>
          </div>
        )}
      </div>
      {showUnitMenu && <div className="fixed inset-0 z-5" onClick={() => setShowUnitMenu(false)} />}
    </div>
  );
};

const YouTubeLinksInput = ({ value, onChange }) => {
  const { t } = useTranslation();
  const links = value || [''];
  const addLink = () => onChange([...links, '']);
  const removeLink = (index) => { if (links.length > 1) onChange(links.filter((_, i) => i !== index)); };
  const updateLink = (index, newValue) => { const updated = [...links]; updated[index] = newValue; onChange(updated); };
  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <div key={index} className="flex gap-2 items-center">
          <SimpleTextInput type="url" value={link} onChange={(v) => updateLink(index, v)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder={t('register.youtubePlaceholder')} style={{ fontSize: '16px' }} />
          {links.length > 1 && <button type="button" onClick={() => removeLink(index)} className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>}
          {index === links.length - 1 && <button type="button" onClick={addLink} className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"><Plus size={18} /></button>}
        </div>
      ))}
    </div>
  );
};

const ProfileImageUploader = ({ onChange }) => {
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) { const reader = new FileReader(); reader.readAsDataURL(file); reader.onload = () => setImageSrc(reader.result); }
  };
  const acceptImage = () => {
    fetch(imageSrc).then(r => r.blob()).then(blob => { setCroppedImage(URL.createObjectURL(blob)); if (onChange) onChange('profilePhoto', blob); });
  };
  const cancelUpload = () => { setImageSrc(null); setCroppedImage(null); };
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
      <label className="block text-sm font-medium text-gray-700 mb-2">{t('register.profilePhoto')}</label>
      {!imageSrc && !croppedImage && (
        <label style={{ cursor: 'pointer' }}>
          <Camera size={48} className="mx-auto text-gray-400 mb-4" />
          <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          <span className="text-green-600 hover:text-green-700 font-medium">{t('register.uploadPhoto')}</span>
          <span className="text-gray-500"> {t('register.dragDrop')}</span>
        </label>
      )}
      {imageSrc && !croppedImage && (
        <>
          <img src={imageSrc} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px', margin: 'auto', borderRadius: '8px' }} />
          <div className="flex justify-center gap-4 mt-4">
            <button className="cursor-pointer px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition duration-200" onClick={acceptImage}>{t('register.useThisPhoto')}</button>
            <button className="cursor-pointer px-6 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 active:scale-95 transition duration-200" onClick={cancelUpload}>{t('register.cancel')}</button>
          </div>
        </>
      )}
      {croppedImage && (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mt-3 mb-2">{t('register.selectedPhoto')}</h3>
          <img src={croppedImage} alt="Profile" style={{ width: 150, height: 150, borderRadius: '50%', margin: 'auto', objectFit: 'cover' }} />
          <br />
          <button className="cursor-pointer px-6 py-2 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 active:scale-95 transition duration-200 mt-2" onClick={cancelUpload}>{t('register.remove')}</button>
        </>
      )}
    </div>
  );
};

const FormField = ({ field, value, onChange }) => {
  const { t } = useTranslation();
  const fieldId = `${field.name}-input`;
  const IconComponent = field.icon;
  const baseClasses = `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${IconComponent && field.type !== 'height-select' ? 'pl-10' : ''}`;
  const handleFieldChange = (newValue) => onChange(field.name, newValue);
  const inputStyle = { fontSize: '16px' };
  let inputElement;
  switch (field.type) {
    case 'textarea': inputElement = <SimpleTextInput id={fieldId} type="textarea" rows={field.rows || 4} value={value} onChange={handleFieldChange} className={baseClasses} placeholder={field.placeholder} style={{ ...inputStyle, resize: 'vertical' }} />; break;
    case 'select': inputElement = <SimpleSelectInput id={fieldId} value={value} onChange={handleFieldChange} options={field.options} placeholder={field.placeholder || `Select ${field.label}`} className={baseClasses} style={inputStyle} />; break;
    case 'country-select': inputElement = <SimpleCountrySelect id={fieldId} value={value} onChange={handleFieldChange} options={field.options} placeholder={field.placeholder || `Select ${field.label}`} className={baseClasses} style={inputStyle} />; break;
    case 'work-experience-list': inputElement = <WorkExperienceList label={t('register.companyName')} value={value} onChange={handleFieldChange} />; break;
    case 'coaching-experience-list': inputElement = <WorkExperienceList label={t('register.coachedTeam')} value={value} onChange={handleFieldChange} />; break;
    case 'achievement-list': inputElement = <AchievementList value={value} onChange={handleFieldChange} />; break;
    case 'education-list': inputElement = <EducationList value={value} onChange={handleFieldChange} />; break;
    case 'height-select': inputElement = <HeightInput value={value} onChange={handleFieldChange} IconComponent={IconComponent} />; break;
    case 'youtube-links': inputElement = <YouTubeLinksInput value={value} onChange={handleFieldChange} />; break;
    default: inputElement = <SimpleTextInput id={fieldId} type={field.type} min={field.min} max={field.max} value={value} onChange={handleFieldChange} className={baseClasses} placeholder={field.placeholder} style={inputStyle} />;
  }
  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-2">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {IconComponent && field.type !== 'height-select' && <IconComponent size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
        {inputElement}
      </div>
    </div>
  );
};

const CategoryCard = ({ category, onClick }) => {
  const IconComponent = category.icon;
  return (
    <div onClick={onClick} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-green-500 p-6 text-center" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}>
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <IconComponent size={32} className="text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.label}</h3>
      <p className="text-sm text-gray-600">{category.description}</p>
    </div>
  );
};



const SportsRegistration = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const CATEGORIES = getCategories(t);
  const FORM_CONFIGS = getFormConfigs(t);
  const currentFormConfig = FORM_CONFIGS[selectedCategory] || [];
  const requiredFields = currentFormConfig.filter(f => f.required).map(f => f.name);
  const handleInputChange = (fieldName, value) => setFormData(prev => ({ ...prev, [fieldName]: value }));
  const handleCategorySelect = (categoryId) => { setSelectedCategory(categoryId); setFormData({}); };
  const validateForm = () => requiredFields.filter(field => { const value = formData[field]; return !value || (typeof value === 'string' && value.trim() === ''); });
  const handleSubmit = async () => {
    const missingFields = validateForm();
    if (missingFields.length > 0) { alert(`${t('register.missingFields')} ${missingFields.join(', ')}`); return; }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => { setFormData({}); setSelectedCategory(''); setSubmitted(false); }, 2000);
  };
  const handleReset = () => { setSelectedCategory(''); setFormData({}); };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('register.joinTitle')}</h1>
              <p className="text-lg text-gray-600">{t('register.joinSubtitle')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map(category => <CategoryCard key={category.id} category={category} onClick={() => handleCategorySelect(category.id)} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categoryData = CATEGORIES.find(c => c.id === selectedCategory);
  const categoryLabel = categoryData?.label || selectedCategory;
  const gridFields = currentFormConfig.filter(field => field.type !== 'textarea');
  const textareaFields = currentFormConfig.filter(field => field.type === 'textarea');

  return (
    <div className="min-h-screen bg-gray-50">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <button onClick={handleReset} className="text-green-600 hover:text-green-700 mb-4 inline-flex items-center text-sm font-medium transition-colors" type="button">
              {t('register.backToCategories')}
            </button>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{categoryLabel} {t('register.registrationSuffix')}</h1>
            <p className="text-lg text-gray-600">{t('register.fillDetails')}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <div className="space-y-6">
              {gridFields.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {gridFields.map(field => <FormField key={field.name} field={field} value={formData[field.name]} onChange={handleInputChange} />)}
                </div>
              )}
              {textareaFields.map(field => <FormField key={field.name} field={field} value={formData[field.name]} onChange={handleInputChange} />)}
              <ProfileImageUploader onChange={handleInputChange} />
            </div>
            {submitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center font-medium">
                {t('register.successMessage')}
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={handleSubmit} disabled={isSubmitting} className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                {isSubmitting ? t('register.submitting') : t('register.completeRegistration')}
              </button>
              <button onClick={handleReset} disabled={isSubmitting} className="sm:flex-none bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                {t('register.cancel')}
              </button>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              {t('register.termsText')}{' '}
              <a href="#" className="text-green-600 hover:text-green-700 transition-colors" onClick={(e) => e.preventDefault()}>{t('register.termsLink')}</a>
              {' '}{t('register.and')}{' '}
              <a href="#" className="text-green-600 hover:text-green-700 transition-colors" onClick={(e) => e.preventDefault()}>{t('register.privacyLink')}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsRegistration;
