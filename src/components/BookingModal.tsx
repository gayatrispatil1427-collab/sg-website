import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal = ({ isOpen, onClose, initialService = 'Editorial Portraiture' }: BookingModalProps) => {
  const [service, setService] = useState(initialService);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('€3,500 - €7,500');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Launch celebratory luxury confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#C5A880', '#1C1B18', '#FAF8F5']
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-all duration-300">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#E5E0D8] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#EAE6DF] bg-white/50">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">Private Inquiry</span>
            <h3 className="text-2xl font-serif-luxury text-[#1C1B18]">Reserve Studio Session</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-[#1C1B18]/60 hover:text-[#1C1B18] hover:bg-[#EAE6DF]/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 bg-[#C5A880]/15 text-[#C5A880] rounded-full flex items-center justify-center mx-auto border border-[#C5A880]/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-serif-luxury text-[#1C1B18]">Reservation Received</h4>
                <p className="text-sm text-[#1C1B18]/70 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#1C1B18]">{fullName}</span>. Our concierge team will review your session specifications for <span className="font-semibold">{service}</span> and reach out within 12 hours.
                </p>
              </div>
              <div className="p-4 bg-white border border-[#EAE6DF] rounded-xl max-w-md mx-auto text-left text-xs text-[#1C1B18]/70 space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#1C1B18]/50">Preferred Date:</span>
                  <span className="font-medium text-[#1C1B18]">{date || 'Flexible'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1C1B18]/50">Target Investment:</span>
                  <span className="font-medium text-[#1C1B18]">{budget}</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#1C1B18] text-[#FAF8F5] rounded-full hover:bg-[#C5A880] transition-colors text-sm font-medium tracking-wider uppercase"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1C1B18]/70 font-semibold mb-1.5">
                  Select Production Category
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors font-medium text-[#1C1B18]"
                >
                  <option value="Wedding & Pre-Wedding Photography">Wedding & Pre-Wedding Photography</option>
                  <option value="Editorial Portraiture">Editorial Portraiture</option>
                  <option value="Baby & Newborn Portraiture">Baby & Newborn Portraiture</option>
                  <option value="Family & Heritage Monograph">Family & Heritage Monograph</option>
                  <option value="Maternity Fine Art">Maternity Fine Art</option>
                  <option value="Cinematic Films & Highlights">Cinematic Films & Highlights</option>
                  <option value="Corporate & VIP Events">Corporate & VIP Events</option>
                </select>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1C1B18]/70 font-semibold mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 bg-white border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1C1B18]/70 font-semibold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@fashionbrand.com"
                    className="w-full px-4 py-3 bg-white border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1C1B18]/70 font-semibold mb-1.5">
                    Target Date / Window
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1C1B18]/70 font-semibold mb-1.5">
                    Estimated Production Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  >
                    <option value="€2,500 - €5,000">€2,500 - €5,000 (Private Portrait)</option>
                    <option value="€5,000 - €12,000">€5,000 - €12,000 (Editorial / Lookbook)</option>
                    <option value="€12,000 - €25,000">€12,000 - €25,000 (Global Campaign)</option>
                    <option value="€25,000+">€25,000+ (Destination Wedding / Multi-Stage)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1C1B18]/70 font-semibold mb-1.5">
                  Production Vision & Creative Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your brand vision, key deliverables, lighting mood, or location requirements..."
                  className="w-full px-4 py-3 bg-white border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-[#1C1B18] text-[#FAF8F5] rounded-xl hover:bg-[#C5A880] transition-all duration-300 text-sm font-medium tracking-widest uppercase flex items-center justify-center space-x-2 group shadow-lg"
              >
                <span>Transmit Private Booking Request</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
