import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage = ({ onOpenBooking }: ContactPageProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Wedding Photography');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sangliStudio = {
    city: 'Sangli (Flagship)',
    address: 'Near State Bank, Below SVC Bank, Beside Vishrambag Ganpati Temple, Sangli - 416415, Maharashtra',
    officePhone: '9130053081',
    mobilePhone: '9422427981',
    phoneText: 'Office: 9130053081 | Mobile: 9422427981',
    email: 'sachinphoto32@gmail.com',
    hours: '9:30 AM – 8:30 PM (Daily)',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.577239103841!2d74.6015509!3d16.8472506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230000000001%3A0x1234567890abcdef!2sVishrambag%2C%20Sangli%2C%20Maharashtra%20416415!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#C5A880', '#1C1B18', '#FAF8F5']
    });
  };

  return (
    <div className="pt-28 pb-24 space-y-24 bg-[#FAF8F5] text-[#1C1B18] overflow-x-hidden">
      
      {/* 1. Header & Direct Inquiry Callout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Studio Address & Inquiry</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury leading-[1.08]">
            Visit Our Atelier or Reserve Your Session.
          </h1>
          <p className="text-base text-[#1C1B18]/70 font-light leading-relaxed">
            Our studio directors review all booking requests promptly. Visit our Sangli flagship studio near Vishrambag Ganpati Temple or contact us directly via phone/WhatsApp.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#C5A880] text-[#1C1B18] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#1C1B18] hover:text-white transition-all shadow-md"
            >
              Open Fast Reservation Drawer &rarr;
            </button>
            <a
              href="https://wa.me/919422427981"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-emerald-800 transition-all shadow-md flex items-center space-x-2"
            >
              <span>WhatsApp Direct: 9422427981</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Official Sangli Address & Contact Info Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#1C1B18] text-[#FAF8F5] p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden text-left">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span>Flagship Studio Address</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white leading-snug">
                Near State Bank, Below SVC Bank, Beside Vishrambag Ganpati Temple, Sangli - 416415, Maharashtra
              </h2>

              <div className="space-y-3 pt-2 text-sm sm:text-base text-[#EAE6DF]/90 font-light">
                <div className="flex flex-wrap items-center gap-4 text-[#C5A880] font-medium">
                  <span className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Office: <a href="tel:9130053081" className="underline hover:text-white">9130053081</a></span>
                  </span>
                  <span>|</span>
                  <span className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Mobile: <a href="tel:9422427981" className="underline hover:text-white">9422427981</a></span>
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-white/70 pt-1">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <span>Hours: 9:30 AM – 8:30 PM (Daily)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
              <a
                href="tel:9130053081"
                className="w-full py-4 bg-[#C5A880] text-[#1C1B18] rounded-2xl text-center font-semibold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Office: 9130053081</span>
              </a>

              <a
                href="tel:9422427981"
                className="w-full py-4 bg-white/10 text-white border border-white/20 rounded-2xl text-center font-semibold text-xs uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Call Mobile: 9422427981</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Inquiry Form & Studio Information */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE6DF] shadow-xl space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-1">
                Concierge Booking Form
              </span>
              <h2 className="text-3xl font-serif-luxury text-[#1C1B18]">Request Private Session</h2>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-[#C5A880]/15 text-[#C5A880] rounded-full flex items-center justify-center mx-auto border border-[#C5A880]/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif-luxury text-[#1C1B18]">Inquiry Received</h3>
                  <p className="text-sm text-[#1C1B18]/70 max-w-md mx-auto font-light">
                    Thank you, <span className="font-semibold text-[#1C1B18]">{fullName}</span>. Our studio concierge will contact you shortly regarding your <span className="font-semibold">{category}</span> inquiry.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-[#1C1B18] text-[#FAF8F5] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A880] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1B18]/70 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1B18]/70 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1B18]/70 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98220 00000"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1B18]/70 mb-1.5">
                      Service Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Cinematic Wedding Films">Cinematic Wedding Films</option>
                      <option value="Birthday & Gala Events">Birthday & Gala Events</option>
                      <option value="Baby & Newborn Portraiture">Baby & Newborn Portraiture</option>
                      <option value="Family Heritage Monograph">Family Heritage Monograph</option>
                      <option value="Maternity Fine Art">Maternity Fine Art</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1B18]/70 mb-1.5">
                    Target Event Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1B18]/70 mb-1.5">
                    Session Notes / Vision
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your event details, location, preferences, or questions..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl text-sm focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1C1B18] text-[#FAF8F5] rounded-xl hover:bg-[#C5A880] hover:text-[#1C1B18] transition-all duration-300 text-xs font-semibold tracking-widest uppercase flex items-center justify-center space-x-2 group shadow-lg"
                >
                  <span>Submit Booking Request</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Right Location & Quick Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-[#EAE6DF] shadow-md space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block">
                Flagship Location Details
              </span>

              <div className="p-5 rounded-2xl border border-[#C5A880] bg-[#C5A880]/10 space-y-3">
                <div className="flex items-center justify-between font-serif-luxury text-xl text-[#1C1B18]">
                  <span>Sangli Studio</span>
                  <span className="text-[10px] uppercase font-semibold bg-[#1C1B18] text-white px-2.5 py-0.5 rounded-full">
                    Main Branch
                  </span>
                </div>
                <p className="text-xs text-[#1C1B18]/80 leading-relaxed">
                  Near State Bank, Below SVC Bank, Beside Vishrambag Ganpati Temple, Sangli - 416415, Maharashtra
                </p>
                <div className="pt-3 border-t border-[#EAE6DF] text-xs font-medium text-[#C5A880]">
                  Office: 9130053081 | Mobile: 9422427981
                </div>
              </div>

              <div className="text-xs text-[#1C1B18]/70 space-y-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <span>Working Hours: 9:30 AM – 8:30 PM (Daily)</span>
                </div>
              </div>
            </div>

            {/* Quick Call Action Card */}
            <div className="p-6 bg-[#1C1B18] text-white rounded-3xl space-y-4 border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                Direct Assistance
              </span>
              <h4 className="text-xl font-serif-luxury text-white">Need Immediate Assistance?</h4>
              <p className="text-xs text-white/70 font-light">
                Call our office or mobile lines directly for fast shoot availability.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:9130053081"
                  className="w-full py-3 bg-[#C5A880] text-[#1C1B18] rounded-xl text-center text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  Call Office: 9130053081
                </a>
                <a
                  href="tel:9422427981"
                  className="w-full py-3 bg-white/10 text-white rounded-xl text-center text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20"
                >
                  Call Mobile: 9422427981
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Google Map Location Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE6DF] shadow-xl space-y-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE6DF] pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block">
                Interactive Map Location
              </span>
              <h2 className="text-3xl font-serif-luxury text-[#1C1B18]">
                Visit Sangli Studio
              </h2>
            </div>
            <span className="text-xs text-[#1C1B18]/60 font-light">
              {sangliStudio.address}
            </span>
          </div>

          {/* Embedded Google Map iframe */}
          <div className="relative aspect-[21/9] min-h-[350px] rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-inner bg-[#EAE6DF]">
            <iframe
              src={sangliStudio.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sangli Studio Google Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
