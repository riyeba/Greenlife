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
      fullName: 'Full Name', profession: 'Profession', sport: 'Sport Name',
      dateOfBirth: 'Date of Birth', aboutYourself: 'Write about yourself',
      currentTeam: 'Current Team', coachingSport: 'Coaching Sport',
      currentCompany: 'Current Company', firstName: 'First Name',
      lastName: 'Last Name', currentCompanyName: 'Company',
      countryOfResidence: 'Country', email: 'Email',
    },
    placeholders: {
      fullName: 'Enter your full name', profession: 'e.g., Professional Footballer',
      currentTeam: 'e.g., Lagos United FC', coachProfession: 'e.g., Head Coach',
      currentCompany: 'e.g., SportsTalent Agency', firstName: 'Enter first name',
      lastName: 'Enter last name', currentCompanyName: 'Company name', email: 'Enter email',
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
      fullName: 'الاسم الكامل', profession: 'المهنة', sport: 'اسم الرياضة',
      dateOfBirth: 'تاريخ الميلاد', aboutYourself: 'اكتب عن نفسك',
      currentTeam: 'الفريق الحالي', coachingSport: 'رياضة التدريب',
      currentCompany: 'الشركة الحالية', firstName: 'الاسم الأول',
      lastName: 'اسم العائلة', currentCompanyName: 'الشركة',
      countryOfResidence: 'الدولة', email: 'البريد الإلكتروني',
    },
    placeholders: {
      fullName: 'أدخل اسمك الكامل', profession: 'مثال: لاعب كرة قدم محترف',
      currentTeam: 'مثال: نادي لاغوس المتحد', coachProfession: 'مثال: المدرب الرئيسي',
      currentCompany: 'مثال: وكالة المواهب الرياضية', firstName: 'أدخل الاسم الأول',
      lastName: 'أدخل اسم العائلة', currentCompanyName: 'اسم الشركة', email: 'أدخل البريد الإلكتروني',
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
    photoHint: "PNG, JPG, GIF jusqu'à 10 Mo",
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
      sportProfessional: { label: 'Professionnel du sport', description: "Professionnel de l'industrie sportive" },
      fan: { label: 'Fan', description: 'Passionné de sport et supporter' },
    },
    fields: {
      fullName: 'Nom complet', profession: 'Profession', sport: 'Nom du sport',
      dateOfBirth: 'Date de naissance', aboutYourself: 'Parlez de vous',
      currentTeam: 'Équipe actuelle', coachingSport: 'Sport entraîné',
      currentCompany: 'Entreprise actuelle', firstName: 'Prénom',
      lastName: 'Nom de famille', currentCompanyName: 'Entreprise',
      countryOfResidence: 'Pays', email: 'E-mail',
    },
    placeholders: {
      fullName: 'Entrez votre nom complet', profession: 'ex. : Footballeur professionnel',
      currentTeam: 'ex. : Lagos United FC', coachProfession: 'ex. : Entraîneur principal',
      currentCompany: 'ex. : SportsTalent Agency', firstName: 'Entrez le prénom',
      lastName: 'Entrez le nom de famille', currentCompanyName: "Nom de l'entreprise", email: "Entrez l'e-mail",
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

const SPORTS = ['Athletics', 'Basketball', 'Football', 'Tennis', 'Swimming', 'Cricket', 'Golf', 'Other'];
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

// ─── Responsive styles injected once ───────────────────────────────────────
const GLOBAL_STYLES = `
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 0; }

  .reg-page {
    min-height: 100vh;
    background: #f9fafb;
    padding: 0 0 40px;
    overflow-x: hidden;
  }

  /* Language switcher – always LTR, top-right */
  .lang-switcher-wrap {
    position: fixed;
    top: 72px;          /* below header */
    right: 16px;
    z-index: 999;
  }
  @media (max-width: 480px) {
    .lang-switcher-wrap { top: 64px; right: 8px; }
  }

  .lang-switcher {
    display: flex;
    align-items: center;
    gap: 2px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 9999px;
    padding: 4px 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    white-space: nowrap;
    user-select: none;
  }
  .lang-btn {
    font-size: 11px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    width: 32px;
    text-align: center;
    transition: background 0.15s, color 0.15s;
  }

  /* Page container */
  .reg-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 16px 24px;  /* top padding accounts for fixed header + lang switcher */
  }
  @media (min-width: 640px) {
    .reg-container { padding: 88px 24px 32px; }
  }
  @media (min-width: 1024px) {
    .reg-container { padding: 100px 40px 40px; }
  }

  /* Header text */
  .reg-title {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    font-weight: 800;
    color: #111827;
    margin: 0 0 12px;
    line-height: 1.2;
  }
  .reg-subtitle {
    font-size: clamp(0.875rem, 2.5vw, 1.125rem);
    color: #6b7280;
    margin: 0 0 32px;
  }

  /* Category grid */
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media (min-width: 480px) {
    .categories-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  }
  @media (min-width: 640px) {
    .categories-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (min-width: 1024px) {
    .categories-grid { grid-template-columns: repeat(5, 1fr); gap: 20px; }
  }

  /* Category card */
  .cat-card {
    background: white;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    border: 2px solid transparent;
    padding: 20px 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 140px;
  }
  .cat-card:hover {
    border-color: #16a34a;
    box-shadow: 0 8px 24px rgba(22,163,74,0.18);
    transform: translateY(-4px);
  }
  @media (max-width: 479px) {
    .cat-card { padding: 16px 8px; min-height: 120px; }
    .cat-card-title { font-size: 14px !important; }
    .cat-card-desc { font-size: 11px !important; }
    .cat-icon-wrap { width: 44px !important; height: 44px !important; margin-bottom: 10px !important; }
  }

  /* Form card */
  .form-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    padding: 20px 16px;
  }
  @media (min-width: 640px) {
    .form-card { padding: 28px 24px; }
  }
  @media (min-width: 768px) {
    .form-card { padding: 36px 32px; }
  }

  /* Form grid */
  .form-fields-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media (min-width: 640px) {
    .form-fields-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  }

  /* Textarea spans full width */
  .field-fullwidth {
    grid-column: 1 / -1;
  }

  /* Inputs */
  .reg-input, .reg-select, .reg-textarea {
    width: 100%;
    padding: 10px 14px;
    border: 1.5px solid #d1d5db;
    border-radius: 10px;
    font-size: clamp(14px, 2vw, 15px);
    color: #111827;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
  }
  .reg-input:focus, .reg-select:focus, .reg-textarea:focus {
    border-color: #16a34a;
    box-shadow: 0 0 0 3px rgba(22,163,74,0.12);
  }
  .reg-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 36px;
    cursor: pointer;
  }
  [dir="rtl"] .reg-select {
    background-position: left 12px center;
    padding-right: 14px;
    padding-left: 36px;
  }
  .reg-textarea { resize: vertical; min-height: 100px; }
  .reg-input-with-icon { padding-left: 40px; }
  [dir="rtl"] .reg-input-with-icon { padding-left: 14px; padding-right: 40px; }

  /* Field label */
  .field-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 6px;
  }

  /* Photo upload */
  .photo-upload-box {
    border: 2px dashed #d1d5db;
    border-radius: 12px;
    padding: 28px 16px;
    text-align: center;
    transition: border-color 0.2s;
  }
  .photo-upload-box:hover { border-color: #16a34a; }

  /* Action buttons */
  .btn-primary {
    flex: 1;
    min-width: 0;
    background: #16a34a;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 12px 16px;
    font-size: clamp(14px, 2vw, 15px);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .btn-primary:hover:not(:disabled) { background: #15803d; }
  .btn-primary:disabled { background: #86efac; cursor: not-allowed; }

  .btn-secondary {
    background: #f3f4f6;
    color: #374151;
    border: none;
    border-radius: 10px;
    padding: 12px 20px;
    font-size: clamp(14px, 2vw, 15px);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .btn-secondary:hover:not(:disabled) { background: #e5e7eb; }

  .btn-row {
    display: flex;
    gap: 12px;
    margin-top: 28px;
    align-items: stretch;
  }
  @media (max-width: 400px) {
    .btn-row { flex-direction: column; }
    .btn-secondary { flex: 1; }
  }

  /* Crop modal */
  .crop-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }
  .crop-modal {
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    width: 100%;
    max-width: 800px;
    max-height: 95vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  .crop-modal-header {
    position: sticky;
    top: 0;
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    flex-shrink: 0;
  }
  .crop-canvas-area {
    position: relative;
    background: #f9fafb;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: clamp(260px, 50vw, 480px);
    user-select: none;
  }
  .crop-controls {
    padding: 16px 20px 20px;
  }
`;

// ─── Language Switcher ──────────────────────────────────────────────────────
const LanguageSwitcher = ({ lang, setLang }) => {
  const options = [
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'ar', label: 'AR', full: 'العربية' },
    { code: 'fr', label: 'FR', full: 'Français' },
  ];
  return (
    <div className="lang-switcher" dir="ltr">
      <Globe size={14} style={{ color: '#9ca3af', marginRight: 4, flexShrink: 0 }} />
      {options.map((opt, i) => (
        <React.Fragment key={opt.code}>
          <button
            onClick={() => setLang(opt.code)}
            title={opt.full}
            className="lang-btn"
            style={{
              background: lang === opt.code ? '#16a34a' : 'transparent',
              color: lang === opt.code ? 'white' : '#6b7280',
            }}
          >
            {opt.label}
          </button>
          {i < options.length - 1 && <span style={{ color: '#e5e7eb', fontSize: 12, flexShrink: 0 }}>|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

// ─── Input Components ───────────────────────────────────────────────────────
const SimpleTextInput = ({ id, type, value, onChange, placeholder, rows }) => {
  if (type === 'textarea')
    return <textarea id={id} value={value || ''} onChange={e => onChange(e.target.value)} placeholder={placeholder} className="reg-textarea" rows={rows} />;
  return <input id={id} type={type || 'text'} value={value || ''} onChange={e => onChange(e.target.value)} placeholder={placeholder} className="reg-input" />;
};

const SimpleSelectInput = ({ id, value, onChange, options, placeholder }) => (
  <select id={id} value={value || ''} onChange={e => onChange(e.target.value)} className="reg-select">
    <option value="">{placeholder}</option>
    {options?.map(o => <option key={o} value={o}>{o}</option>)}
  </select>
);

const SimpleCountrySelect = ({ id, value, onChange, options, placeholder }) => (
  <select id={id} value={value || ''} onChange={e => onChange(e.target.value)} className="reg-select">
    <option value="">{placeholder}</option>
    {options?.map(c => <option key={c.code} value={c.name}>{c.flag} {c.name}</option>)}
  </select>
);

// ─── Image Cropper Modal ────────────────────────────────────────────────────
const ImageCropperModal = ({ isOpen, onClose, onCropComplete, t }) => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [cropBox, setCropBox] = useState({ x: 40, y: 40, width: 180, height: 180 });
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
      reader.onload = ev => { setImage(ev.target.result); setCropBox({ x: 40, y: 40, width: 180, height: 180 }); };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e, handle) => {
    e.preventDefault(); e.stopPropagation();
    if (handle) { setIsResizing(true); setResizeHandle(handle); setIsDragging(false); }
    else { setIsDragging(true); setIsResizing(false); }
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleTouchStart = (e, handle) => {
    const touch = e.touches[0];
    handleMouseDown({ preventDefault: () => {}, stopPropagation: () => {}, clientX: touch.clientX, clientY: touch.clientY }, handle);
  };

  const getEventCoords = (e) => {
    if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  };

  const handleMove = (e) => {
    if (!isDragging && !isResizing) return;
    const { x: clientX, y: clientY } = getEventCoords(e);
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    if (isDragging) {
      const deltaX = clientX - dragStart.x;
      const deltaY = clientY - dragStart.y;
      setCropBox(prev => ({
        ...prev,
        x: Math.max(0, Math.min(rect.width - prev.width, prev.x + deltaX)),
        y: Math.max(0, Math.min(rect.height - prev.height, prev.y + deltaY))
      }));
      setDragStart({ x: clientX, y: clientY });
    } else if (isResizing) {
      setCropBox(prev => {
        let nb = { ...prev };
        if (resizeHandle.includes('e')) nb.width = Math.max(50, Math.min(rect.width - prev.x, mouseX - prev.x));
        if (resizeHandle.includes('w')) { const nx = Math.max(0, Math.min(prev.x + prev.width - 50, mouseX)); nb.x = nx; nb.width = prev.x + prev.width - nx; }
        if (resizeHandle.includes('s')) nb.height = Math.max(50, Math.min(rect.height - prev.y, mouseY - prev.y));
        if (resizeHandle.includes('n')) { const ny = Math.max(0, Math.min(prev.y + prev.height - 50, mouseY)); nb.y = ny; nb.height = prev.y + prev.height - ny; }
        return nb;
      });
    }
  };

  const handleUp = () => { setIsDragging(false); setIsResizing(false); setResizeHandle(null); };

  const handleCrop = () => {
    if (!image || !canvasRef.current || !imageRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;
    const container = containerRef.current;
    const cr = container.getBoundingClientRect();
    const ir = img.getBoundingClientRect();
    const sx = img.naturalWidth / ir.width;
    const sy = img.naturalHeight / ir.height;
    const ox = ir.left - cr.left;
    const oy = ir.top - cr.top;
    canvas.width = cropBox.width * sx;
    canvas.height = cropBox.height * sy;
    ctx.drawImage(img, (cropBox.x - ox) * sx, (cropBox.y - oy) * sy, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(blob => {
      const file = new File([blob], 'profile-photo.jpg', { type: 'image/jpeg' });
      onCropComplete(file, canvas.toDataURL('image/jpeg'));
      handleClose();
    }, 'image/jpeg', 0.9);
  };

  const handleClose = () => { setImage(null); setScale(1); setRotation(0); setCropBox({ x: 40, y: 40, width: 180, height: 180 }); onClose(); };

  if (!isOpen) return null;

  return (
    <div className="crop-modal-overlay" onMouseMove={handleMove} onMouseUp={handleUp} onTouchMove={handleMove} onTouchEnd={handleUp} dir={t.dir}>
      <div className="crop-modal">
        <div className="crop-modal-header">
          <h2 style={{ fontSize: 'clamp(15px,3vw,19px)', fontWeight: 700, margin: 0, color: '#111827' }}>{t.cropTitle}</h2>
          <button onClick={handleClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 8 }}><X size={20} /></button>
        </div>
        <div style={{ padding: '16px 20px', flex: 1 }}>
          {!image ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <Camera size={44} style={{ color: '#9ca3af', display: 'block', margin: '0 auto 16px' }} />
              <p style={{ color: '#6b7280', marginBottom: 16, fontSize: 14 }}>{t.uploadToStart}</p>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} style={{ display: 'none' }} id="crop-file-input" />
              <label htmlFor="crop-file-input" style={{ display: 'inline-block', background: '#16a34a', color: 'white', padding: '10px 24px', borderRadius: 10, fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>{t.choosePhoto}</label>
            </div>
          ) : (
            <>
              <div ref={containerRef} className="crop-canvas-area">
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <img ref={imageRef} src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', pointerEvents: 'none', transform: `scale(${scale}) rotate(${rotation}deg)`, transition: 'transform 0.2s' }} />
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                  <div
                    style={{ position: 'absolute', left: cropBox.x, top: cropBox.y, width: cropBox.width, height: cropBox.height, border: '2px solid #16a34a', cursor: 'move', pointerEvents: 'auto', boxShadow: '0 0 0 9999px rgba(0,0,0,0.45)' }}
                    onMouseDown={e => handleMouseDown(e, null)}
                    onTouchStart={e => handleTouchStart(e, null)}
                  >
                    {['nw','n','ne','w','e','sw','s','se'].map(h => (
                      <div key={h} style={{
                        position: 'absolute', width: 14, height: 14, background: 'white', border: '2px solid #16a34a', borderRadius: '50%', cursor: `${h}-resize`, zIndex: 10,
                        ...(h.includes('n') && { top: -7 }), ...(h.includes('s') && { bottom: -7 }),
                        ...(h.includes('w') && { left: -7 }), ...(h.includes('e') && { right: -7 }),
                        ...(!h.includes('n') && !h.includes('s') && { top: 'calc(50% - 7px)' }),
                        ...(!h.includes('w') && !h.includes('e') && { left: 'calc(50% - 7px)' })
                      }}
                        onMouseDown={e => handleMouseDown(e, h)}
                        onTouchStart={e => handleTouchStart(e, h)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="crop-controls">
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>{t.zoom}</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <ZoomOut size={16} style={{ color: '#6b7280', flexShrink: 0 }} />
                    <input type="range" min="0.5" max="3" step="0.1" value={scale} onChange={e => setScale(parseFloat(e.target.value))} style={{ flex: 1 }} />
                    <ZoomIn size={16} style={{ color: '#6b7280', flexShrink: 0 }} />
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>{t.rotation}</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <RotateCw size={16} style={{ color: '#6b7280', flexShrink: 0 }} />
                    <input type="range" min="0" max="360" step="1" value={rotation} onChange={e => setRotation(parseInt(e.target.value))} style={{ flex: 1 }} />
                    <span style={{ fontSize: 13, color: '#6b7280', width: 36, textAlign: 'right' }}>{rotation}°</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button type="button" onClick={() => fileInputRef.current?.click()} style={{ flex: 1, background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: 10, padding: '10px 12px', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>{t.changePhoto}</button>
                  <button type="button" onClick={handleCrop} style={{ flex: 1, background: '#16a34a', color: 'white', border: 'none', borderRadius: 10, padding: '10px 12px', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>{t.cropAndUpload}</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Photo Upload ───────────────────────────────────────────────────────────
const PhotoUpload = ({ onChange, previewUrl, t }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ImageCropperModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCropComplete={(f, d) => onChange('profilePhoto', f, d)} t={t} />
      <div className="field-fullwidth">
        <label className="field-label">{t.profilePhoto}</label>
        <div className="photo-upload-box">
          {previewUrl ? (
            <div>
              <img src={previewUrl} alt="Profile" style={{ width: 100, height: 100, borderRadius: '50%', margin: '0 auto 12px', objectFit: 'cover', border: '4px solid #16a34a', display: 'block' }} />
              <p style={{ color: '#16a34a', fontWeight: 600, fontSize: 13, marginBottom: 8 }}>{t.photoUploaded}</p>
              <button type="button" onClick={() => setIsModalOpen(true)} style={{ background: 'none', border: 'none', color: '#16a34a', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>{t.changePhoto}</button>
            </div>
          ) : (
            <>
              <Camera size={36} style={{ color: '#9ca3af', display: 'block', margin: '0 auto 12px' }} />
              <button type="button" onClick={() => setIsModalOpen(true)} style={{ background: 'none', border: 'none', color: '#16a34a', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>{t.uploadPhoto}</button>
              <p style={{ color: '#9ca3af', fontSize: 12, marginTop: 6 }}>{t.photoHint}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

// ─── Form Field ─────────────────────────────────────────────────────────────
const FormField = ({ field, value, onChange, t }) => {
  const id = `${field.name}-input`;
  const IconComponent = field.icon;
  const isTextarea = field.type === 'textarea';

  const handleChange = (val) => {
    if (field.name === 'profilePhoto') onChange(field.name, val);
    else onChange(field.name, val);
  };

  let input;
  if (field.type === 'textarea') input = <SimpleTextInput id={id} type="textarea" rows={field.rows || 4} value={value} onChange={handleChange} placeholder={field.placeholder} />;
  else if (field.type === 'select') input = <SimpleSelectInput id={id} value={value} onChange={handleChange} options={field.options} placeholder={t.selectPlaceholder(field.label)} />;
  else if (field.type === 'country-select') input = <SimpleCountrySelect id={id} value={value} onChange={handleChange} options={field.options} placeholder={t.selectPlaceholder(field.label)} />;
  else {
    const cls = `reg-input${IconComponent ? ' reg-input-with-icon' : ''}`;
    input = <input id={id} type={field.type || 'text'} value={value || ''} onChange={e => handleChange(e.target.value)} placeholder={field.placeholder} className={cls} />;
  }

  return (
    <div className={isTextarea ? 'field-fullwidth' : ''}>
      <label htmlFor={id} className="field-label">{field.label} {field.required && <span style={{ color: '#dc2626' }}>*</span>}</label>
      <div style={{ position: 'relative' }}>
        {IconComponent && (
          <IconComponent size={16} style={{ position: 'absolute', left: t.dir === 'rtl' ? 'auto' : 12, right: t.dir === 'rtl' ? 12 : 'auto', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
        )}
        {input}
      </div>
    </div>
  );
};

// ─── Category Card ──────────────────────────────────────────────────────────
const CategoryCard = ({ categoryId, t, onClick }) => {
  const Icon = CATEGORY_ICONS[categoryId];
  const cat = t.categories[categoryId];
  return (
    <div onClick={onClick} className="cat-card" role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onClick()}>
      <div className="cat-icon-wrap" style={{ background: '#dcfce7', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
        <Icon size={22} style={{ color: '#16a34a' }} />
      </div>
      <h3 className="cat-card-title" style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>{cat.label}</h3>
      <p className="cat-card-desc" style={{ fontSize: 12, color: '#6b7280', margin: 0, lineHeight: 1.4 }}>{cat.description}</p>
    </div>
  );
};

// ─── Main Component ─────────────────────────────────────────────────────────
const SportsRegistration = () => {
  const [lang, setLang] = useState('en');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({});
  const [photoPreview, setPhotoPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = TRANSLATIONS[lang];
  const formConfigs = getFormConfigs(t);
  const currentFormConfig = formConfigs[selectedCategory] || [];

  const handleInputChange = (name, value, dataUrl) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'profilePhoto' && dataUrl) setPhotoPreview(dataUrl);
  };

  const handleCategorySelect = (id) => { setSelectedCategory(id); setFormData({}); setPhotoPreview(''); };
  const handleReset = () => { setSelectedCategory(''); setFormData({}); setPhotoPreview(''); };

  const validateForm = () => currentFormConfig.filter(f => f.required).filter(f => { const v = formData[f.name]; return !v || (typeof v === 'string' && !v.trim()); }).map(f => f.name);

  const handleSubmit = async () => {
    const missing = validateForm();
    if (missing.length) { alert(t.missingFields(missing.join(', '))); return; }
    setIsSubmitting(true);
    try {
      await new Promise(r => setTimeout(r, 1000));
      alert(t.successMessage);
      handleReset();
    } catch { alert(t.failMessage); }
    finally { setIsSubmitting(false); }
  };

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <div className="reg-page" dir={t.dir}>
        <div className="lang-switcher-wrap" dir="ltr">
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>

        <div className="reg-container">
          {!selectedCategory ? (
            <>
              <div style={{ textAlign: 'center' }}>
                <h1 className="reg-title">{t.joinTitle}</h1>
                <p className="reg-subtitle">{t.joinSubtitle}</p>
              </div>
              <div className="categories-grid">
                {CATEGORIES.map(id => (
                  <CategoryCard key={id} categoryId={id} t={t} onClick={() => handleCategorySelect(id)} />
                ))}
              </div>
            </>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <button onClick={handleReset} type="button" style={{ background: 'none', border: 'none', color: '#16a34a', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginBottom: 10, display: 'inline-block' }}>
                  {t.backToCategories}
                </button>
                <h1 className="reg-title">{t.categories[selectedCategory]?.label} {t.registrationSuffix}</h1>
                <p className="reg-subtitle">{t.fillDetails}</p>
              </div>
              <div className="form-card">
                <div className="form-fields-grid">
                  {currentFormConfig.map(field => (
                    <FormField key={field.name} field={field} value={formData[field.name]} onChange={handleInputChange} t={t} />
                  ))}
                  <PhotoUpload onChange={handleInputChange} previewUrl={photoPreview} t={t} />
                </div>
                <div className="btn-row">
                  <button className="btn-primary" onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? t.submitting : t.completeRegistration}
                  </button>
                  <button className="btn-secondary" onClick={handleReset} disabled={isSubmitting}>
                    {t.cancel}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SportsRegistration;