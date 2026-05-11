export default function AIWorkspaceLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <nav className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop"
              alt="Logo"
              className="w-14 h-14 rounded-2xl object-cover border border-white/10 shadow-2xl"
            />

            <div>
              <h1 className="text-2xl font-bold">AeNovaAI Workspace</h1>
            <p className="text-zinc-500 text-sm">Premium AI Productivity Tools</p>
            </div>
          </div>

          <button className="px-5 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition">
            Contact Support
          </button>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-6">
              Trusted AI Productivity Support Service
            </div>

            <h2 className="text-6xl font-bold leading-tight mb-6">
              Access Modern AI Tools In One Workspace
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
              AI productivity support services for students, creators, freelancers, and online businesses. We help clients with onboarding, setup assistance, workflow guidance, and digital productivity solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-white text-black px-7 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
                Buy Subscription
              </button>

              <button className="border border-white/10 px-7 py-4 rounded-2xl hover:bg-white/10 transition">
                Telegram Support
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-zinc-400 text-sm">Fast Support</div>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="text-2xl font-bold mb-1">Instant</div>
                <div className="text-zinc-400 text-sm">Digital Delivery</div>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="text-2xl font-bold mb-1">Secure</div>
                <div className="text-zinc-400 text-sm">Cloud Access</div>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="text-2xl font-bold mb-1">Global</div>
                <div className="text-zinc-400 text-sm">International Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
              alt="AI Dashboard"
              className="w-full h-52 object-cover rounded-3xl mb-6 border border-white/10 opacity-90"
            />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold">Premium Plans</h3>
                  <p className="text-zinc-400 text-sm mt-1">Choose your subscription</p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 text-sm">
                  Online
                </div>
              </div>

              <div className="space-y-5">
                <div className="relative overflow-hidden p-6 rounded-3xl border border-white/10 bg-black/40 hover:border-white/20 transition">
                  <img
                    src="https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1200&auto=format&fit=crop"
                    alt="AI Starter"
                    className="w-full h-40 object-cover rounded-2xl mb-5 border border-white/10"
                  />
                  <div className="absolute right-4 top-4 text-6xl font-black text-white/5 select-none">
                    AI
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-semibold">AI Starter Access</h4>
                    <span className="text-3xl font-bold">$9</span>
                  </div>

                  <p className="text-zinc-400 mb-5">
                    Basic onboarding and AI productivity support for personal and online work.
                  </p>

                  <button className="w-full py-3 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition">
                    Buy Now
                  </button>
                </div>

                <div className="relative overflow-hidden p-6 rounded-3xl border border-white bg-white text-black shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1200&auto=format&fit=crop"
                    alt="Premium Workspace"
                    className="w-full h-40 object-cover rounded-2xl mb-5"
                  />
                  <div className="absolute right-4 top-4 text-6xl font-black text-black/5 select-none">
                    PRO
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-semibold">Premium Workspace</h4>
                    <span className="text-3xl font-bold">$19</span>
                  </div>

                  <p className="text-black/70 mb-5">
                    Advanced productivity assistance with priority support and faster response times.
                  </p>

                  <button className="w-full py-3 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition">
                    Subscribe
                  </button>
                </div>

                <div className="relative overflow-hidden p-6 rounded-3xl border border-white/10 bg-black/40 hover:border-white/20 transition">
                  <img
                    src="https://images.unsplash.com/photo-1686191128892-3d7d7d53e5d3?q=80&w=1200&auto=format&fit=crop"
                    alt="Creator Tools"
                    className="w-full h-40 object-cover rounded-2xl mb-5 border border-white/10"
                  />
                  <div className="absolute right-4 top-4 text-6xl font-black text-white/5 select-none">
                    AI
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-semibold">Creator Tools Bundle</h4>
                    <span className="text-3xl font-bold">$29</span>
                  </div>

                  <p className="text-zinc-400 mb-5">
                    Advanced AI productivity tools and digital workflow assistance for creators and freelancers.
                  </p>

                  <button className="w-full py-3 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition">
                    Buy Now
                  </button>
                </div>

                <div className="relative overflow-hidden p-6 rounded-3xl border border-white/10 bg-black/40 hover:border-white/20 transition">
                  <img
                    src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop"
                    alt="Cloud Productivity"
                    className="w-full h-40 object-cover rounded-2xl mb-5 border border-white/10"
                  />
                  <div className="absolute right-4 top-4 text-6xl font-black text-white/5 select-none">
                    AI
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-semibold">Cloud Productivity Pack</h4>
                    <span className="text-3xl font-bold">$39</span>
                  </div>

                  <p className="text-zinc-400 mb-5">
                    Premium cloud productivity support and workspace onboarding assistance.
                  </p>

                  <button className="w-full py-3 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition">
                    Buy Now
                  </button>
                </div>

                <div className="relative overflow-hidden p-6 rounded-3xl border border-white/10 bg-black/40 hover:border-white/20 transition">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                    alt="Business Suite"
                    className="w-full h-40 object-cover rounded-2xl mb-5 border border-white/10"
                  />
                  <div className="absolute right-4 top-4 text-6xl font-black text-white/5 select-none">
                    AI
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-semibold">Business Productivity Suite</h4>
                    <span className="text-3xl font-bold">$79</span>
                  </div>

                  <p className="text-zinc-400 mb-5">
                    Enterprise productivity setup assistance with premium support for business users.
                  </p>

                  <button className="w-full py-3 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition">
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-sm text-zinc-400 leading-relaxed">
                <p className="mb-2">
                  Refund Policy: Digital services are non-refundable after successful delivery.
                </p>

                <p className="mb-2">
                  Contact: Inovakk6996@gmail.com
                </p>

                <p>
                  Telegram: @Inovaai6996
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Easy Access</h3>
            <p className="text-zinc-400 leading-relaxed">
              Quick onboarding process with responsive support and smooth activation.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
            <p className="text-zinc-400 leading-relaxed">
              Trusted online checkout experience with international payment support.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Premium Support</h3>
            <p className="text-zinc-400 leading-relaxed">
              Fast customer assistance through Telegram and email support.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
