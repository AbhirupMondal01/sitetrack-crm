{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red183\green111\blue247;\red23\green24\blue24;\red202\green202\blue202;
\red54\green192\blue160;\red212\green212\blue212;\red113\green192\blue131;\red109\green115\blue120;\red246\green124\blue48;
\red238\green46\blue56;}
{\*\expandedcolortbl;;\cssrgb\c77255\c54118\c97647;\cssrgb\c11765\c12157\c12549;\cssrgb\c83137\c83137\c83137;
\cssrgb\c23922\c78824\c69020;\cssrgb\c86275\c86275\c86275;\cssrgb\c50588\c78824\c58431;\cssrgb\c50196\c52549\c54510;\cssrgb\c98039\c56471\c24314;
\cssrgb\c95686\c27843\c27843;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  useState\cf6 \strokec6 ,\cf4 \strokec4  useEffect\cf6 \strokec6 ,\cf4 \strokec4  useMemo \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  initializeApp \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'firebase/app'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   getAuth\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   onAuthStateChanged\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   signOut\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   signInWithCustomToken\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   signInAnonymously\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'firebase/auth'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   getFirestore\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   collection\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   doc\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   addDoc\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   updateDoc\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   onSnapshot\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   serverTimestamp\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Timestamp\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   getDoc\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'firebase/firestore'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 Users\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Calendar\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Home\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 BarChart3\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Phone\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 MessageSquare\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Plus\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Search\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 ChevronRight\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Filter\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 ArrowLeft\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 MapPin\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Building2\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Clock\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 CheckCircle2\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 XCircle\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 MoreVertical\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 LogOut\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Mail\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Lock\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 ShieldCheck\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Headphones\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 LayoutGrid\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Layers\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Printer\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 PlusCircle\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'lucide-react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- FIREBASE CONFIG ---\cf4 \cb1 \strokec4 \
\cf8 \cb3 \strokec8 // Replace the placeholders with your actual keys from the Firebase Console.\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  firebaseConfig \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   apiKey\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "YOUR_API_KEY"\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   authDomain\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "YOUR_AUTH_DOMAIN"\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   projectId\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "YOUR_PROJECT_ID"\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   storageBucket\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "YOUR_STORAGE_BUCKET"\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   messagingSenderId\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "YOUR_MESSAGING_SENDER_ID"\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   appId\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "YOUR_APP_ID"\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  app \cf6 \strokec6 =\cf4 \strokec4  initializeApp\cf6 \strokec6 (\cf4 \strokec4 firebaseConfig\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 const\cf4 \strokec4  auth \cf6 \strokec6 =\cf4 \strokec4  getAuth\cf6 \strokec6 (\cf4 \strokec4 app\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 const\cf4 \strokec4  db \cf6 \strokec6 =\cf4 \strokec4  getFirestore\cf6 \strokec6 (\cf4 \strokec4 app\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 const\cf4 \strokec4  appId \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'sitetrack-crm-v1'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- SHARED UI COMPONENTS ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 Badge\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  text\cf6 \strokec6 ,\cf4 \strokec4  colorClass \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\{\cf7 \strokec7 `px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider \cf6 \strokec6 $\{\cf4 \strokec4 colorClass\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4 text\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 );\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 SectionHeader\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  title\cf6 \strokec6 ,\cf4 \strokec4  subtitle \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mb-4 px-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]"\cf6 \strokec6 >\{\cf4 \strokec4 title\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4 subtitle \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] text-slate-300 font-bold"\cf6 \strokec6 >\{\cf4 \strokec4 subtitle\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 );\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- AUTHENTICATION SCREEN ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 LoginScreen\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 loading\cf6 \strokec6 ,\cf4 \strokec4  setLoading\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  handleLogin \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 async\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     setLoading\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 try\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf8 \strokec8 // For local development/testing, you can use anonymous auth or signInWithEmailAndPassword.\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 await\cf4 \strokec4  signInAnonymously\cf6 \strokec6 (\cf4 \strokec4 auth\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 catch\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 err\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\cb3       console\cf6 \strokec6 .\cf4 \strokec4 error\cf6 \strokec6 (\cf7 \strokec7 "Auth Error:"\cf6 \strokec6 ,\cf4 \strokec4  err\cf6 \strokec6 );\cf4 \strokec4  \cb1 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 finally\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\cb3       setLoading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \strokec4  \cb1 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col min-h-screen bg-slate-900 p-8 justify-center items-center text-white"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-20 h-20 bg-blue-600 rounded-[2.5rem] flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/30 rotate-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf5 \strokec5 Building2\cf4 \strokec4  color\cf6 \strokec6 =\cf7 \strokec7 "white"\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 40\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "text-4xl font-black tracking-tighter mb-2 italic uppercase"\cf6 \strokec6 >\cf5 \strokec5 SiteTrack\cf6 \strokec6 </\cf4 \strokec4 h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-12 text-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 Prop\cf6 \strokec6 -\cf5 \strokec5 Tech\cf4 \strokec4  \cf5 \strokec5 SaaS\cf4 \strokec4  \cf5 \strokec5 Engine\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-full max-w-xs space-y-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3           onClick\cf6 \strokec6 =\{\cf4 \strokec4 handleLogin\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           disabled\cf6 \strokec6 =\{\cf4 \strokec4 loading\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           className\cf6 \strokec6 =\cf7 \strokec7 "w-full bg-white text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl active:scale-95 transition-all"\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \{\cf4 \strokec4 loading \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'Authenticating...'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Enter Business Portal'\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-center text-slate-500 text-[9px] font-bold uppercase tracking-widest"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 Multi\cf6 \strokec6 -\cf5 \strokec5 Tenant\cf4 \strokec4  \cf5 \strokec5 Secure\cf4 \strokec4  \cf5 \strokec5 Access\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- INVENTORY MANAGEMENT ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 InventoryScreen\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  projects\cf6 \strokec6 ,\cf4 \strokec4  userProfile\cf6 \strokec6 ,\cf4 \strokec4  onProjectSelect \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 activeFilter\cf6 \strokec6 ,\cf4 \strokec4  setActiveFilter\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 'All'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  types \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 'All'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'Apartments'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'Shops'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'Plots'\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  filteredProjects \cf6 \strokec6 =\cf4 \strokec4  projects\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 p \cf6 \strokec6 =>\cf4 \strokec4  activeFilter \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'All'\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  p\cf6 \strokec6 .\cf2 \strokec2 type\cf4 \strokec4  \cf6 \strokec6 ===\cf4 \strokec4  activeFilter\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "pb-24"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 header className\cf6 \strokec6 =\cf7 \strokec7 "p-6 bg-white border-b border-slate-100 flex justify-between items-center sticky top-0 z-20"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-black text-slate-900 tracking-tighter"\cf6 \strokec6 >\cf5 \strokec5 Inventory\cf6 \strokec6 </\cf4 \strokec4 h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-400 text-[10px] font-bold uppercase tracking-widest"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4 userProfile\cf6 \strokec6 ?.\cf4 \strokec4 businessId \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 'Dev_Sandbox'\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{(\cf4 \strokec4 userProfile\cf6 \strokec6 ?.\cf4 \strokec4 role \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'admin'\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  userProfile\cf6 \strokec6 ?.\cf4 \strokec4 role \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'super_admin'\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 button className\cf6 \strokec6 =\cf7 \strokec7 "w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf5 \strokec5 Plus\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 header\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex gap-2 overflow-x-auto no-scrollbar mb-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \{\cf4 \strokec4 types\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3               key\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setActiveFilter\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3               className\cf6 \strokec6 =\{\cf7 \strokec7 `px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border \cf6 \strokec6 $\{\cf4 \cb1 \strokec4 \
\cb3                 activeFilter \cf6 \strokec6 ===\cf4 \strokec4  t \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-slate-900 text-white border-slate-900'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-white text-slate-400 border-slate-100'\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 <\cf5 \strokec5 SectionHeader\cf4 \strokec4  title\cf6 \strokec6 =\cf7 \strokec7 "Active Portfolio"\cf4 \strokec4  subtitle\cf6 \strokec6 =\cf7 \strokec7 "Live unit availability"\cf4 \strokec4  />\cb1 \
\cb3         \cb1 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4 filteredProjects\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "py-20 text-center text-slate-300 font-bold text-xs bg-slate-50 rounded-3xl border border-dashed border-slate-200"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf5 \strokec5 No\cf4 \strokec4  projects listed \cf2 \strokec2 in\cf4 \strokec4  \cf2 \strokec2 this\cf4 \strokec4  category\cf6 \strokec6 .\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           filteredProjects\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 project \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div \cb1 \
\cb3               key\cf6 \strokec6 =\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  onProjectSelect\cf6 \strokec6 (\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3               className\cf6 \strokec6 =\cf7 \strokec7 "bg-white p-5 rounded-3xl border border-slate-100 shadow-sm mb-4 active:scale-[0.98] transition-all cursor-pointer"\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex gap-4 items-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 \{\cf4 \strokec4 project\cf6 \strokec6 .\cf2 \strokec2 type\cf4 \strokec4  \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'Shops'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Layers\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 24\cf6 \strokec6 \}\cf4 \strokec4 /> \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Building2\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 24\cf6 \strokec6 \}\cf4 \strokec4 />\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "font-black text-slate-800 text-base leading-tight"\cf6 \strokec6 >\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1"\cf6 \strokec6 >\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 location\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf5 \strokec5 ChevronRight\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 18\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-200"\cf4 \strokec4  />\cb1 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mt-4 pt-4 border-t border-slate-50 flex justify-between items-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex gap-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[9px] font-black text-slate-300 uppercase"\cf6 \strokec6 >\cf5 \strokec5 Avail\cf6 \strokec6 .</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-sm font-black text-green-600"\cf6 \strokec6 >\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 availableUnits \cf6 \strokec6 ||\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-center border-l border-slate-100 pl-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[9px] font-black text-slate-300 uppercase"\cf6 \strokec6 >\cf5 \strokec5 Type\cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] font-black text-slate-800 uppercase"\cf6 \strokec6 >\{\cf4 \strokec4 project\cf6 \strokec6 .\cf2 \strokec2 type\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf5 \strokec5 Badge\cf4 \strokec4  text\cf6 \strokec6 =\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 status \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 'Active'\cf6 \strokec6 \}\cf4 \strokec4  colorClass\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-100 text-slate-500"\cf4 \strokec4  />\cb1 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 ))\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- LEAD DETAIL ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 LeadDetail\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  leadId\cf6 \strokec6 ,\cf4 \strokec4  leads\cf6 \strokec6 ,\cf4 \strokec4  userProfile\cf6 \strokec6 ,\cf4 \strokec4  onBack \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  lead \cf6 \strokec6 =\cf4 \strokec4  leads\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  leadId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 activeSection\cf6 \strokec6 ,\cf4 \strokec4  setActiveSection\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 'timeline'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 lead\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-20 text-center font-bold text-slate-300 italic uppercase"\cf6 \strokec6 >\cf5 \strokec5 Lead\cf4 \strokec4  \cf5 \strokec5 Not\cf4 \strokec4  \cf5 \strokec5 Found\cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >;\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "min-h-screen bg-slate-50 pb-32"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-white p-4 flex items-center justify-between sticky top-0 border-b border-slate-100 z-30"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{\cf4 \strokec4 onBack\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-lg"\cf4 \strokec4 ><\cf5 \strokec5 ArrowLeft\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  /></button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "font-black text-slate-800 tracking-tight text-sm uppercase"\cf6 \strokec6 >\cf5 \strokec5 Lead\cf4 \strokec4  \cf5 \strokec5 Console\cf6 \strokec6 </\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 button className\cf6 \strokec6 =\cf7 \strokec7 "p-2 bg-blue-50 text-blue-600 rounded-lg active:scale-90 transition-transform"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf5 \strokec5 Printer\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 18\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-white p-8 border-b border-slate-100 mb-6 shadow-sm"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col items-center text-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-20 h-20 bg-slate-900 rounded-[2.2rem] flex items-center justify-center text-white text-3xl font-black mb-4 shadow-xl rotate-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4 lead\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ]\}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-black text-slate-900 mb-1"\cf6 \strokec6 >\{\cf4 \strokec4 lead\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2 mb-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf5 \strokec5 Badge\cf4 \strokec4  text\cf6 \strokec6 =\{\cf4 \strokec4 lead\cf6 \strokec6 .\cf4 \strokec4 stage\cf6 \strokec6 \}\cf4 \strokec4  colorClass\cf6 \strokec6 =\cf7 \strokec7 "bg-blue-600 text-white"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-300 text-xs"\cf6 \strokec6 >\cf10 \strokec10 \'95\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-400 font-bold text-[10px] uppercase tracking-widest"\cf6 \strokec6 >\{\cf4 \strokec4 lead\cf6 \strokec6 .\cf4 \strokec4 source\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cb1 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-2 gap-3 w-full max-w-xs"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 button className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:bg-slate-800"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 Phone\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4 /> \cf5 \strokec5 CALL\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 button className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 bg-green-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:bg-green-700"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 MessageSquare\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4 /> \cf5 \strokec5 WHATSAPP\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "px-6 flex gap-6 border-b border-slate-100 bg-white sticky top-[65px] z-20"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{[\cf7 \strokec7 'timeline'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'inventory'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'details'\cf6 \strokec6 ].\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 s \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3             key\cf6 \strokec6 =\{\cf4 \strokec4 s\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setActiveSection\cf6 \strokec6 (\cf4 \strokec4 s\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3             className\cf6 \strokec6 =\{\cf7 \strokec7 `py-3 text-[10px] font-black uppercase tracking-widest border-b-2 transition-all \cf6 \strokec6 $\{\cf4 \cb1 \strokec4 \
\cb3               activeSection \cf6 \strokec6 ===\cf4 \strokec4  s \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'border-slate-900 text-slate-900'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'border-transparent text-slate-300'\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4 s\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4 activeSection \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'timeline'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "space-y-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf5 \strokec5 SectionHeader\cf4 \strokec4  title\cf6 \strokec6 =\cf7 \strokec7 "Lifecycle Log"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "relative pl-6 border-l-2 border-slate-100 space-y-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "relative"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white shadow-sm"\cf4 \strokec4  />\cb1 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-bold text-slate-800 leading-relaxed italic"\cf6 \strokec6 >\cf7 \strokec7 "Lead is very interested in 3BHK options. Prefers vastu-compliant high floors."\cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[9px] text-slate-400 mt-3 font-black uppercase tracking-widest flex items-center gap-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 Clock\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 10\cf6 \strokec6 \}\cf4 \strokec4 /> \cf5 \strokec5 Last\cf4 \strokec4  \cf5 \strokec5 Updated\cf4 \strokec4  \cf10 \strokec10 \'95\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 userProfile\cf6 \strokec6 ?.\cf4 \strokec4 role \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 'User'\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- MAIN NAVIGATOR ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 App\cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 user\cf6 \strokec6 ,\cf4 \strokec4  setUser\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 userProfile\cf6 \strokec6 ,\cf4 \strokec4  setUserProfile\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 authLoading\cf6 \strokec6 ,\cf4 \strokec4  setAuthLoading\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 activeTab\cf6 \strokec6 ,\cf4 \strokec4  setActiveTab\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 'today'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 stack\cf6 \strokec6 ,\cf4 \strokec4  setStack\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 leads\cf6 \strokec6 ,\cf4 \strokec4  setLeads\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 projects\cf6 \strokec6 ,\cf4 \strokec4  setProjects\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 contextId\cf6 \strokec6 ,\cf4 \strokec4  setContextId\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  unsubAuth \cf6 \strokec6 =\cf4 \strokec4  onAuthStateChanged\cf6 \strokec6 (\cf4 \strokec4 auth\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 async\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 u\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       setUser\cf6 \strokec6 (\cf4 \strokec4 u\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 u\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         setUserProfile\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         setAuthLoading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf4 \strokec4  userRef \cf6 \strokec6 =\cf4 \strokec4  doc\cf6 \strokec6 (\cf4 \strokec4 db\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'artifacts'\cf6 \strokec6 ,\cf4 \strokec4  appId\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'users'\cf6 \strokec6 ,\cf4 \strokec4  u\cf6 \strokec6 .\cf4 \strokec4 uid\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf4 \strokec4  snap \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 await\cf4 \strokec4  getDoc\cf6 \strokec6 (\cf4 \strokec4 userRef\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 snap\cf6 \strokec6 .\cf4 \strokec4 exists\cf6 \strokec6 ())\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           setUserProfile\cf6 \strokec6 (\cf4 \strokec4 snap\cf6 \strokec6 .\cf4 \strokec4 data\cf6 \strokec6 ());\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           \cf8 \strokec8 // Default Profile for Demo\cf4 \cb1 \strokec4 \
\cb3           setUserProfile\cf6 \strokec6 (\{\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'admin'\cf6 \strokec6 ,\cf4 \strokec4  businessId\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Demo_Developer'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Sales Manager'\cf4 \strokec4  \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         setAuthLoading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  unsubAuth\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 []);\cf4 \cb1 \strokec4 \
\
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 user \cf6 \strokec6 ||\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 userProfile\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  leadsRef \cf6 \strokec6 =\cf4 \strokec4  collection\cf6 \strokec6 (\cf4 \strokec4 db\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'artifacts'\cf6 \strokec6 ,\cf4 \strokec4  appId\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'public'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'data'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'leads'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  projectsRef \cf6 \strokec6 =\cf4 \strokec4  collection\cf6 \strokec6 (\cf4 \strokec4 db\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'artifacts'\cf6 \strokec6 ,\cf4 \strokec4  appId\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'public'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'data'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'projects'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 const\cf4 \strokec4  leadsUnsub \cf6 \strokec6 =\cf4 \strokec4  onSnapshot\cf6 \strokec6 (\cf4 \strokec4 leadsRef\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 snap\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 let\cf4 \strokec4  data \cf6 \strokec6 =\cf4 \strokec4  snap\cf6 \strokec6 .\cf4 \strokec4 docs\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 d \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  d\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 ...\cf4 \strokec4 d\cf6 \strokec6 .\cf4 \strokec4 data\cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 \}));\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 userProfile\cf6 \strokec6 .\cf4 \strokec4 role \cf6 \strokec6 !==\cf4 \strokec4  \cf7 \strokec7 'super_admin'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  userProfile\cf6 \strokec6 .\cf4 \strokec4 role \cf6 \strokec6 !==\cf4 \strokec4  \cf7 \strokec7 'support'\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         data \cf6 \strokec6 =\cf4 \strokec4  data\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 businessId \cf6 \strokec6 ===\cf4 \strokec4  userProfile\cf6 \strokec6 .\cf4 \strokec4 businessId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       setLeads\cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 const\cf4 \strokec4  projectsUnsub \cf6 \strokec6 =\cf4 \strokec4  onSnapshot\cf6 \strokec6 (\cf4 \strokec4 projectsRef\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 snap\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 let\cf4 \strokec4  data \cf6 \strokec6 =\cf4 \strokec4  snap\cf6 \strokec6 .\cf4 \strokec4 docs\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 d \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  d\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 ...\cf4 \strokec4 d\cf6 \strokec6 .\cf4 \strokec4 data\cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 \}));\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 userProfile\cf6 \strokec6 .\cf4 \strokec4 role \cf6 \strokec6 !==\cf4 \strokec4  \cf7 \strokec7 'super_admin'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  userProfile\cf6 \strokec6 .\cf4 \strokec4 role \cf6 \strokec6 !==\cf4 \strokec4  \cf7 \strokec7 'support'\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         data \cf6 \strokec6 =\cf4 \strokec4  data\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 p \cf6 \strokec6 =>\cf4 \strokec4  p\cf6 \strokec6 .\cf4 \strokec4 businessId \cf6 \strokec6 ===\cf4 \strokec4  userProfile\cf6 \strokec6 .\cf4 \strokec4 businessId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       setProjects\cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  leadsUnsub\cf6 \strokec6 ();\cf4 \strokec4  projectsUnsub\cf6 \strokec6 ();\cf4 \strokec4  \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 user\cf6 \strokec6 ,\cf4 \strokec4  userProfile\cf6 \strokec6 ]);\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  navigateTo \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 screen\cf6 \strokec6 ,\cf4 \strokec4  id \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  setContextId\cf6 \strokec6 (\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \strokec4  setStack\cf6 \strokec6 ([...\cf4 \strokec4 stack\cf6 \strokec6 ,\cf4 \strokec4  screen\cf6 \strokec6 ]);\cf4 \strokec4  \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  goBack \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setStack\cf6 \strokec6 (\cf4 \strokec4 stack\cf6 \strokec6 .\cf4 \strokec4 slice\cf6 \strokec6 (\cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 -\cf9 \strokec9 1\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 authLoading\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "min-h-screen flex items-center justify-center bg-slate-900"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf5 \strokec5 Clock\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "animate-spin text-blue-600"\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 32\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 user\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 LoginScreen\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  currentScreen \cf6 \strokec6 =\cf4 \strokec4  stack\cf6 \strokec6 [\cf4 \strokec4 stack\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 -\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  activeTab\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  renderContent \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 switch\cf6 \strokec6 (\cf4 \strokec4 currentScreen\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf7 \strokec7 'leadDetail'\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 LeadDetail\cf4 \strokec4  leadId\cf6 \strokec6 =\{\cf4 \strokec4 contextId\cf6 \strokec6 \}\cf4 \strokec4  leads\cf6 \strokec6 =\{\cf4 \strokec4 leads\cf6 \strokec6 \}\cf4 \strokec4  userProfile\cf6 \strokec6 =\{\cf4 \strokec4 userProfile\cf6 \strokec6 \}\cf4 \strokec4  onBack\cf6 \strokec6 =\{\cf4 \strokec4 goBack\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf7 \strokec7 'today'\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 header className\cf6 \strokec6 =\cf7 \strokec7 "mb-10 flex justify-between items-start"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "text-4xl font-black tracking-tighter text-slate-900 italic"\cf6 \strokec6 >\cf5 \strokec5 Today\cf6 \strokec6 </\cf4 \strokec4 h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1"\cf6 \strokec6 >\cf5 \strokec5 Namaste\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 userProfile\cf6 \strokec6 ?.\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  signOut\cf6 \strokec6 (\cf4 \strokec4 auth\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-300 hover:text-red-500"\cf4 \strokec4 ><\cf5 \strokec5 LogOut\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 22\cf6 \strokec6 \}\cf4 \strokec4 /></button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 header\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl mb-12 relative overflow-hidden"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] font-black uppercase opacity-60 tracking-[0.2em] mb-1"\cf6 \strokec6 >\cf5 \strokec5 Managed\cf4 \strokec4  \cf5 \strokec5 Ecosystem\cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-5xl font-black tracking-tighter"\cf6 \strokec6 >\{\cf4 \strokec4 leads\cf6 \strokec6 .\cf4 \strokec4 length\cf6 \strokec6 \}</\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"\cf4 \strokec4  />\cb1 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf5 \strokec5 SectionHeader\cf4 \strokec4  title\cf6 \strokec6 =\cf7 \strokec7 "Priority Leads"\cf4 \strokec4  subtitle\cf6 \strokec6 =\cf7 \strokec7 "Needs follow-up today"\cf4 \strokec4  />\cb1 \
\cb3           \cf6 \strokec6 \{\cf4 \strokec4 leads\cf6 \strokec6 .\cf4 \strokec4 slice\cf6 \strokec6 (\cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ).\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div key\cf6 \strokec6 =\{\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  navigateTo\cf6 \strokec6 (\cf7 \strokec7 'leadDetail'\cf6 \strokec6 ,\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "bg-white p-5 rounded-3xl mb-3 border border-slate-100 flex justify-between items-center shadow-sm active:scale-95 transition-all cursor-pointer"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "font-bold text-slate-800 text-sm"\cf6 \strokec6 >\{\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 Badge\cf4 \strokec4  text\cf6 \strokec6 =\{\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 stage\cf6 \strokec6 \}\cf4 \strokec4  colorClass\cf6 \strokec6 =\cf7 \strokec7 "bg-blue-50 text-blue-600"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf7 \strokec7 'leads'\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 header className\cf6 \strokec6 =\cf7 \strokec7 "p-4 mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-black tracking-tight text-slate-900 uppercase italic"\cf6 \strokec6 >\cf5 \strokec5 Pipeline\cf6 \strokec6 </\cf4 \strokec4 h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 header\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \{\cf4 \strokec4 leads\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div key\cf6 \strokec6 =\{\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  navigateTo\cf6 \strokec6 (\cf7 \strokec7 'leadDetail'\cf6 \strokec6 ,\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "bg-white p-5 rounded-3xl mb-3 border border-slate-100 shadow-sm"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex justify-between items-start mb-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "font-bold text-slate-800"\cf6 \strokec6 >\{\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf5 \strokec5 Badge\cf4 \strokec4  text\cf6 \strokec6 =\{\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 stage\cf6 \strokec6 \}\cf4 \strokec4  colorClass\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-900 text-white"\cf4 \strokec4  />\cb1 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest"\cf6 \strokec6 >\{\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 phone\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf7 \strokec7 'inventory'\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 InventoryScreen\cf4 \strokec4  projects\cf6 \strokec6 =\{\cf4 \strokec4 projects\cf6 \strokec6 \}\cf4 \strokec4  userProfile\cf6 \strokec6 =\{\cf4 \strokec4 userProfile\cf6 \strokec6 \}\cf4 \strokec4  onProjectSelect\cf6 \strokec6 =\{(\cf4 \strokec4 id\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  navigateTo\cf6 \strokec6 (\cf7 \strokec7 'projectDetail'\cf6 \strokec6 ,\cf4 \strokec4  id\cf6 \strokec6 )\}\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 default\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-10 text-center text-slate-400 font-black uppercase text-xs"\cf6 \strokec6 >\cf5 \strokec5 Section\cf4 \strokec4  \cf5 \strokec5 Ready\cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex justify-center bg-slate-900 min-h-screen font-sans selection:bg-blue-100"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-full max-w-[430px] bg-slate-50 min-h-screen relative shadow-2xl overflow-x-hidden flex flex-col no-scrollbar"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 overflow-y-auto no-scrollbar"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \{\cf4 \strokec4 renderContent\cf6 \strokec6 ()\}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cb1 \
\cb3         \cf6 \strokec6 \{\cf8 \strokec8 /* Navigation Bar */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 nav className\cf6 \strokec6 =\cf7 \strokec7 "bg-white border-t border-slate-100 flex justify-around items-center h-20 px-4 sticky bottom-0 z-40 shrink-0"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \{[\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'today'\cf6 \strokec6 ,\cf4 \strokec4  icon\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Clock\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 ,\cf4 \strokec4  label\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Daily'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'leads'\cf6 \strokec6 ,\cf4 \strokec4  icon\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Users\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 ,\cf4 \strokec4  label\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Leads'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'inventory'\cf6 \strokec6 ,\cf4 \strokec4  icon\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 LayoutGrid\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 ,\cf4 \strokec4  label\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Stock'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'stats'\cf6 \strokec6 ,\cf4 \strokec4  icon\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 BarChart3\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 ,\cf4 \strokec4  label\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Stats'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 ].\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 button key\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  setActiveTab\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \strokec4  setStack\cf6 \strokec6 ([]);\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `flex flex-col items-center flex-1 transition-all \cf6 \strokec6 $\{\cf4 \strokec4 activeTab \cf6 \strokec6 ===\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'text-blue-600'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-slate-300'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `p-2.5 rounded-2xl transition-all \cf6 \strokec6 $\{\cf4 \strokec4 activeTab \cf6 \strokec6 ===\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-blue-50 scale-110 shadow-sm'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-transparent'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 icon\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-[9px] font-black uppercase tracking-tighter mt-1"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 label\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 nav\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 <\cf4 \strokec4 style\cf6 \strokec6 >\{\cf7 \strokec7 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7         .no-scrollbar::-webkit-scrollbar \{ display: none; \}\cf4 \cb1 \strokec4 \
\cf7 \cb3 \strokec7         .no-scrollbar \{ -ms-overflow-style: none; scrollbar-width: none; \}\cf4 \cb1 \strokec4 \
\cf7 \cb3 \strokec7         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap');\cf4 \cb1 \strokec4 \
\cf7 \cb3 \strokec7         body \{ font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.01em; \}\cf4 \cb1 \strokec4 \
\cf7 \cb3 \strokec7       `\cf6 \strokec6 \}</\cf4 \strokec4 style\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
}