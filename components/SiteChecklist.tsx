import React, { useState } from 'react';
import { Check, Globe, ClipboardList } from 'lucide-react';
import { SiteEntry } from '../types';
import { INITIAL_SITES } from '../constants';

export const SiteChecklist: React.FC = () => {
  const [sites, setSites] = useState<SiteEntry[]>(INITIAL_SITES);

  const updateSite = (index: number, updates: Partial<SiteEntry>) => {
    setSites(prev => prev.map((site, i) => i === index ? { ...site, ...updates } : site));
  };

  const completedCount = sites.filter(s => s.gaPropertyCreated).length;

  return (
    <div className="w-full max-w-6xl">
      {/* Summary Card */}
      <div className="mb-8 bg-indigo-50 rounded-xl p-4 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center space-x-3">
          <ClipboardList size={24} className="text-indigo-600" />
          <div>
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">GA4 Property Setup Progress</p>
            <p className="text-lg font-bold text-indigo-900">{completedCount} of {sites.length} sites completed</p>
          </div>
        </div>
        <div className="w-32 h-2 bg-indigo-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${sites.length > 0 ? (completedCount / sites.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Checklist Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-1">Sites Needing GA4 Properties</h2>
          <p className="text-slate-500">Check off each site as you create its GA4 property and fill in the details.</p>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-3 px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <div className="col-span-1 text-center">Done</div>
          <div className="col-span-2">Website</div>
          <div className="col-span-2">GA ID</div>
          <div className="col-span-3">Notes</div>
          <div className="col-span-2">Created By</div>
          <div className="col-span-2">Date</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-100">
          {sites.map((site, idx) => (
            <div
              key={site.website}
              className={`px-6 py-4 transition-colors ${site.gaPropertyCreated ? 'bg-green-50/50' : 'hover:bg-slate-50'}`}
            >
              {/* Desktop row */}
              <div className="hidden md:grid grid-cols-12 gap-3 items-center">
                {/* Checkbox */}
                <div className="col-span-1 flex justify-center">
                  <button
                    onClick={() => updateSite(idx, { gaPropertyCreated: !site.gaPropertyCreated })}
                    className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                      site.gaPropertyCreated
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-slate-300 hover:border-indigo-400'
                    }`}
                  >
                    {site.gaPropertyCreated && <Check size={14} />}
                  </button>
                </div>

                {/* Website */}
                <div className="col-span-2 flex items-center space-x-2">
                  <Globe size={14} className="text-slate-400 flex-shrink-0" />
                  <span className={`text-sm font-medium ${site.gaPropertyCreated ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                    {site.website}
                  </span>
                </div>

                {/* GA ID */}
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder="G-XXXXXXXXXX"
                    value={site.gaId}
                    onChange={(e) => updateSite(idx, { gaId: e.target.value })}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none font-mono"
                  />
                </div>

                {/* Notes */}
                <div className="col-span-3">
                  <input
                    type="text"
                    value={site.notes}
                    onChange={(e) => updateSite(idx, { notes: e.target.value })}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Created By */}
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder="Name"
                    value={site.createdBy}
                    onChange={(e) => updateSite(idx, { createdBy: e.target.value })}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Date */}
                <div className="col-span-2">
                  <input
                    type="date"
                    value={site.date}
                    onChange={(e) => updateSite(idx, { date: e.target.value })}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Mobile card layout */}
              <div className="md:hidden space-y-3">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateSite(idx, { gaPropertyCreated: !site.gaPropertyCreated })}
                    className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      site.gaPropertyCreated
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-slate-300 hover:border-indigo-400'
                    }`}
                  >
                    {site.gaPropertyCreated && <Check size={14} />}
                  </button>
                  <div className="flex items-center space-x-2">
                    <Globe size={14} className="text-slate-400" />
                    <span className={`font-medium ${site.gaPropertyCreated ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                      {site.website}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pl-9">
                  <input
                    type="text"
                    placeholder="G-XXXXXXXXXX"
                    value={site.gaId}
                    onChange={(e) => updateSite(idx, { gaId: e.target.value })}
                    className="text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:ring-2 focus:ring-indigo-500 outline-none font-mono"
                  />
                  <input
                    type="text"
                    placeholder="Created by"
                    value={site.createdBy}
                    onChange={(e) => updateSite(idx, { createdBy: e.target.value })}
                    className="text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  <input
                    type="text"
                    value={site.notes}
                    onChange={(e) => updateSite(idx, { notes: e.target.value })}
                    className="col-span-2 text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  <input
                    type="date"
                    value={site.date}
                    onChange={(e) => updateSite(idx, { date: e.target.value })}
                    className="col-span-2 text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 text-center">
          {completedCount === sites.length ? (
            <div className="flex items-center justify-center space-x-2 text-green-600 font-bold">
              <Check size={20} />
              <span>All sites have GA4 properties!</span>
            </div>
          ) : (
            <p className="text-sm text-slate-500">
              {sites.length - completedCount} site{sites.length - completedCount !== 1 ? 's' : ''} remaining
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
