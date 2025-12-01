import React, { useState } from 'react';
import { Calendar, Loader2, CheckCircle, ArrowRight, XCircle } from 'lucide-react';
import { sendEmail } from '../services/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    challenge: ''
  });
  
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    setErrorMessage('');

    const success = await sendEmail(formData);

    if (success) {
      setStatus('SUCCESS');
      setFormData({ name: '', company: '', email: '', challenge: '' });
    } else {
      setStatus('ERROR');
      setErrorMessage('Failed to send your request. Please try again or contact us directly at founders@contentviking.ca');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-offwhite">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow" />
            <h2 className="text-4xl md:text-5xl font-display text-brand-yellow">Book a Demo</h2>
          </div>
          <p className="text-xl md:text-xl text-brand-black font-bold tracking-tight">
            We only take on 5 new clients per month. Book a discovery audit below.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-soft min-h-[500px] flex items-center justify-center">
          
          {status === 'ERROR' ? (
            <div className="text-center max-w-md animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-3xl font-display font-bold text-brand-black mb-4">Error Sending Request</h3>
              <p className="text-brand-darkgray text-lg mb-8 leading-relaxed">
                {errorMessage}
              </p>
              <button 
                onClick={() => setStatus('IDLE')}
                className="inline-flex items-center text-brand-black font-bold border-b-2 border-brand-yellow hover:border-brand-black transition-colors"
              >
                Try Again <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ) : status === 'SUCCESS' ? (
            <div className="text-center max-w-md animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-display font-bold text-brand-black mb-4">Request Sent!</h3>
              <p className="text-brand-darkgray text-lg mb-8 leading-relaxed">
                Thank you for reaching out. We have received your audit request and sent a confirmation to our team at <span className="font-bold text-brand-black">founders@contentviking.ca</span>.
              </p>
              <button 
                onClick={() => setStatus('IDLE')}
                className="inline-flex items-center text-brand-black font-bold border-b-2 border-brand-yellow hover:border-brand-black transition-colors"
              >
                Send another request <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ) : (
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-brand-darkgray mb-2 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-brand-black focus:border-brand-black focus:ring-0 outline-none transition-all disabled:opacity-50" 
                    placeholder="Erik the Red"
                    required
                    disabled={status === 'SENDING'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-darkgray mb-2 uppercase tracking-wider">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-brand-black focus:border-brand-black focus:ring-0 outline-none transition-all disabled:opacity-50" 
                    placeholder="Viking SaaS Inc." 
                    required
                    disabled={status === 'SENDING'}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-darkgray mb-2 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-brand-black focus:border-brand-black focus:ring-0 outline-none transition-all disabled:opacity-50" 
                  placeholder="erik@contentviking.com" 
                  required
                  disabled={status === 'SENDING'}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-darkgray mb-2 uppercase tracking-wider">Content Challenge</label>
                <textarea 
                  rows={4} 
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-brand-black focus:border-brand-black focus:ring-0 outline-none transition-all disabled:opacity-50" 
                  placeholder="I have 100 hours of sales calls but 0 LinkedIn posts..." 
                  required
                  disabled={status === 'SENDING'}
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'SENDING'}
                className="w-full bg-brand-black text-white font-bold text-lg py-4 rounded shadow-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'SENDING' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Request Content Audit"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;