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