import React from 'react';
import { Founder, Service } from './types';
import { Brain, FileText, Zap, Search, Target, Rocket } from 'lucide-react';

export const FOUNDERS: Founder[] = [
  {
    name: "Co-Founder (You)",
    role: "Strategy & Operations",
    bio: "Ex-Growth Lead obsessed with scalable content systems. I turn chaotic transcripts into structured thought leadership that converts.",
    // Placeholder image resembling the description (Man, beard, light background)
    // REPLACE THIS URL WITH YOUR ACTUAL IMAGE URL
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" 
  },
  {
    name: "Co-Founder (Partner)",
    role: "Tech & AI Architecture",
    bio: "Building the engine behind ContentViking. Expert in LLM prompting and automated SEO workflows.",
    // Placeholder image resembling description (Man, glasses, nature background)
    // REPLACE THIS URL WITH YOUR ACTUAL IMAGE URL
    imageUrl: "https://images.unsplash.com/photo-1544168190-79c11c140f14?auto=format&fit=crop&w=800&q=80"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Insight Extraction",
    description: "We don't just guess. We ingest your meeting transcripts, sales calls, and internal docs to find the hidden gems.",
    icon: <Search className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Template-guided AI Generation",
    description: "We don't let LLM freestyle. Your insights are mapped onto our database of 200+ proven viral hooks and article structures to create the best storytelling content.",
    icon: <FileText className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Founder-Level Polish",
    description: "AI drafts the skeleton. We provide the muscle. Every post is audited by humans for tone and nuance.",
    icon: <Target className="w-6 h-6 text-cyan-400" />
  }
];