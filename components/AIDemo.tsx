import React, { useState } from 'react';
import { generateContentStrategy, GeneratedPost } from '../services/geminiService';
import { Terminal, Loader2, Lock } from 'lucide-react';
import { LoadingState } from '../types';

const AIDemo: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [posts, setPosts] = useState<GeneratedPost[]>([]);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [loadingStep, setLoadingStep] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setStatus(LoadingState.LOADING);
    setPosts([]);
    
    // Simulate Stage 1: Analysis & Angle Generation
    setLoadingStep('Analyzing knowledge base...');
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setLoadingStep('Identifying controversial angles...');
    await new Promise(resolve => setTimeout(resolve, 800));

    setLoadingStep('Selecting optimal stances...');
    await new Promise(resolve => setTimeout(resolve, 800));

    // Stage 2: Drafting (Actual API Call)
    setLoadingStep('Drafting content via Context Engine...');
    const generatedPosts = await generateContentStrategy(topic);
    
    setPosts(generatedPosts);
    setStatus(LoadingState.SUCCESS);
  };

  return (
    <section id="demo" className="py-24 bg-brand-offwhite border-y border-gray-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-yellow">Test The System</h2>
          </div>
          <p className="text-xl md:text-2xl text-brand-black font-bold tracking-tight">
            Test our baseline engine. Results amplify 2x when engineered with your proprietary data.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-soft p-6 md:p-10 max-w-4xl mx-auto">
          {/* Input Section */}
          <div className="flex flex-col md:flex-row gap-3 mb-8">
            <div className="flex-1">
               <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Topic: e.g. Enterprise Sales, Remote Work, AI Adoption..."
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-6 py-4 text-brand-black font-medium text-lg focus:outline-none focus:ring-2 focus:ring-brand-black/20 focus:border-brand-black transition-all placeholder-gray-400"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
            </div>
            
            <button
              onClick={handleGenerate}
              disabled={status === LoadingState.LOADING || !topic}
              className="px-8 py-4 bg-brand-yellow text-brand-black font-bold text-lg rounded-lg border border-brand-black/10 hover:bg-brand-yellow/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px] shadow-sm"
            >
              {status === LoadingState.LOADING ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Generate"
              )}
            </button>
          </div>

          {/* Loading Visualization */}
          {status === LoadingState.LOADING && (
            <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg bg-gray-50/50">
               <div className="flex flex-col items-center gap-4">
                 <Loader2 className="w-8 h-8 animate-spin text-brand-black" />
                 <p className="text-brand-darkgray font-mono text-sm uppercase tracking-widest animate-pulse">
                   {loadingStep}
                 </p>
               </div>
            </div>
          )}

          {/* Empty State */}
          {status === LoadingState.IDLE && (
             <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg bg-gray-50/50">
                <p className="text-gray-400 font-medium">Waiting for input topic...</p>
             </div>
          )}

          {/* Results Grid */}
          {status === LoadingState.SUCCESS && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post, idx) => (
                   <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:border-brand-yellow/50 transition-colors shadow-sm">
                      {/* Header: Angle Only */}
                      <div className="p-4 bg-gray-50 border-b border-gray-100">
                         <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                            Angle 0{idx + 1}
                         </div>
                         <h4 className="text-sm font-bold text-brand-black leading-tight">
                            {post.angle}
                         </h4>
                      </div>

                      {/* Body: Blurred Content */}
                      <div className="p-5 flex-grow relative">
                         <div className="font-sans text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">
                            {post.content}
                         </div>
                         
                         {/* Blur Overlay - Starts at 80% */}
                         <div className="absolute top-[80%] bottom-0 left-0 right-0 bg-gradient-to-b from-white/20 via-white/90 to-white backdrop-blur-[2px] flex flex-col items-center justify-center pt-8">
                            <div className="bg-brand-black text-white p-3 rounded-full shadow-lg mb-2">
                               <Lock className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold text-brand-black uppercase tracking-wider">
                               amplify with your insights
                            </span>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIDemo;