import React from 'react';

export interface Founder {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  company: string;
  quote: string;
  author: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}