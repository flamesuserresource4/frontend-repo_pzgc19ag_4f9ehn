import { Star, Quote, Apple, Play, QrCode, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Testimonial = ({ quote, name }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" className="text-amber-400" />
      ))}
    </div>
    <p className="mt-3 text-slate-200 text-lg leading-relaxed">
      <Quote className="inline-block mr-1 text-slate-400" size={18} />
      {quote}
    </p>
    <p className="mt-3 text-sm text-slate-400">— {name}</p>
  </div>
);

export default function SocialProofAndDownload() {
  return (
    <section id="download" className="relative border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Community / Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Testimonial quote="Wafir made saving easy and fun for our group." name="Aisha A." />
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-3xl font-extrabold">10,000+</p>
            <p className="text-slate-400">Successful payouts and growing</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Bronze', 'Silver', 'Gold', 'Platinum'].map((b) => (
                <span key={b} className="text-xs rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-2 py-1">{b} Circle Badge</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-lg font-semibold">Community-first</p>
            <p className="mt-2 text-slate-300">Join trusted saving circles backed by transparent records and fair matching.</p>
            <div className="mt-4 flex -space-x-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="h-8 w-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-cyan-400 to-emerald-400 inline-block" />
              ))}
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Start Saving Smarter — Download Wafir Today.</h3>
              <p className="mt-2 text-slate-300">Get the app and join a circle in minutes.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm font-semibold hover:bg-slate-900/80">
                  <Apple size={18} /> App Store
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm font-semibold hover:bg-slate-900/80">
                  <Play size={18} /> Google Play
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-400">
                  Join Beta Access
                </a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <QrCode />
                <div>
                  <p className="text-sm font-semibold">Scan to Download</p>
                  <p className="text-xs text-slate-400">Open camera and scan QR code</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 grid gap-6 border-t border-slate-800 pt-8 md:grid-cols-3">
          <div className="space-y-3">
            <img src="https://wafir.app/wp-content/themes/wafir-app-theme/images/main-logo.png" alt="Wafir" className="h-7 w-auto" />
            <p className="text-sm text-slate-400">Wafir operates under the Qatar Central Bank Sandbox.</p>
          </div>
          <div>
            <p className="font-semibold">Quick Links</p>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-300">
              {['About', 'How It Works', 'FAQ', 'Contact', 'Privacy Policy'].map((l) => (
                <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">Connect</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <a href="#" className="inline-flex items-center gap-1 hover:text-white"><Linkedin size={16}/> LinkedIn</a>
              <a href="#" className="inline-flex items-center gap-1 hover:text-white"><Instagram size={16}/> Instagram</a>
              <a href="#" className="inline-flex items-center gap-1 hover:text-white"><Twitter size={16}/> Twitter</a>
              <a href="mailto:support@wafir.app" className="inline-flex items-center gap-1 hover:text-white"><Mail size={16}/> support@wafir.app</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
