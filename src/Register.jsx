import React, { useState, useRef } from 'react';
import { User, Users, Trophy, Heart, MapPin, Globe, Calendar, Camera, Trash2, X, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

const TRANSLATIONS = {
  en: {
    dir: 'ltr',
    joinTitle: 'Join GreenLeaf',
    joinSubtitle: 'Choose your category to get started',
    registrationSuffix: 'Registration',
    fillDetails: 'Fill in your details to join our sports community',
    backToCategories: '← Back to categories',
    completeRegistration: 'Complete Registration',
    submitting: 'Submitting...',
    cancel: 'Cancel',
    profilePhoto: 'Profile Photo',
    uploadPhoto: 'Upload a photo',
    photoUploaded: 'Photo uploaded successfully!',
    changePhoto: 'Change Photo',
    photoHint: 'PNG, JPG, GIF up to 10MB',
    cropTitle: 'Crop Profile Photo',
    choosePhoto: 'Choose Photo',
    uploadToStart: 'Upload a photo to get started',
    zoom: 'Zoom',
    rotation: 'Rotation',
    cropAndUpload: 'Crop & Upload',
    requiredMark: '*',
    selectPlaceholder: (label) => `Select ${label}`,
    missingFields: (fields) => `Please fill required fields: ${fields}`,
    successMessage: 'Registration submitted successfully!',
    failMessage: 'Submission failed. Please try again.',
    categories: {
      athlete: { label: 'Athlete', description: 'Professional or amateur sports player' },
      coach: { label: 'Coach', description: 'Sports coach or trainer' },
      scout: { label: 'Scout', description: 'Talent scout or sports agent' },
      sportProfessional: { label: 'Sport Professional', description: 'Sports industry professional' },
      fan: { label: 'Fan', description: 'Sports enthusiast and supporter' },
    },
    fields: {
      fullName: 'Full Name',
      profession: 'Profession',
      sport: 'Sport Name',
      dateOfBirth: 'Date of Birth',
      aboutYourself: 'Write about yourself',
      currentTeam: 'Current Team',
      coachingSport: 'Coaching Sport',
      currentCompany: 'Current Company',
      firstName: 'First Name',
      lastName: 'Last Name',
      currentCompanyName: 'Company',
      countryOfResidence: 'Country',
      email: 'Email',
    },
    placeholders: {
      fullName: 'Enter your full name',
      profession: 'e.g., Professional Footballer',
      currentTeam: 'e.g., Lagos United FC',
      coachProfession: 'e.g., Head Coach',
      currentCompany: 'e.g., SportsTalent Agency',
      firstName: 'Enter first name',
      lastName: 'Enter last name',
      currentCompanyName: 'Company name',
      email: 'Enter email',
    },
  },
  ar: {
    dir: 'rtl',
    joinTitle: 'انضم إلى GreenLeaf',
    joinSubtitle: 'اختر فئتك للبدء',
    registrationSuffix: 'تسجيل',
    fillDetails: 'أدخل بياناتك للانضمام إلى مجتمعنا الرياضي',
    backToCategories: 'العودة إلى الفئات →',
    completeRegistration: 'إتمام التسجيل',
    submitting: 'جارٍ الإرسال...',
    cancel: 'إلغاء',
    profilePhoto: 'صورة الملف الشخصي',
    uploadPhoto: 'رفع صورة',
    photoUploaded: 'تم رفع الصورة بنجاح!',
    changePhoto: 'تغيير الصورة',
    photoHint: 'PNG, JPG, GIF حتى 10MB',
    cropTitle: 'قص صورة الملف الشخصي',
    choosePhoto: 'اختر صورة',
    uploadToStart: 'ارفع صورة للبدء',
    zoom: 'تكبير',
    rotation: 'دوران',
    cropAndUpload: 'قص ورفع',
    requiredMark: '*',
    selectPlaceholder: (label) => `اختر ${label}`,
    missingFields: (fields) => `يرجى ملء الحقول المطلوبة: ${fields}`,
    successMessage: 'تم إرسال التسجيل بنجاح!',
    failMessage: 'فشل الإرسال. يرجى المحاولة مرة أخرى.',
    categories: {
      athlete: { label: 'رياضي', description: 'لاعب رياضي محترف أو هاوٍ' },
      coach: { label: 'مدرب', description: 'مدرب رياضي أو مدرب بدني' },
      scout: { label: 'كاشف مواهب', description: 'كاشف مواهب أو وكيل رياضي' },
      sportProfessional: { label: 'محترف رياضي', description: 'متخصص في الصناعة الرياضية' },
      fan: { label: 'مشجع', description: 'متحمس للرياضة وداعم' },
    },
    fields: {
      fullName: 'الاسم الكامل',
      profession: 'المهنة',
      sport: 'اسم الرياضة',
      dateOfBirth: 'تاريخ الميلاد',
      aboutYourself: 'اكتب عن نفسك',
      currentTeam: 'الفريق الحالي',
      coachingSport: 'رياضة التدريب',
      currentCompany: 'الشركة الحالية',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      currentCompanyName: 'الشركة',
      countryOfResidence: 'الدولة',
      email: 'البريد الإلكتروني',
    },
    placeholders: {
      fullName: 'أدخل اسمك الكامل',
      profession: 'مثال: لاعب كرة قدم محترف',
      currentTeam: 'مثال: نادي لاغوس المتحد',
      coachProfession: 'مثال: المدرب الرئيسي',
      currentCompany: 'مثال: وكالة المواهب الرياضية',
      firstName: 'أدخل الاسم الأول',
      lastName: 'أدخل اسم العائلة',
      currentCompanyName: 'اسم الشركة',
      email: 'أدخل البريد الإلكتروني',
    },
  },
  fr: {
    dir: 'ltr',
    joinTitle: 'Rejoindre GreenLeaf',
    joinSubtitle: 'Choisissez votre catégorie pour commencer',
    registrationSuffix: 'Inscription',
    fillDetails: 'Remplissez vos informations pour rejoindre notre communauté sportive',
    backToCategories: '← Retour aux catégories',
    completeRegistration: "Terminer l'inscription",
    submitting: 'Envoi en cours...',
    cancel: 'Annuler',
    profilePhoto: 'Photo de profil',
    uploadPhoto: 'Télécharger une photo',
    photoUploaded: 'Photo téléchargée avec succès !',
    changePhoto: 'Changer la photo',
    photoHint: 'PNG, JPG, GIF jusqu\'à 10 Mo',
    cropTitle: 'Recadrer la photo de profil',
    choosePhoto: 'Choisir une photo',
    uploadToStart: 'Téléchargez une photo pour commencer',
    zoom: 'Zoom',
    rotation: 'Rotation',
    cropAndUpload: 'Recadrer et télécharger',
    requiredMark: '*',
    selectPlaceholder: (label) => `Sélectionner ${label}`,
    missingFields: (fields) => `Veuillez remplir les champs requis : ${fields}`,
    successMessage: 'Inscription soumise avec succès !',
    failMessage: "L'envoi a échoué. Veuillez réessayer.",
    categories: {
      athlete: { label: 'Athlète', description: 'Sportif professionnel ou amateur' },
      coach: { label: 'Entraîneur', description: 'Coach sportif ou entraîneur' },
      scout: { label: 'Recruteur', description: 'Détecteur de talents ou agent sportif' },
      sportProfessional: { label: 'Professionnel du sport', description: 'Professionnel de l\'industrie sportive' },
      fan: { label: 'Fan', description: 'Passionné de sport et supporter' },
    },
    fields: {
      fullName: 'Nom complet',
      profession: 'Profession',
      sport: 'Nom du sport',
      dateOfBirth: 'Date de naissance',
      aboutYourself: 'Parlez de vous',
      currentTeam: 'Équipe actuelle',
      coachingSport: 'Sport entraîné',
      currentCompany: 'Entreprise actuelle',
      firstName: 'Prénom',
      lastName: 'Nom de famille',
      currentCompanyName: 'Entreprise',
      countryOfResidence: 'Pays',
      email: 'E-mail',
    },
    placeholders: {
      fullName: 'Entrez votre nom complet',
      profession: 'ex. : Footballeur professionnel',
      currentTeam: 'ex. : Lagos United FC',
      coachProfession: 'ex. : Entraîneur principal',
      currentCompany: 'ex. : SportsTalent Agency',
      firstName: 'Entrez le prénom',
      lastName: 'Entrez le nom de famille',
      currentCompanyName: "Nom de l'entreprise",
      email: "Entrez l'e-mail",
    },
  },
};

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

const CATEGORIES = ['athlete', 'coach', 'scout', 'sportProfessional', 'fan'];
const CATEGORY_ICONS = { athlete: Trophy, coach: Users, scout: User, sportProfessional: Globe, fan: Heart };

const getFormConfigs = (t) => ({
  athlete: [
    { name: 'fullName', label: t.fields.fullName, type: 'text', required: true, placeholder: t.placeholders.fullName },
    { name: 'profession', label: t.fields.profession, type: 'text', required: true, placeholder: t.placeholders.profession },
    { name: 'sport', label: t.fields.sport, type: 'select', required: true, options: SPORTS },
    { name: 'dateOfBirth', label: t.fields.dateOfBirth, type: 'date', required: true, icon: Calendar },
    { name: 'aboutYourself', label: t.fields.aboutYourself, type: 'textarea', required: true, rows: 4 }
  ],
  coach: [
    { name: 'fullName', label: t.fields.fullName, type: 'text', required: true, placeholder: t.placeholders.fullName },
    { name: 'currentTeam', label: t.fields.currentTeam, type: 'text', required: true, placeholder: t.placeholders.currentTeam },
    { name: 'profession', label: t.fields.profession, type: 'text', required: true, placeholder: t.placeholders.coachProfession },
    { name: 'coachingSport', label: t.fields.coachingSport, type: 'select', required: true, options: SPORTS }
  ],
  scout: [
    { name: 'fullName', label: t.fields.fullName, type: 'text', required: true, placeholder: t.placeholders.fullName },
    { name: 'currentCompany', label: t.fields.currentCompany, type: 'text', required: true, placeholder: t.placeholders.currentCompany }
  ],
  sportProfessional: [
    { name: 'firstName', label: t.fields.firstName, type: 'text', required: true, placeholder: t.placeholders.firstName },
    { name: 'lastName', label: t.fields.lastName, type: 'text', required: true, placeholder: t.placeholders.lastName },
    { name: 'currentCompanyName', label: t.fields.currentCompanyName, type: 'text', required: true, placeholder: t.placeholders.currentCompanyName },
    { name: 'countryOfResidence', label: t.fields.countryOfResidence, type: 'country-select', required: true, options: COUNTRIES }
  ],
  fan: [
    { name: 'firstName', label: t.fields.firstName, type: 'text', required: true, placeholder: t.placeholders.firstName },
    { name: 'lastName', label: t.fields.lastName, type: 'text', required: true, placeholder: t.placeholders.lastName },
    { name: 'email', label: t.fields.email, type: 'email', required: true, placeholder: t.placeholders.email }
  ]
});

const LanguageSwitcher = ({ lang, setLang }) => {
  const options = [
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'ar', label: 'AR', full: 'العربية' },
    { code: 'fr', label: 'FR', full: 'Français' },
  ];
  return (
    <div
      style={{
        direction: 'ltr',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '9999px',
        padding: '4px 8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}
    >
      <Globe size={14} style={{ color: '#9ca3af', marginRight: '4px', flexShrink: 0 }} />
      {options.map((opt, i) => (
        <React.Fragment key={opt.code}>
          <button
            onClick={() => setLang(opt.code)}
            title={opt.full}
            style={{
              fontSize: '11px',
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              width: '32px',
              textAlign: 'center',
              flexShrink: 0,
              transition: 'background 0.15s, color 0.15s',
              background: lang === opt.code ? '#16a34a' : 'transparent',
              color: lang === opt.code ? 'white' : '#6b7280',
            }}
          >
            {opt.label}
          </button>
          {i < options.length - 1 && (
            <span style={{ color: '#e5e7eb', fontSize: '12px', flexShrink: 0 }}>|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const SimpleTextInput = ({ id, type, value, onChange, placeholder, className, rows }) => {
  if (type === 'textarea') {
    return <textarea id={id} value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={className} rows={rows} />;
  }
  return <input id={id} type={type || 'text'} value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={className} />;
};

const SimpleSelectInput = ({ id, value, onChange, options, placeholder, className }) => (
  <select id={id} value={value || ''} onChange={(e) => onChange(e.target.value)} className={className}>
    <option value="">{placeholder}</option>
    {options?.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
);

const SimpleCountrySelect = ({ id, value, onChange, options, placeholder, className }) => (
  <select id={id} value={value || ''} onChange={(e) => onChange(e.target.value)} className={className}>
    <option value="">{placeholder}</option>
    {options?.map(country => <option key={country.code} value={country.name}>{country.flag} {country.name}</option>)}
  </select>
);

const ImageCropperModal = ({ isOpen, onClose, onCropComplete, t }) => {
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
    if (handle) { setIsResizing(true); setResizeHandle(handle); setIsDragging(false); }
    else { setIsDragging(true); setIsResizing(false); }
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
        if (resizeHandle.includes('e')) newBox.width = Math.max(50, Math.min(rect.width - prev.x, mouseX - prev.x));
        if (resizeHandle.includes('w')) { const newX = Math.max(0, Math.min(prev.x + prev.width - 50, mouseX)); newBox.x = newX; newBox.width = prev.x + prev.width - newX; }
        if (resizeHandle.includes('s')) newBox.height = Math.max(50, Math.min(rect.height - prev.y, mouseY - prev.y));
        if (resizeHandle.includes('n')) { const newY = Math.max(0, Math.min(prev.y + prev.height - 50, mouseY)); newBox.y = newY; newBox.height = prev.y + prev.height - newY; }
        return newBox;
      });
    }
  };

  const handleMouseUp = () => { setIsDragging(false); setIsResizing(false); setResizeHandle(null); };

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
    const offsetX = imgRect.left - containerRect.left;
    const offsetY = imgRect.top - containerRect.top;
    const cropX = (cropBox.x - offsetX) * scaleX;
    const cropY = (cropBox.y - offsetY) * scaleY;
    const cropWidth = cropBox.width * scaleX;
    const cropHeight = cropBox.height * scaleY;
    canvas.width = cropWidth;
    canvas.height = cropHeight;
    ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
    canvas.toBlob((blob) => {
      const croppedFile = new File([blob], 'profile-photo.jpg', { type: 'image/jpeg' });
      onCropComplete(croppedFile, canvas.toDataURL('image/jpeg'));
      handleClose();
    }, 'image/jpeg', 0.9);
  };

  const handleClose = () => { setImage(null); setScale(1); setRotation(0); setCropBox({ x: 50, y: 50, width: 200, height: 200 }); onClose(); };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" dir={t.dir}>
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">{t.cropTitle}</h2>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20} /></button>
        </div>
        <div className="p-6 space-y-6">
          {!image ? (
            <div className="text-center py-12">
              <Camera size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">{t.uploadToStart}</p>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" id="crop-file-input" />
              <label htmlFor="crop-file-input" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium cursor-pointer transition-colors">{t.choosePhoto}</label>
            </div>
          ) : (
            <>
              <div ref={containerRef} className="relative bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center select-none" style={{ height: '500px' }}>
                <canvas ref={canvasRef} className="hidden" />
                <img ref={imageRef} src={image} alt="Preview" className="max-w-full max-h-full object-contain pointer-events-none" style={{ transform: `scale(${scale}) rotate(${rotation}deg)`, transition: 'transform 0.2s' }} />
                <div className="absolute pointer-events-none" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                  <div className="absolute border-2 border-green-500 pointer-events-auto cursor-move" style={{ left: `${cropBox.x}px`, top: `${cropBox.y}px`, width: `${cropBox.width}px`, height: `${cropBox.height}px`, boxShadow: '0 0 0 9999px rgba(0,0,0,0.5)' }} onMouseDown={(e) => handleMouseDown(e, null)}>
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">{[...Array(9)].map((_, i) => <div key={i} className="border border-green-300 border-opacity-40" />)}</div>
                    {['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'].map((handle) => (
                      <div key={handle} className="absolute w-4 h-4 bg-white border-2 border-green-600 rounded-full shadow-md z-10 hover:scale-125 transition-transform"
                        style={{ cursor: `${handle}-resize`, ...(handle.includes('n') && { top: '-8px' }), ...(handle.includes('s') && { bottom: '-8px' }), ...(handle.includes('w') && { left: '-8px' }), ...(handle.includes('e') && { right: '-8px' }), ...(!handle.includes('n') && !handle.includes('s') && { top: 'calc(50% - 8px)' }), ...(!handle.includes('w') && !handle.includes('e') && { left: 'calc(50% - 8px)' }) }}
                        onMouseDown={(e) => handleMouseDown(e, handle)} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.zoom}</label>
                  <div className="flex items-center gap-3"><ZoomOut size={18} className="text-gray-500" /><input type="range" min="0.5" max="3" step="0.1" value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} className="flex-1" /><ZoomIn size={18} className="text-gray-500" /></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.rotation}</label>
                  <div className="flex items-center gap-3"><RotateCw size={18} className="text-gray-500" /><input type="range" min="0" max="360" step="1" value={rotation} onChange={(e) => setRotation(parseInt(e.target.value))} className="flex-1" /><span className="text-sm text-gray-600 w-12">{rotation}°</span></div>
                </div>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => fileInputRef.current?.click()} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors">{t.changePhoto}</button>
                <button type="button" onClick={handleCrop} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">{t.cropAndUpload}</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const PhotoUpload = ({ onChange, previewUrl, t }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCropComplete = (croppedFile, dataUrl) => onChange('profilePhoto', croppedFile, dataUrl);
  return (
    <>
      <ImageCropperModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCropComplete={handleCropComplete} t={t} />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{t.profilePhoto}</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
          {previewUrl ? (
            <div className="space-y-4">
              <img src={previewUrl} alt="Profile preview" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-500" />
              <p className="text-sm text-green-600 font-medium">{t.photoUploaded}</p>
              <button type="button" onClick={() => setIsModalOpen(true)} className="text-green-600 hover:text-green-700 font-medium text-sm">{t.changePhoto}</button>
            </div>
          ) : (
            <>
              <Camera size={40} className="mx-auto text-gray-400 mb-4" />
              <button type="button" onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                <span className="text-green-600 hover:text-green-700 font-medium">{t.uploadPhoto}</span>
              </button>
              <p className="text-xs text-gray-500 mt-2">{t.photoHint}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const FormField = ({ field, value, onChange, previewUrl, t }) => {
  const fieldId = `${field.name}-input`;
  const IconComponent = field.icon;
  const baseClasses = `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${IconComponent ? 'pl-10' : ''}`;

  const handleFieldChange = (newValue, dataUrl) => {
    if (field.name === 'profilePhoto') onChange(field.name, newValue, dataUrl);
    else onChange(field.name, newValue);
  };

  let inputElement;
  switch (field.type) {
    case 'textarea':
      inputElement = <SimpleTextInput id={fieldId} type="textarea" rows={field.rows || 4} value={value} onChange={handleFieldChange} className={baseClasses} placeholder={field.placeholder} />;
      break;
    case 'select':
      inputElement = <SimpleSelectInput id={fieldId} value={value} onChange={handleFieldChange} options={field.options} placeholder={t.selectPlaceholder(field.label)} className={baseClasses} />;
      break;
    case 'country-select':
      inputElement = <SimpleCountrySelect id={fieldId} value={value} onChange={handleFieldChange} options={field.options} placeholder={t.selectPlaceholder(field.label)} className={baseClasses} />;
      break;
    default:
      inputElement = <SimpleTextInput id={fieldId} type={field.type} value={value} onChange={handleFieldChange} className={baseClasses} placeholder={field.placeholder} />;
      break;
  }

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-2">{field.label} {field.required && t.requiredMark}</label>
      <div className="relative">
        {IconComponent && <IconComponent size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
        {inputElement}
      </div>
    </div>
  );
};

const CategoryCard = ({ categoryId, t, onClick }) => {
  const IconComponent = CATEGORY_ICONS[categoryId];
  const cat = t.categories[categoryId];
  return (
    <div onClick={onClick} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-green-500 p-6 text-center min-h-[160px] flex flex-col justify-center" role="button" tabIndex={0}>
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <IconComponent size={24} className="text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.label}</h3>
      <p className="text-sm text-gray-600">{cat.description}</p>
    </div>
  );
};

const SportsRegistration = () => {
  const [lang, setLang] = useState('en');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({});
  const [photoPreview, setPhotoPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = TRANSLATIONS[lang];
  const formConfigs = getFormConfigs(t);
  const currentFormConfig = formConfigs[selectedCategory] || [];
  const requiredFields = currentFormConfig.filter(f => f.required).map(f => f.name);

  const handleInputChange = (fieldName, value, dataUrl) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    if (fieldName === 'profilePhoto' && dataUrl) setPhotoPreview(dataUrl);
  };

  const handleCategorySelect = (categoryId) => { setSelectedCategory(categoryId); setFormData({}); setPhotoPreview(''); };
  const handleReset = () => { setSelectedCategory(''); setFormData({}); setPhotoPreview(''); };

  const validateForm = () => requiredFields.filter(field => { const value = formData[field]; return !value || (typeof value === 'string' && value.trim() === ''); });

  const handleSubmit = async () => {
    const missingFields = validateForm();
    if (missingFields.length > 0) { alert(t.missingFields(missingFields.join(', '))); return; }
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(t.successMessage);
      setFormData({}); setSelectedCategory(''); setPhotoPreview('');
    } catch (error) {
      alert(t.failMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50" dir={t.dir}>
        <div dir="ltr" style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 9999 }}>
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-4" style={{ height: '40px' }} />
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.joinTitle}</h1>
            <p className="text-lg text-gray-600">{t.joinSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((categoryId) => (
              <CategoryCard key={categoryId} categoryId={categoryId} t={t} onClick={() => handleCategorySelect(categoryId)} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const categoryLabel = t.categories[selectedCategory]?.label || selectedCategory;

  return (
    <div className="min-h-screen bg-gray-50" dir={t.dir}>
      <div dir="ltr" style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 9999 }}>
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div style={{ height: '40px' }} />
        <div className="text-center mb-8">
          <button onClick={handleReset} className="text-green-600 hover:text-green-700 mb-4 inline-flex items-center text-sm font-medium" type="button">
            {t.backToCategories}
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryLabel} {t.registrationSuffix}</h1>
          <p className="text-lg text-gray-600">{t.fillDetails}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentFormConfig.map((field) => (
                <FormField key={field.name} field={field} value={formData[field.name]} onChange={handleInputChange} previewUrl={photoPreview} t={t} />
              ))}
            </div>
            <PhotoUpload onChange={handleInputChange} previewUrl={photoPreview} t={t} />
          </div>
          <div className="mt-8 flex gap-4">
            <button onClick={handleSubmit} disabled={isSubmitting} className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 px-6 rounded-lg font-medium transition-colors">
              {isSubmitting ? t.submitting : t.completeRegistration}
            </button>
            <button onClick={handleReset} disabled={isSubmitting} className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors">
              {t.cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsRegistration;
