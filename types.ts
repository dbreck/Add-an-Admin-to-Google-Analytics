import React from 'react';

export interface Step {
  id: number;
  title: string;
  description: string;
  component: React.ReactNode;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface SiteEntry {
  website: string;
  gaPropertyCreated: boolean;
  gaId: string;
  notes: string;
  createdBy: string;
  date: string;
}