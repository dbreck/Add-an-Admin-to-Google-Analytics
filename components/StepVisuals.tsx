import React from 'react';
import { Settings, Users, Plus, Check, User, ChevronRight, BarChart3, Home, LayoutDashboard } from 'lucide-react';

// Common mock window wrapper
const MockWindow: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title = "Google Analytics" }) => (
  <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 flex flex-col h-64 md:h-80 transition-all duration-500">
    <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center space-x-2">
      <div className="flex space-x-1">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
      </div>
      <span className="text-xs text-slate-500 font-medium ml-2">{title}</span>
    </div>
    <div className="flex-1 relative bg-white overflow-hidden">
      {children}
    </div>
  </div>
);

// Step 1: Click Admin (Gear)
export const VisualStep1: React.FC = () => (
  <MockWindow>
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-16 bg-slate-50 border-r border-slate-100 flex flex-col items-center py-4 space-y-6">
        <div className="p-2 text-orange-500"><BarChart3 size={24} /></div>
        <div className="p-2 text-slate-400"><Home size={20} /></div>
        <div className="p-2 text-slate-400"><LayoutDashboard size={20} /></div>
        <div className="flex-1"></div>
        
        {/* The Target */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ring-pulse"></div>
          <div className="p-3 bg-indigo-100 text-indigo-700 rounded-lg relative z-10 border-2 border-indigo-600">
            <Settings size={24} />
          </div>
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap arrow-left">
            Click here (Admin)
          </div>
        </div>
      </div>
      
      {/* Main Content Blur */}
      <div className="flex-1 p-6 space-y-4 opacity-30">
        <div className="h-32 bg-slate-100 rounded-lg w-full"></div>
        <div className="h-20 bg-slate-100 rounded-lg w-2/3"></div>
      </div>
    </div>
  </MockWindow>
);

// Step 2: Click Account Access Management
export const VisualStep2: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-6">Admin</h3>
      
      <div className="flex space-x-8">
        {/* Account Column */}
        <div className="flex-1 space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Account</div>
          
          {/* The Target */}
          <div className="relative">
             <div className="absolute -inset-2 bg-indigo-500/10 rounded-lg animate-pulse border border-indigo-500/30"></div>
            <div className="flex items-center justify-between p-3 bg-indigo-50 border border-indigo-200 rounded-md text-indigo-700 shadow-sm cursor-pointer relative z-10">
              <div className="flex items-center space-x-3">
                <Users size={18} />
                <span className="font-medium text-sm">Account access management</span>
              </div>
              <ChevronRight size={16} />
            </div>
             <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
               Click this one!
            </div>
          </div>

          <div className="p-3 text-slate-400 flex items-center space-x-3">
            <div className="w-4 h-4 bg-slate-200 rounded"></div>
            <span className="text-sm">Account settings</span>
          </div>
          <div className="p-3 text-slate-400 flex items-center space-x-3">
            <div className="w-4 h-4 bg-slate-200 rounded"></div>
            <span className="text-sm">Account activity</span>
          </div>
        </div>

        {/* Property Column (Blurred) */}
        <div className="flex-1 space-y-3 opacity-30">
           <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Property</div>
           <div className="p-3 bg-slate-50 border border-slate-100 rounded-md"></div>
           <div className="p-3 bg-slate-50 border border-slate-100 rounded-md"></div>
        </div>
      </div>
    </div>
  </MockWindow>
);

// Step 3: Click Plus Button
export const VisualStep3: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full">
      <div className="h-14 border-b border-slate-100 px-6 flex items-center justify-between bg-white">
        <span className="font-medium text-slate-700">Account access management</span>
        
        {/* The Target */}
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ring-pulse"></div>
          <button className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg relative z-10">
            <Plus size={24} />
          </button>
           <div className="absolute top-full right-0 mt-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
             Click the blue Plus
          </div>
        </div>
      </div>
      
      {/* List content */}
      <div className="p-4 space-y-3 bg-slate-50 flex-1">
        <div className="bg-white p-3 rounded border border-slate-200 flex items-center space-x-3 opacity-50">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center"><User size={16} className="text-slate-400"/></div>
          <div className="h-2 w-32 bg-slate-200 rounded"></div>
        </div>
        <div className="bg-white p-3 rounded border border-slate-200 flex items-center space-x-3 opacity-50">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center"><User size={16} className="text-slate-400"/></div>
          <div className="h-2 w-24 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </MockWindow>
);

// Step 4: Add Users -> Email
export const VisualStep4: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full p-6 space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-500 uppercase">Email addresses</label>
        
        {/* The Target */}
        <div className="relative">
          <div className="absolute -inset-1 bg-indigo-500/10 rounded animate-pulse"></div>
          <div className="border-2 border-indigo-500 rounded bg-white p-2 flex items-center shadow-sm relative z-10">
             <span className="text-indigo-600 font-medium">danny@clearph.com</span>
             <span className="w-0.5 h-5 bg-indigo-600 ml-1 animate-pulse"></span>
          </div>
           <div className="absolute left-0 -top-8 bg-indigo-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
             Paste email here
          </div>
        </div>
        <p className="text-xs text-slate-400">Notify new users by email</p>
      </div>
      
      <div className="space-y-3 opacity-50">
        <div className="text-xs font-semibold text-slate-500 uppercase">Direct roles and data restrictions</div>
        <div className="flex items-center space-x-2">
           <div className="w-4 h-4 border border-slate-300 rounded"></div>
           <span className="text-sm text-slate-600">Administrator</span>
        </div>
      </div>
    </div>
  </MockWindow>
);

// Step 5: Check Admin -> Click Add
export const VisualStep5: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full relative">
       <div className="p-6 space-y-6 flex-1 overflow-hidden">
        <div className="space-y-2 opacity-50">
            <label className="text-xs font-semibold text-slate-500 uppercase">Email addresses</label>
            <div className="border border-slate-300 rounded bg-slate-50 p-2 text-slate-500">
                danny@clearph.com
            </div>
        </div>

        <div className="space-y-3">
             <div className="text-xs font-semibold text-slate-500 uppercase">Roles</div>
             
             {/* The Target 1: Checkbox */}
             <div className="relative p-2 rounded bg-indigo-50 border border-indigo-200">
                <div className="flex items-start space-x-3">
                    <div className="relative mt-1">
                        <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center text-white shadow-sm ring-4 ring-indigo-500/20">
                            <Check size={14} />
                        </div>
                    </div>
                    <div>
                        <span className="text-sm font-bold text-indigo-900">Administrator</span>
                        <p className="text-xs text-indigo-700/70 mt-1">Full control of account.</p>
                    </div>
                </div>
                 <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 text-indigo-600 text-xs font-bold whitespace-nowrap">
                    ← Select this
                 </div>
             </div>
             
             <div className="flex items-center space-x-3 opacity-50 px-2">
                 <div className="w-5 h-5 border border-slate-300 rounded"></div>
                 <span className="text-sm text-slate-600">Editor</span>
             </div>
        </div>
       </div>

       {/* The Target 2: Add Button */}
       <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
            <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/30 rounded-md animate-ring-pulse"></div>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:bg-indigo-700 transition-colors relative z-10">
                    Add
                </button>
            </div>
       </div>
    </div>
  </MockWindow>
);
