export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automate Employee Wellness Check-Ins
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Send personalized wellness surveys, detect concerning responses with sentiment analysis, and get instant HR alerts — all on autopilot.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Automated Surveys</h3>
            <p className="text-sm text-[#8b949e]">Schedule recurring wellness check-ins delivered straight to employee inboxes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🧠</div>
            <h3 className="font-semibold text-white mb-1">Sentiment Detection</h3>
            <p className="text-sm text-[#8b949e]">AI flags distress signals in responses so HR can act before issues escalate.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">HR Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Monitor wellness trends across your team with clear, actionable insights.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li>✅ Unlimited wellness surveys</li>
            <li>✅ Sentiment analysis on all responses</li>
            <li>✅ Instant HR alert emails</li>
            <li>✅ Team wellness trend dashboard</li>
            <li>✅ Email support</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How are surveys delivered to employees?</h3>
            <p className="text-sm text-[#8b949e]">Surveys are sent via email on a schedule you configure. Employees click a link to complete a short, anonymous check-in form.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the sentiment detection work?</h3>
            <p className="text-sm text-[#8b949e]">Responses are analyzed for keywords and patterns associated with stress, burnout, or distress. HR is alerted immediately when a concerning response is detected.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is employee data kept private?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Individual responses are anonymized in aggregate reports. Only flagged responses are surfaced to HR, and all data is encrypted at rest.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Wellness Check Automator. All rights reserved.
      </footer>
    </main>
  )
}
