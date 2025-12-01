import React from 'react';
import { Founder, Service } from './types';
import { Brain, FileText, Zap, Search, Target, Rocket } from 'lucide-react';

export const FOUNDERS: Founder[] = [
  {
    name: "Hooman",
    role: "Strategy & Operations",
    bio: "Ex-Growth Lead obsessed with scalable content systems. I turn chaotic transcripts into structured thought leadership that converts.",
    imageUrl: "/hooman-profile.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/hooman-khoramshahi-7307a9154/"
  },
  {
    name: "Charles",
    role: "Tech & AI Architecture",
    bio: "Building the engine behind ContentViking. Expert in LLM prompting and automated SEO workflows.",
    imageUrl: "/charles-profile.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/chaozhangcharles/"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Insight Extraction",
    description: "We value authenticity. Content is grounded on insights from meetings, documents and interview unique to each client",
    icon: <Search className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Customized AI Generation",
    description: "We govern LLM. Prompt is fine-tuned based on clients' style preference and our template database is used to create the best storytelling.",
    icon: <FileText className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Polish & Collaborative Review",
    description: "We strive for perfection. Every post is audited by our team and we review with client to ensure 100% satisfaction",
    icon: <Target className="w-6 h-6 text-cyan-400" />
  }
];