import Spline from '@splinetool/react-spline';
import { Shield, BadgeCheck } from 'lucide-react';

const Logo = () => (
  <img
    src="https://wafir.app/wp-content/themes/wafir-app-theme/images/main-logo.png"
    alt="Wafir"
    className="h-8 w-auto"
  />
);

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Top navigation */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-slate-300 flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-3 py-1.5 rounded-full">
              <Shield size={14} className="text-[#FAA52E]" />
              Licensed by QCB Sandbox
            </span>
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-full bg-[#227384] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Download the App
            </a>
          </div>
        </div>
      </div>

      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays - do not block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950"></div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-40">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#227384]/40 bg-[#227384]/15 px-3 py-1 text-[#FAA52E] text-xs font-medium">
              <BadgeCheck size={14} />
              Save Smart, Together
            </div>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Empowering Communities to Save, Earn, and Grow — Together.
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl">
              Join trusted saving circles regulated under Qatar Central Bank’s Sandbox.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-full bg-[#227384] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Join the Circle
              </a>
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-full border border-[#FAA52E] text-[#FAA52E] bg-slate-900/40 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-slate-900/60"
              >
                Download the App
              </a>
            </div>

            {/* Avatar ring animation */}
            <div className="mt-10">
              <div className="relative h-36 w-36">
                <div className="absolute inset-0 rounded-full border border-[#227384]/40 animate-spin-slow"></div>
                {[...Array(8)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute h-8 w-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-[#FAA52E] to-[#227384] shadow-md"
                    style={{
                      top: `${50 + 42 * Math.sin((i * Math.PI) / 4)}%`,
                      left: `${50 + 42 * Math.cos((i * Math.PI) / 4)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Community members exchange funds in transparent, scheduled turns.
              </p>
            </div>
          </div>

          {/* Mockup panel */}
          <div className="lg:pl-10">
            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur">
              <div className="aspect-[9/19] w-full rounded-2xl bg-slate-950 ring-1 ring-slate-800 p-4">
                <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 text-sm text-slate-300 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Wafir Wallet</span>
                    <span className="text-xs" style={{ color: '#FAA52E' }}>Next payout: 05:12:33</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {["Contribute", "Members", "Schedule", "Rewards"].map((t) => (
                      <div key={t} className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                        <p className="text-xs text-slate-400">{t}</p>
                        <p className="mt-2 text-lg font-semibold">{t === 'Contribute' ? 'QAR 1,000' : t === 'Members' ? '10' : t === 'Schedule' ? 'Monthly' : '120 pts'}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <button className="mt-4 w-full rounded-lg bg-[#227384] py-2 text-white font-semibold hover:brightness-110">
                      Contribute Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
              <Shield size={14} className="text-[#FAA52E]" /> Licensed by QCB Sandbox
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 12s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
      `}</style>
    </section>
  );
}
