import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink, Copy, CheckCircle2 } from 'lucide-react';
import { ADMIN_EMAIL_TO_ADD, COMPANY_NAME, GA_URL } from './constants';
import { Step } from './types';
import { VisualStep1, VisualStep2, VisualStep3, VisualStep4, VisualStep5 } from './components/StepVisuals';
import { HelpChat } from './components/HelpChat';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const steps: Step[] = [
    {
      id: 1,
      title: "Open Settings",
      description: "Click the Gear icon (Admin) in the bottom left corner.",
      component: <VisualStep1 />
    },
    {
      id: 2,
      title: "Account Access",
      description: "In the first column (Account), click 'Account access management'.",
      component: <VisualStep2 />
    },
    {
      id: 3,
      title: "Add New User",
      description: "Click the blue Plus (+) button in the top right corner, then select 'Add users'.",
      component: <VisualStep3 />
    },
    {
      id: 4,
      title: "Enter Email",
      description: `Paste our email address: ${ADMIN_EMAIL_TO_ADD}`,
      component: <VisualStep4 />
    },
    {
      id: 5,
      title: "Make Admin",
      description: "Select 'Administrator' role, then click the 'Add' button.",
      component: <VisualStep5 />
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(ADMIN_EMAIL_TO_ADD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
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
        {/* Progress Bar */}
        <div className="h-1 bg-slate-100 w-full">
            <div 
                className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-3xl">
            
            {/* Context Card (Sticky / Helpful info) */}
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

            {/* Instruction Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-8 text-center border-b border-slate-100">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
                        Step {currentStep + 1} of {steps.length}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        {steps[currentStep].title}
                    </h2>
                    <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
                        {steps[currentStep].description}
                    </p>
                </div>

                {/* Visual Component Area */}
                <div className="bg-slate-50 p-6 md:p-10 flex justify-center items-center min-h-[360px]">
                    {steps[currentStep].component}
                </div>

                {/* Footer Controls */}
                <div className="p-6 border-t border-slate-200 bg-white flex justify-between items-center">
                    <button 
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className={`
                            flex items-center space-x-2 px-5 py-3 rounded-lg font-medium transition-colors
                            ${currentStep === 0 
                                ? 'text-slate-300 cursor-not-allowed' 
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                        `}
                    >
                        <ChevronLeft size={20} />
                        <span>Back</span>
                    </button>

                    {currentStep < steps.length - 1 ? (
                        <button 
                            onClick={handleNext}
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
      </main>

      <HelpChat />

    </div>
  );
};

export default App;
