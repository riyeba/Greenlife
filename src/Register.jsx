


// import React, { useState } from 'react';
// import { User, Users, Trophy, Heart, MapPin, Globe, Calendar, Ruler, Camera, Plus, Trash2 } from 'lucide-react';

// // Countries data
// const COUNTRIES = [
//   { code: 'US', name: 'United States', flag: '🇺🇸' },
//   { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
//   { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
//   { code: 'CA', name: 'Canada', flag: '🇨🇦' },
//   { code: 'AU', name: 'Australia', flag: '🇦🇺' },
//   { code: 'DE', name: 'Germany', flag: '🇩🇪' },
//   { code: 'FR', name: 'France', flag: '🇫🇷' },
//   { code: 'IT', name: 'Italy', flag: '🇮🇹' },
//   { code: 'ES', name: 'Spain', flag: '🇪🇸' },
//   { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
//   { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
//   { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
//   { code: 'JP', name: 'Japan', flag: '🇯🇵' },
//   { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
//   { code: 'CN', name: 'China', flag: '🇨🇳' },
//   { code: 'IN', name: 'India', flag: '🇮🇳' }
// ];

// const SPORTS = [
//   'Athletics', 'Badminton', 'Baseball', 'Basketball', 'Boxing', 'Cricket', 
//   'Cycling', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Martial Arts', 
//   'Other', 'Rugby', 'Swimming', 'Table Tennis', 'Tennis', 'Volleyball', 
//   'Weightlifting', 'Wrestling'
// ];

// const EDUCATION_LEVELS = [
//   'High School',
//   'Associate Degree',
//   'Bachelor\'s Degree',
//   'Master\'s Degree',
//   'Doctorate (PhD)',
//   'Professional Certification',
//   'Trade School',
//   'Other'
// ];

// const CATEGORIES = [
//   { id: 'athlete', label: 'Athlete', icon: Trophy, description: 'Professional or amateur sports player' },
//   { id: 'coach', label: 'Coach', icon: Users, description: 'Sports coach or trainer' },
//   { id: 'scout', label: 'Scout', icon: User, description: 'Talent scout or sports agent' },
//   { id: 'sportProfessional', label: 'Sport Professional', icon: Globe, description: 'Sports industry professional' },
//   { id: 'fan', label: 'Fan', icon: Heart, description: 'Sports enthusiast and supporter' }
// ];

// // Form configurations
// const FORM_CONFIGS = {
//   athlete: [
//     { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
//     { name: 'profession', label: 'Profession', type: 'text', required: true, placeholder: 'e.g., Professional Footballer' },
//     { name: 'sport', label: 'Sport Name', type: 'select', required: true, options: SPORTS },
//     { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true, icon: Calendar },
//     { name: 'aboutYourself', label: 'Write about yourself', type: 'textarea', required: true, rows: 4, placeholder: 'Tell us about your sports journey...' }
//   ],
//   coach: [
//     { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
//     { name: 'currentTeam', label: 'Current Team/Organization', type: 'text', required: true, placeholder: 'e.g., Lagos United FC' },
//     { name: 'profession', label: 'Profession', type: 'text', required: true, placeholder: 'e.g., Head Coach' },
//     { name: 'coachingSport', label: 'Coaching Sport', type: 'select', required: true, options: SPORTS },
//     { name: 'aboutYourself', label: 'Write about yourself', type: 'textarea', required: true, rows: 4, placeholder: 'Tell us about your coaching philosophy...' }
//   ],
//   scout: [
//     { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
//     { name: 'currentCompany', label: 'Current Company/Organization', type: 'text', required: true, placeholder: 'e.g., SportsTalent Agency' },
//     { name: 'profession', label: 'Profession', type: 'text', required: true, placeholder: 'e.g., Talent Scout' },
//     { name: 'scoutingSport', label: 'Scouting Sport', type: 'select', required: true, options: SPORTS },
//     { name: 'aboutYourself', label: 'Write about yourself', type: 'textarea', required: true, rows: 4, placeholder: 'Tell us about your scouting experience...' }
//   ],
//   sportProfessional: [
//     { name: 'language', label: 'Language ', type: 'select', required: true, options: ['English', 'Arabic', 'French', 'Spanish', 'Portuguese', 'Chinese', 'Japanese', 'Russian'] },
//     { name: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'Enter your first name' },
//     { name: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Enter your last name' },
//     { name: 'currentCompanyName', label: 'Current company name', type: 'text', required: true, placeholder: 'Enter your current company name' },
//     { name: 'currentJobTitle', label: 'Current job title', type: 'text', required: true, placeholder: 'Enter your current job title' },
//     { name: 'workExperience', label: 'Work Experience', type: 'work-experience-list', required: true },
//     { name: 'countryOfResidence', label: 'Select Your Country', type: 'country-select', required: true, options: COUNTRIES, icon: MapPin },
//     { name: 'stateOfResidence', label: 'State', type: 'text', required: true, placeholder: 'Enter your state' },
//     { name: 'education', label: 'Education', type: 'education-list', required: true }
//   ],
//   fan: [
//     { name: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'Enter your first name' },
//     { name: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Enter your last name' },
//     { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email' },
//     { name: 'favoriteSport', label: 'Favorite Sport', type: 'select', options: SPORTS }
//   ]
// };

// // Simple input components
// const SimpleTextInput = ({ id, type = 'text', value, onChange, placeholder, className, style, min, max, rows }) => {
//   if (type === 'textarea') {
//     return (
//       <textarea
//         id={id}
//         value={value || ''}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className={className}
//         style={style}
//         rows={rows}
//       />
//     );
//   }

//   return (
//     <input
//       id={id}
//       type={type}
//       value={value || ''}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       className={className}
//       style={style}
//       min={min}
//       max={max}
//     />
//   );
// };

// const SimpleSelectInput = ({ id, value, onChange, options, placeholder, className, style }) => {
//   return (
//     <select
//       id={id}
//       value={value || ''}
//       onChange={(e) => onChange(e.target.value)}
//       className={className}
//       style={style}
//     >
//       <option value="">{placeholder}</option>
//       {options?.map(option => (
//         <option key={option} value={option}>{option}</option>
//       ))}
//     </select>
//   );
// };

// const SimpleCountrySelect = ({ id, value, onChange, options, placeholder, className, style }) => {
//   return (
//     <select
//       id={id}
//       value={value || ''}
//       onChange={(e) => onChange(e.target.value)}
//       className={className}
//       style={style}
//     >
//       <option value="">{placeholder}</option>
//       {options?.map(country => (
//         <option key={country.code} value={country.name}>
//           {country.flag} {country.name}
//         </option>
//       ))}
//     </select>
//   );
// };

// // Work Experience component
// const WorkExperienceList = ({ value, onChange }) => {
//   const experiences = value || [{ companyName: '', startDate: '', endDate: '' }];

//   const addExperience = () => {
//     onChange([...experiences, { companyName: '', startDate: '', endDate: '' }]);
//   };

//   const removeExperience = (index) => {
//     if (experiences.length > 1) {
//       const newExperiences = experiences.filter((_, i) => i !== index);
//       onChange(newExperiences);
//     }
//   };

//   const updateExperience = (index, field, newValue) => {
//     const newExperiences = [...experiences];
//     newExperiences[index] = { ...newExperiences[index], [field]: newValue };
//     onChange(newExperiences);
//   };

//   return (
//     <div className="space-y-4 sm:space-y-6">
//       {experiences.map((experience, index) => (
//         <div key={index} className="border border-gray-300 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
//           <div className="flex justify-between items-center">
//             <h4 className="text-sm font-medium text-green-600">Work Experience</h4>
//             {experiences.length > 1 && (
//               <button
//                 type="button"
//                 onClick={() => removeExperience(index)}
//                 className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors touch-manipulation"
//                 title="Remove experience"
//               >
//                 <Trash2 size={16} />
//               </button>
//             )}
//           </div>
          
//           <SimpleTextInput
//             value={experience.companyName}
//             onChange={(newValue) => updateExperience(index, 'companyName', newValue)}
//             className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
//             placeholder="Company Name"
//             style={{ fontSize: '16px' }}
//           />
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">Started date:</label>
//               <SimpleTextInput
//                 type="date"
//                 value={experience.startDate}
//                 onChange={(newValue) => updateExperience(index, 'startDate', newValue)}
//                 className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
//                 style={{ fontSize: '16px' }}
//               />
//             </div>
            
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">Ended date:</label>
//               <SimpleTextInput
//                 type="date"
//                 value={experience.endDate}
//                 onChange={(newValue) => updateExperience(index, 'endDate', newValue)}
//                 className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
//                 style={{ fontSize: '16px' }}
//               />
//             </div>
//           </div>
//         </div>
//       ))}
      
//       <button
//         type="button"
//         onClick={addExperience}
//         className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors touch-manipulation text-base font-medium"
//         style={{ fontSize: '16px' }}
//       >
//         Click to Add More
//       </button>
//     </div>
//   );
// };

// // Education component
// const EducationList = ({ value, onChange }) => {
//   const educations = value || [{ schoolName: '', educationLevel: '', degreeName: '', graduationYear: '' }];

//   const addEducation = () => {
//     onChange([...educations, { schoolName: '', educationLevel: '', degreeName: '', graduationYear: '' }]);
//   };

//   const removeEducation = (index) => {
//     if (educations.length > 1) {
//       const newEducations = educations.filter((_, i) => i !== index);
//       onChange(newEducations);
//     }
//   };

//   const updateEducation = (index, field, newValue) => {
//     const newEducations = [...educations];
//     newEducations[index] = { ...newEducations[index], [field]: newValue };
//     onChange(newEducations);
//   };

//   return (
//     <div className="space-y-4 sm:space-y-6">
//       {educations.map((education, index) => (
//         <div key={index} className="border border-gray-300 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
//           <div className="flex justify-between items-center">
//             <h4 className="text-sm font-medium text-green-600">Education</h4>
//             {educations.length > 1 && (
//               <button
//                 type="button"
//                 onClick={() => removeEducation(index)}
//                 className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors touch-manipulation"
//                 title="Remove education"
//               >
//                 <Trash2 size={16} />
//               </button>
//             )}
//           </div>
          
//           <SimpleTextInput
//             value={education.schoolName}
//             onChange={(newValue) => updateEducation(index, 'schoolName', newValue)}
//             className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
//             placeholder="School Name"
//             style={{ fontSize: '16px' }}
//           />
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-green-600">Education Level:</label>
//               <SimpleSelectInput
//                 value={education.educationLevel}
//                 onChange={(newValue) => updateEducation(index, 'educationLevel', newValue)}
//                 options={EDUCATION_LEVELS}
//                 placeholder="Education Level"
//                 className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
//                 style={{ fontSize: '16px' }}
//               />
//             </div>
            
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-green-600">Degree Name:</label>
//               <SimpleTextInput
//                 value={education.degreeName}
//                 onChange={(newValue) => updateEducation(index, 'degreeName', newValue)}
//                 className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
//                 placeholder="Degree Name"
//                 style={{ fontSize: '16px' }}
//               />
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-green-600">Graduation Year:</label>
//             <SimpleTextInput
//               type="date"
//               value={education.graduationYear}
//               onChange={(newValue) => updateEducation(index, 'graduationYear', newValue)}
//               className="w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
//               style={{ fontSize: '16px' }}
//             />
//           </div>
//         </div>
//       ))}
      
//       <button
//         type="button"
//         onClick={addEducation}
//         className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors touch-manipulation text-base font-medium"
//         style={{ fontSize: '16px' }}
//       >
//         Click to Add More
//       </button>
//     </div>
//   );
// };

// // Form field component
// const FormField = ({ field, value, onChange }) => {
//   const fieldId = `${field.name}-input`;
//   const IconComponent = field.icon;
//   const baseClasses = `w-full px-3 sm:px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base ${IconComponent ? 'pl-10' : ''}`;
  
//   const handleFieldChange = (newValue) => {
//     onChange(field.name, newValue);
//   };

//   const inputStyle = { fontSize: '16px' };

//   let inputElement;
//   switch (field.type) {
//     case 'textarea':
//       inputElement = (
//         <SimpleTextInput
//           id={fieldId}
//           type="textarea"
//           rows={field.rows || 4}
//           value={value}
//           onChange={handleFieldChange}
//           className={baseClasses}
//           placeholder={field.placeholder}
//           style={inputStyle}
//         />
//       );
//       break;
    
//     case 'select':
//       inputElement = (
//         <SimpleSelectInput
//           id={fieldId}
//           value={value}
//           onChange={handleFieldChange}
//           options={field.options}
//           placeholder={field.placeholder || `Select ${field.label.toLowerCase()}`}
//           className={baseClasses}
//           style={inputStyle}
//         />
//       );
//       break;

//     case 'country-select':
//       inputElement = (
//         <SimpleCountrySelect
//           id={fieldId}
//           value={value}
//           onChange={handleFieldChange}
//           options={field.options}
//           placeholder={field.placeholder || `Select ${field.label.toLowerCase()}`}
//           className={baseClasses}
//           style={inputStyle}
//         />
//       );
//       break;

//     case 'work-experience-list':
//       inputElement = (
//         <WorkExperienceList
//           value={value}
//           onChange={handleFieldChange}
//         />
//       );
//       break;

//     case 'education-list':
//       inputElement = (
//         <EducationList
//           value={value}
//           onChange={handleFieldChange}
//         />
//       );
//       break;
    
//     default:
//       inputElement = (
//         <SimpleTextInput
//           id={fieldId}
//           type={field.type}
//           min={field.min}
//           max={field.max}
//           value={value}
//           onChange={handleFieldChange}
//           className={baseClasses}
//           placeholder={field.placeholder}
//           style={inputStyle}
//         />
//       );
//       break;
//   }

//   return (
//     <div>
//       <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-2">
//         {field.label} {field.required && '*'}
//       </label>
//       <div className="relative">
//         {IconComponent && field.type !== 'work-experience-list' && field.type !== 'education-list' && (
//           <IconComponent 
//             size={18} 
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
//           />
//         )}
//         {inputElement}
//       </div>
//     </div>
//   );
// };

// // Photo upload component
// const PhotoUpload = ({ onChange, id, value }) => (
//   <div>
//     <label className="block text-sm font-medium text-gray-700 mb-2">
//       Profile Photo
//     </label>
//     <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-green-500 transition-colors">
//       <Camera size={40} className="mx-auto text-gray-400 mb-3 sm:mb-4 sm:w-12 sm:h-12" />
//       <input
//         type="file"
//         accept="image/*"
//         className="hidden"
//         id={id}
//         onChange={(e) => onChange('profilePhoto', e.target.files?.[0])}
//       />
//       <label htmlFor={id} className="cursor-pointer">
//         <span className="text-green-600 hover:text-green-700 font-medium text-sm sm:text-base">
//           Upload a photo
//         </span>
//         <span className="text-gray-500 text-sm sm:text-base"> or drag and drop</span>
//       </label>
//       <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
//       {value && <p className="text-xs text-green-600 mt-1">File selected: {value.name}</p>}
//     </div>
//   </div>
// );

// // Category card component
// const CategoryCard = ({ category, onClick }) => {
//   const IconComponent = category.icon;
  
//   return (
//     <div
//       onClick={onClick}
//       className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-green-500 p-4 sm:p-6 text-center min-h-[140px] sm:min-h-[160px] flex flex-col justify-center touch-manipulation"
//       role="button"
//       tabIndex={0}
//       onKeyDown={(e) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//           e.preventDefault();
//           onClick();
//         }
//       }}
//     >
//       <div className="bg-green-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
//         <IconComponent size={24} className="text-green-600 sm:w-8 sm:h-8" />
//       </div>
//       <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{category.label}</h3>
//       <p className="text-xs sm:text-sm text-gray-600 leading-tight">{category.description}</p>
//     </div>
//   );
// };

// // Main component
// const SportsRegistration = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [formData, setFormData] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const currentFormConfig = FORM_CONFIGS[selectedCategory] || [];
//   const requiredFields = currentFormConfig.filter(field => field.required).map(field => field.name);

//   const handleInputChange = (fieldName, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [fieldName]: value
//     }));
//   };

//   const handleCategorySelect = (categoryId) => {
//     setSelectedCategory(categoryId);
//     setFormData({});
//   };

//   const validateForm = () => {
//     const missingFields = requiredFields.filter(field => {
//       const value = formData[field];
//       return !value || (typeof value === 'string' && value.trim() === '');
//     });
//     return missingFields;
//   };

//   const handleSubmit = async () => {    
//     const missingFields = validateForm();
//     if (missingFields.length > 0) {
//       alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       console.log('Form submitted:', { 
//         category: selectedCategory, 
//         data: formData,
//         timestamp: new Date().toISOString()
//       });
      
//       alert('Registration submitted successfully!');
      
//       setFormData({});
//       setSelectedCategory('');
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Submission failed. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleReset = () => {
//     setSelectedCategory('');
//     setFormData({});
//   };

//   if (!selectedCategory) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-6 sm:mb-8">
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">
//                 Join GreenLeaf
//               </h1>
//               <p className="text-base sm:text-lg text-gray-600 px-2">
//                 Choose your category to get started
//               </p>
//             </div>

//             <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
//               {CATEGORIES.map((category) => (
//                 <CategoryCard
//                   key={category.id}
//                   category={category}
//                   onClick={() => handleCategorySelect(category.id)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const categoryLabel = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
//   const gridFields = currentFormConfig.filter(field => 
//     field.type !== 'textarea' && 
//     field.type !== 'work-experience-list' && 
//     field.type !== 'education-list'
//   );
//   const complexFields = currentFormConfig.filter(field => 
//     field.type === 'work-experience-list' || 
//     field.type === 'education-list'
//   );
//   const textareaFields = currentFormConfig.filter(field => field.type === 'textarea');

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-6 sm:mb-8">
//             <button
//               onClick={handleReset}
//               className="text-green-600 hover:text-green-700 mb-3 sm:mb-4 inline-flex items-center text-sm font-medium transition-colors touch-manipulation"
//               type="button"
//             >
//               ← Back to categories
//             </button>
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 px-2">
//               {categoryLabel} Registration
//             </h1>
//             <p className="text-base sm:text-lg text-gray-600 px-2">
//               Fill in your details to join our sports community
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
//             <div className="space-y-4 sm:space-y-6">
//               {gridFields.length > 0 && (
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//                   {gridFields.map((field) => (
//                     <FormField
//                       key={field.name}
//                       field={field}
//                       value={formData[field.name]}
//                       onChange={handleInputChange}
//                     />
//                   ))}
//                 </div>
//               )}

//               {complexFields.map((field) => (
//                 <FormField
//                   key={field.name}
//                   field={field}
//                   value={formData[field.name]}
//                   onChange={handleInputChange}
//                 />
//               ))}

//               {textareaFields.map((field) => (
//                 <FormField
//                   key={field.name}
//                   field={field}
//                   value={formData[field.name]}
//                   onChange={handleInputChange}
//                 />
//               ))}

//               <PhotoUpload
//                 onChange={handleInputChange}
//                 id={`${selectedCategory}-photo`}
//                 value={formData.profilePhoto}
//               />
//             </div>

//             <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <button
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white py-3 sm:py-3 px-6 rounded-lg font-medium transition-colors duration-200 touch-manipulation text-base"
//               >
//                 {isSubmitting ? 'Submitting...' : 'Complete Registration'}
//               </button>
//               <button
//                 onClick={handleReset}
//                 disabled={isSubmitting}
//                 className="sm:flex-none bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-700 py-3 sm:py-3 px-6 rounded-lg font-medium transition-colors duration-200 touch-manipulation text-base"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>

//           <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500 px-4">
//             <p>
//               By registering, you agree to our{' '}
//               <a 
//                 href="#" 
//                 className="text-green-600 hover:text-green-700 transition-colors"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 Terms of Service
//               </a>{' '}
//               and{' '}
//               <a 
//                 href="#" 
//                 className="text-green-600 hover:text-green-700 transition-colors"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 Privacy Policy
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SportsRegistration;



import React, { useState, useRef } from 'react';
import { User, Users, Trophy, Heart, MapPin, Globe, Calendar, Camera, Trash2, X, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

const COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' }
];

const SPORTS = [
  'Athletics', 'Basketball', 'Football', 'Tennis', 'Swimming', 'Cricket', 'Golf', 'Other'
];

const EDUCATION_LEVELS = [
  'High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'Doctorate', 'Other'
];

const CATEGORIES = [
  { id: 'athlete', label: 'Athlete', icon: Trophy, description: 'Professional or amateur sports player' },
  { id: 'coach', label: 'Coach', icon: Users, description: 'Sports coach or trainer' },
  { id: 'scout', label: 'Scout', icon: User, description: 'Talent scout or sports agent' },
  { id: 'sportProfessional', label: 'Sport Professional', icon: Globe, description: 'Sports industry professional' },
  { id: 'fan', label: 'Fan', icon: Heart, description: 'Sports enthusiast and supporter' }
];

const FORM_CONFIGS = {
  athlete: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'profession', label: 'Profession', type: 'text', required: true, placeholder: 'e.g., Professional Footballer' },
    { name: 'sport', label: 'Sport Name', type: 'select', required: true, options: SPORTS },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true, icon: Calendar },
    { name: 'aboutYourself', label: 'Write about yourself', type: 'textarea', required: true, rows: 4 }
  ],
  coach: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'currentTeam', label: 'Current Team', type: 'text', required: true, placeholder: 'e.g., Lagos United FC' },
    { name: 'profession', label: 'Profession', type: 'text', required: true, placeholder: 'e.g., Head Coach' },
    { name: 'coachingSport', label: 'Coaching Sport', type: 'select', required: true, options: SPORTS }
  ],
  scout: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'currentCompany', label: 'Current Company', type: 'text', required: true, placeholder: 'e.g., SportsTalent Agency' }
  ],
  sportProfessional: [
    { name: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'Enter first name' },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Enter last name' },
    { name: 'currentCompanyName', label: 'Company', type: 'text', required: true, placeholder: 'Company name' },
    { name: 'countryOfResidence', label: 'Country', type: 'country-select', required: true, options: COUNTRIES }
  ],
  fan: [
    { name: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'Enter first name' },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Enter last name' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Enter email' }
  ]
};

const SimpleTextInput = ({ id, type, value, onChange, placeholder, className, rows }) => {
  if (type === 'textarea') {
    return <textarea id={id} value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={className} rows={rows} />;
  }
  return <input id={id} type={type || 'text'} value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={className} />;
};

const SimpleSelectInput = ({ id, value, onChange, options, placeholder, className }) => {
  return (
    <select id={id} value={value || ''} onChange={(e) => onChange(e.target.value)} className={className}>
      <option value="">{placeholder}</option>
      {options?.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
  );
};

const SimpleCountrySelect = ({ id, value, onChange, options, placeholder, className }) => {
  return (
    <select id={id} value={value || ''} onChange={(e) => onChange(e.target.value)} className={className}>
      <option value="">{placeholder}</option>
      {options?.map(country => <option key={country.code} value={country.name}>{country.flag} {country.name}</option>)}
    </select>
  );
};

const ImageCropperModal = ({ isOpen, onClose, onCropComplete }) => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [cropBox, setCropBox] = useState({ x: 50, y: 50, width: 200, height: 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeHandle, setResizeHandle] = useState(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
        setCropBox({ x: 50, y: 50, width: 200, height: 200 });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e, handle) => {
    e.preventDefault();
    e.stopPropagation();
    if (handle) {
      setIsResizing(true);
      setResizeHandle(handle);
      setIsDragging(false);
    } else {
      setIsDragging(true);
      setIsResizing(false);
    }
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging && !isResizing) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      setCropBox(prev => ({
        ...prev,
        x: Math.max(0, Math.min(rect.width - prev.width, prev.x + deltaX)),
        y: Math.max(0, Math.min(rect.height - prev.height, prev.y + deltaY))
      }));
      
      setDragStart({ x: e.clientX, y: e.clientY });
    } else if (isResizing) {
      setCropBox(prev => {
        let newBox = { ...prev };
        
        if (resizeHandle.includes('e')) {
          newBox.width = Math.max(50, Math.min(rect.width - prev.x, mouseX - prev.x));
        }
        if (resizeHandle.includes('w')) {
          const newWidth = Math.max(50, prev.x + prev.width - mouseX);
          const newX = Math.max(0, Math.min(prev.x + prev.width - 50, mouseX));
          newBox.x = newX;
          newBox.width = prev.x + prev.width - newX;
        }
        if (resizeHandle.includes('s')) {
          newBox.height = Math.max(50, Math.min(rect.height - prev.y, mouseY - prev.y));
        }
        if (resizeHandle.includes('n')) {
          const newHeight = Math.max(50, prev.y + prev.height - mouseY);
          const newY = Math.max(0, Math.min(prev.y + prev.height - 50, mouseY));
          newBox.y = newY;
          newBox.height = prev.y + prev.height - newY;
        }
        
        return newBox;
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeHandle(null);
  };

  const handleCrop = () => {
    if (!image || !canvasRef.current || !imageRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const imgRect = img.getBoundingClientRect();
    const scaleX = img.naturalWidth / imgRect.width;
    const scaleY = img.naturalHeight / imgRect.height;

    const offsetX = (imgRect.left - containerRect.left);
    const offsetY = (imgRect.top - containerRect.top);

    const cropX = (cropBox.x - offsetX) * scaleX;
    const cropY = (cropBox.y - offsetY) * scaleY;
    const cropWidth = cropBox.width * scaleX;
    const cropHeight = cropBox.height * scaleY;

    canvas.width = cropWidth;
    canvas.height = cropHeight;

    ctx.drawImage(
      img,
      cropX, cropY, cropWidth, cropHeight,
      0, 0, cropWidth, cropHeight
    );

    canvas.toBlob((blob) => {
      const croppedFile = new File([blob], 'profile-photo.jpg', { type: 'image/jpeg' });
      onCropComplete(croppedFile, canvas.toDataURL('image/jpeg'));
      handleClose();
    }, 'image/jpeg', 0.9);
  };

  const handleClose = () => {
    setImage(null);
    setScale(1);
    setRotation(0);
    setCropBox({ x: 50, y: 50, width: 200, height: 200 });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 white bg-opacity-50 z-50 flex items-center justify-center p-4" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Crop Profile Photo</h2>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {!image ? (
            <div className="text-center py-12">
              <Camera size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">Upload a photo to get started</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="crop-file-input"
              />
              <label htmlFor="crop-file-input" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium cursor-pointer transition-colors">
                Choose Photo
              </label>
            </div>
          ) : (
            <>
              <div 
                ref={containerRef}
                className="relative bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center select-none" 
                style={{ height: '500px' }}
              >
                <canvas ref={canvasRef} className="hidden" />
                <img 
                  ref={imageRef}
                  src={image} 
                  alt="Preview" 
                  className="max-w-full max-h-full object-contain pointer-events-none" 
                  style={{ transform: `scale(${scale}) rotate(${rotation}deg)`, transition: 'transform 0.2s' }} 
                />
                
                <div 
                  className="absolute pointer-events-none"
                  style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    boxShadow: `0 0 0 9999px rgba(0, 0, 0, 0.5)`
                  }}
                >
                  <div
                    className="absolute border-2 border-green-500 pointer-events-auto cursor-move"
                    style={{
                      left: `${cropBox.x}px`,
                      top: `${cropBox.y}px`,
                      width: `${cropBox.width}px`,
                      height: `${cropBox.height}px`,
                      boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)'
                    }}
                    onMouseDown={(e) => handleMouseDown(e, null)}
                  >
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="border border-green-300 border-opacity-40" />
                      ))}
                    </div>

                    {['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'].map((handle) => (
                      <div
                        key={handle}
                        className="absolute w-4 h-4 bg-white border-2 border-green-600 rounded-full shadow-md z-10 hover:scale-125 transition-transform"
                        style={{
                          cursor: `${handle}-resize`,
                          ...(handle.includes('n') && { top: '-8px' }),
                          ...(handle.includes('s') && { bottom: '-8px' }),
                          ...(handle.includes('w') && { left: '-8px' }),
                          ...(handle.includes('e') && { right: '-8px' }),
                          ...(!handle.includes('n') && !handle.includes('s') && { top: 'calc(50% - 8px)' }),
                          ...(!handle.includes('w') && !handle.includes('e') && { left: 'calc(50% - 8px)' })
                        }}
                        onMouseDown={(e) => handleMouseDown(e, handle)}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          handleMouseDown({
                            preventDefault: () => {},
                            stopPropagation: () => {},
                            clientX: e.touches[0].clientX,
                            clientY: e.touches[0].clientY
                          }, handle);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zoom</label>
                  <div className="flex items-center gap-3">
                    <ZoomOut size={18} className="text-gray-500" />
                    <input type="range" min="0.5" max="3" step="0.1" value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} className="flex-1" />
                    <ZoomIn size={18} className="text-gray-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rotation</label>
                  <div className="flex items-center gap-3">
                    <RotateCw size={18} className="text-gray-500" />
                    <input type="range" min="0" max="360" step="1" value={rotation} onChange={(e) => setRotation(parseInt(e.target.value))} className="flex-1" />
                    <span className="text-sm text-gray-600 w-12">{rotation}°</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => fileInputRef.current?.click()} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors">
                  Change Photo
                </button>
                <button type="button" onClick={handleCrop} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Crop & Upload
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const PhotoUpload = ({ onChange, previewUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCropComplete = (croppedFile, dataUrl) => {
    onChange('profilePhoto', croppedFile, dataUrl);
  };

  return (
    <>
      <ImageCropperModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCropComplete={handleCropComplete} />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
          {previewUrl ? (
            <div className="space-y-4">
              <img src={previewUrl} alt="Profile preview" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-500" />
              <p className="text-sm text-green-600 font-medium">Photo uploaded successfully!</p>
              <button type="button" onClick={() => setIsModalOpen(true)} className="text-green-600 hover:text-green-700 font-medium text-sm">
                Change Photo
              </button>
            </div>
          ) : (
            <>
              <Camera size={40} className="mx-auto text-gray-400 mb-4" />
              <button type="button" onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                <span className="text-green-600 hover:text-green-700 font-medium">Upload a photo</span>
              </button>
              <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const FormField = ({ field, value, onChange, previewUrl }) => {
  const fieldId = `${field.name}-input`;
  const IconComponent = field.icon;
  const baseClasses = `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${IconComponent ? 'pl-10' : ''}`;
  
  const handleFieldChange = (newValue, dataUrl) => {
    if (field.name === 'profilePhoto') {
      onChange(field.name, newValue, dataUrl);
    } else {
      onChange(field.name, newValue);
    }
  };

  let inputElement;
  switch (field.type) {
    case 'textarea':
      inputElement = <SimpleTextInput id={fieldId} type="textarea" rows={field.rows || 4} value={value} onChange={handleFieldChange} className={baseClasses} placeholder={field.placeholder} />;
      break;
    case 'select':
      inputElement = <SimpleSelectInput id={fieldId} value={value} onChange={handleFieldChange} options={field.options} placeholder={field.placeholder || `Select ${field.label}`} className={baseClasses} />;
      break;
    case 'country-select':
      inputElement = <SimpleCountrySelect id={fieldId} value={value} onChange={handleFieldChange} options={field.options} placeholder={field.placeholder || `Select ${field.label}`} className={baseClasses} />;
      break;
    default:
      inputElement = <SimpleTextInput id={fieldId} type={field.type} value={value} onChange={handleFieldChange} className={baseClasses} placeholder={field.placeholder} />;
      break;
  }

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-2">
        {field.label} {field.required && '*'}
      </label>
      <div className="relative">
        {IconComponent && <IconComponent size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
        {inputElement}
      </div>
    </div>
  );
};

const CategoryCard = ({ category, onClick }) => {
  const IconComponent = category.icon;
  
  return (
    <div onClick={onClick} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-green-500 p-6 text-center min-h-[160px] flex flex-col justify-center" role="button" tabIndex={0}>
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <IconComponent size={24} className="text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.label}</h3>
      <p className="text-sm text-gray-600">{category.description}</p>
    </div>
  );
};

const SportsRegistration = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({});
  const [photoPreview, setPhotoPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentFormConfig = FORM_CONFIGS[selectedCategory] || [];
  const requiredFields = currentFormConfig.filter(field => field.required).map(field => field.name);

  const handleInputChange = (fieldName, value, dataUrl) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    if (fieldName === 'profilePhoto' && dataUrl) {
      setPhotoPreview(dataUrl);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setFormData({});
    setPhotoPreview('');
  };

  const validateForm = () => {
    return requiredFields.filter(field => {
      const value = formData[field];
      return !value || (typeof value === 'string' && value.trim() === '');
    });
  };

  const handleSubmit = async () => {    
    const missingFields = validateForm();
    if (missingFields.length > 0) {
      alert(`Please fill required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', { category: selectedCategory, data: formData });
      alert('Registration submitted successfully!');
      setFormData({});
      setSelectedCategory('');
      setPhotoPreview('');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSelectedCategory('');
    setFormData({});
    setPhotoPreview('');
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join GreenLeaf</h1>
            <p className="text-lg text-gray-600">Choose your category to get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} onClick={() => handleCategorySelect(category.id)} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const categoryLabel = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <button onClick={handleReset} className="text-green-600 hover:text-green-700 mb-4 inline-flex items-center text-sm font-medium" type="button">
            ← Back to categories
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryLabel} Registration</h1>
          <p className="text-lg text-gray-600">Fill in your details to join our sports community</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentFormConfig.map((field) => (
                <FormField key={field.name} field={field} value={formData[field.name]} onChange={handleInputChange} previewUrl={photoPreview} />
              ))}
            </div>

            <PhotoUpload onChange={handleInputChange} previewUrl={photoPreview} />
          </div>

          <div className="mt-8 flex gap-4">
            <button onClick={handleSubmit} disabled={isSubmitting} className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 px-6 rounded-lg font-medium transition-colors">
              {isSubmitting ? 'Submitting...' : 'Complete Registration'}
            </button>
            <button onClick={handleReset} disabled={isSubmitting} className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsRegistration;