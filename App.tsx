import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink, Copy, CheckCircle2, ClipboardList, UserPlus, Globe } from 'lucide-react';
import { ADMIN_EMAIL_TO_ADD, COMPANY_NAME, GA_URL } from './constants';
import { Step } from './types';
import { VisualStep1, VisualStep2, VisualStep3, VisualStep4, VisualStep5 } from './components/StepVisuals';
import { PropStep1, PropStep2, PropStep3, PropStep4, PropStep5 } from './components/PropertyStepVisuals';
import { SiteChecklist } from './components/SiteChecklist';
import { HelpChat } from './components/HelpChat';

type Tab = 'checklist' | 'property' | 'admin';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('checklist');
  const [adminStep, setAdminStep] = useState(0);
  const [propStep, setPropStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const adminSteps: Step[] = [
    { id: 1, title: "Open Settings", description: "Click the Gear icon (Admin) in the bottom left corner.", component: <VisualStep1 /> },
    { id: 2, title: "Account Access", description: "In the first column (Account), click 'Account access management'.", component: <VisualStep2 /> },
    { id: 3, title: "Add New User", description: "Click the blue Plus (+) button in the top right corner, then select 'Add users'.", component: <VisualStep3 /> },
    { id: 4, title: "Enter Email", description: `Paste our email address: ${ADMIN_EMAIL_TO_ADD}`, component: <VisualStep4 /> },
    { id: 5, title: "Make Admin", description: "Select 'Administrator' role, then click the 'Add' button.", component: <VisualStep5 /> },
  ];

  const propertySteps: Step[] = [
    { id: 1, title: "Open Admin", description: "Click the Gear icon (Admin) in the bottom left corner of Google Analytics.", component: <PropStep1 /> },
    { id: 2, title: "Create a Property", description: "Click the blue 'Create' button, then select 'Property' from the dropdown.", component: <PropStep2 /> },
    { id: 3, title: "Name It", description: "Type the website domain as the property name (e.g. btipartners.com). Set timezone to Eastern and currency to USD.", component: <PropStep3 /> },
    { id: 4, title: "Add the Website", description: "Choose 'Web' as the platform, then enter the full website URL.", component: <PropStep4 /> },
    { id: 5, title: "Copy the ID", description: "Copy the Measurement ID (starts with G-) and paste it into the checklist tab.", component: <PropStep5 /> },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(ADMIN_EMAIL_TO_ADD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Shared step navigator
  const StepNavigator: React.FC<{ steps: Step[]; current: number; setCurrent: (n: number) => void }> = ({ steps, current, setCurrent }) => {
    const progress = ((current + 1) / steps.length) * 100;

    return (
      <div className="w-full max-w-6xl">
        {/* Progress */}
        <div className="mb-6 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-600 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>

        {/* Instruction Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8 text-center border-b border-slate-100">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
              Step {current + 1} of {steps.length}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              {steps[current].title}
            </h2>
            <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
              {steps[current].description}
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-10 flex justify-center items-center min-h-[360px]">
            {steps[current].component}
          </div>

          <div className="p-6 border-t border-slate-200 bg-white flex justify-between items-center">
            <button
              onClick={() => setCurrent(current - 1)}
              disabled={current === 0}
              className={`flex items-center space-x-2 px-5 py-3 rounded-lg font-medium transition-colors ${
                current === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <ChevronLeft size={20} />
              <span>Back</span>
            </button>

            {current < steps.length - 1 ? (
              <button
                onClick={() => setCurrent(current + 1)}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <span>Next Step</span>
                <ChevronRight size={20} />
              </button>
            ) : (
              <div className="flex items-center space-x-2 text-green-600 font-bold px-8 py-3 bg-green-50 rounded-lg border border-green-100">
                <CheckCircle2 size={24} />
                <span>You're all done!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">C</div>
            <h1 className="font-semibold text-slate-800 tracking-tight">{COMPANY_NAME} Guide</h1>
          </div>
          <a
            href={GA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
          >
            <span>Open Google Analytics</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4 flex">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'checklist'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <ClipboardList size={16} />
            <span>Site Checklist</span>
          </button>
          <button
            onClick={() => setActiveTab('property')}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'property'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Globe size={16} />
            <span>Add a Property</span>
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'admin'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <UserPlus size={16} />
            <span>Add an Admin</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">

        {activeTab === 'checklist' && <SiteChecklist />}

        {activeTab === 'property' && (
          <StepNavigator steps={propertySteps} current={propStep} setCurrent={setPropStep} />
        )}

        {activeTab === 'admin' && (
          <div className="w-full max-w-6xl">
            {/* Context Card */}
            <div className="mb-8 bg-indigo-50 rounded-xl p-4 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">Email to Add</p>
                <p className="font-mono text-lg text-indigo-900 font-bold">{ADMIN_EMAIL_TO_ADD}</p>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-indigo-200 text-indigo-700 font-medium hover:bg-indigo-50 hover:border-indigo-300 transition-all active:scale-95 shadow-sm"
              >
                {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

            <StepNavigator steps={adminSteps} current={adminStep} setCurrent={setAdminStep} />
          </div>
        )}
      </main>

      <HelpChat />

    </div>
  );
};

export default App;
