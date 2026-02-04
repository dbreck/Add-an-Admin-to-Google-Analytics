import React from 'react';
import { Settings, Plus, Globe, BarChart3, Home, LayoutDashboard, ChevronRight, Copy, Check } from 'lucide-react';

// Common mock window wrapper
const MockWindow: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title = "Google Analytics" }) => (
  <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 flex flex-col h-64 md:h-80 transition-all duration-500">
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

// Step 1: Click Admin (Gear) — same as admin guide
export const PropStep1: React.FC = () => (
  <MockWindow>
    <div className="flex h-full">
      <div className="w-16 bg-slate-50 border-r border-slate-100 flex flex-col items-center py-4 space-y-6">
        <div className="p-2 text-orange-500"><BarChart3 size={24} /></div>
        <div className="p-2 text-slate-400"><Home size={20} /></div>
        <div className="p-2 text-slate-400"><LayoutDashboard size={20} /></div>
        <div className="flex-1"></div>
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ring-pulse"></div>
          <div className="p-3 bg-indigo-100 text-indigo-700 rounded-lg relative z-10 border-2 border-indigo-600">
            <Settings size={24} />
          </div>
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Click here (Admin)
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 space-y-4 opacity-30">
        <div className="h-32 bg-slate-100 rounded-lg w-full"></div>
        <div className="h-20 bg-slate-100 rounded-lg w-2/3"></div>
      </div>
    </div>
  </MockWindow>
);

// Step 2: Click "+ Create" → "Property"
export const PropStep2: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-6">Admin</h3>

      <div className="space-y-4">
        {/* Create button */}
        <div className="relative inline-block">
          <div className="absolute -inset-2 bg-indigo-500/10 rounded-lg animate-pulse border border-indigo-500/30"></div>
          <button className="relative z-10 flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2.5 rounded-md font-semibold shadow-md">
            <Plus size={18} />
            <span>Create</span>
          </button>
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
            Click this first
          </div>
        </div>

        {/* Dropdown */}
        <div className="ml-2 bg-white border border-slate-200 rounded-lg shadow-lg w-48 overflow-hidden">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-indigo-500/10 rounded animate-pulse"></div>
            <div className="relative z-10 flex items-center space-x-3 px-4 py-3 bg-indigo-50 border-l-4 border-indigo-600 cursor-pointer">
              <Globe size={16} className="text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">Property</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 px-4 py-3 text-slate-400">
            <BarChart3 size={16} />
            <span className="text-sm">Account</span>
          </div>
        </div>
      </div>
    </div>
  </MockWindow>
);

// Step 3: Name the property
export const PropStep3: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full p-6 space-y-5">
      <h3 className="text-lg font-bold text-slate-800">Create a property</h3>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-500 uppercase">Property name</label>
        <div className="relative">
          <div className="absolute -inset-1 bg-indigo-500/10 rounded animate-pulse"></div>
          <div className="border-2 border-indigo-500 rounded bg-white p-2.5 flex items-center shadow-sm relative z-10">
            <span className="text-indigo-600 font-medium">btipartners.com</span>
            <span className="w-0.5 h-5 bg-indigo-600 ml-1 animate-pulse"></span>
          </div>
          <div className="absolute left-0 -top-8 bg-indigo-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Type the website name
          </div>
        </div>
        <p className="text-xs text-slate-400">Use the website domain as the name for easy reference.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 opacity-50">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-400 uppercase">Time zone</label>
          <div className="border border-slate-200 rounded p-2 text-sm text-slate-500 bg-slate-50">Eastern Time</div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-400 uppercase">Currency</label>
          <div className="border border-slate-200 rounded p-2 text-sm text-slate-500 bg-slate-50">US Dollar</div>
        </div>
      </div>
    </div>
  </MockWindow>
);

// Step 4: Set up web data stream
export const PropStep4: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full p-6 space-y-5">
      <h3 className="text-lg font-bold text-slate-800">Set up a data stream</h3>

      {/* Stream type buttons */}
      <div className="flex space-x-3">
        <div className="relative">
          <div className="absolute -inset-1 bg-indigo-500/10 rounded-lg animate-pulse border border-indigo-500/30"></div>
          <div className="relative z-10 flex flex-col items-center p-3 bg-indigo-50 rounded-lg border-2 border-indigo-600 w-20">
            <Globe size={20} className="text-indigo-600 mb-1" />
            <span className="text-xs font-bold text-indigo-700">Web</span>
          </div>
        </div>
        <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg border border-slate-200 w-20 opacity-40">
          <div className="w-5 h-5 bg-slate-300 rounded mb-1"></div>
          <span className="text-xs text-slate-400">Android</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg border border-slate-200 w-20 opacity-40">
          <div className="w-5 h-5 bg-slate-300 rounded mb-1"></div>
          <span className="text-xs text-slate-400">iOS</span>
        </div>
      </div>

      {/* URL field */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-500 uppercase">Website URL</label>
        <div className="relative">
          <div className="absolute -inset-1 bg-indigo-500/10 rounded animate-pulse"></div>
          <div className="border-2 border-indigo-500 rounded bg-white p-2.5 flex items-center shadow-sm relative z-10">
            <span className="text-slate-400 mr-1">https://</span>
            <span className="text-indigo-600 font-medium">btipartners.com</span>
            <span className="w-0.5 h-5 bg-indigo-600 ml-1 animate-pulse"></span>
          </div>
          <div className="absolute left-0 -top-8 bg-indigo-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Enter the website URL
          </div>
        </div>
      </div>
    </div>
  </MockWindow>
);

// Step 5: Copy the Measurement ID
export const PropStep5: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full p-6 space-y-5">
      <h3 className="text-lg font-bold text-slate-800">Web stream details</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div>
            <p className="text-xs text-slate-400 uppercase font-semibold">Stream URL</p>
            <p className="text-sm text-slate-600">https://btipartners.com</p>
          </div>
        </div>

        {/* Measurement ID — the key thing to copy */}
        <div className="relative">
          <div className="absolute -inset-2 bg-indigo-500/10 rounded-lg animate-pulse border border-indigo-500/30"></div>
          <div className="relative z-10 flex items-center justify-between p-3 bg-indigo-50 rounded-lg border-2 border-indigo-600">
            <div>
              <p className="text-xs text-indigo-500 uppercase font-semibold">Measurement ID</p>
              <p className="text-lg font-mono font-bold text-indigo-900">G-ABC1234567</p>
            </div>
            <div className="flex items-center space-x-1 bg-white px-3 py-1.5 rounded border border-indigo-200 text-indigo-600 text-sm font-medium">
              <Copy size={14} />
              <span>Copy</span>
            </div>
          </div>
          <div className="absolute right-0 -top-8 bg-indigo-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
            Copy this ID!
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start space-x-2">
          <Check size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Save this ID</strong> — paste it into the checklist on the first tab so we have it on file.
          </p>
        </div>
      </div>
    </div>
  </MockWindow>
);
