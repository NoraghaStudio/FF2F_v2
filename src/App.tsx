import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container h-16 md:h-20 flex items-center justify-between">
          <img src="/logo.svg" alt="FF2F" className="h-6 md:h-8" />
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded-full text-sm transition-all">
            Book a Call
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-24 md:pb-32 bg-gradient-to-b from-primary-900/20 to-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-10 gradient-text leading-tight">
              Join a Community of Successful Entrepreneurs
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge strategies and techniques from top-performing affiliates.
              Build your own wealth-generating skillset with guidance from verified experts.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all shadow-lg hover:shadow-primary-600/25">
              Book Your Call Now
            </button>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-20 md:py-24 bg-black">
        <div className="container">
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/875313711?h=2f3aed4559"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-primary-950/30">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 md:mb-20 max-w-3xl mx-auto leading-tight">
            Is It Time to Take Control of Your <span className="gradient-text">Financial Future</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              "Do you dream of making a <span class='gradient-text font-semibold'>bigger impact</span> in your life but don't know where to start?",
              "Have you thought about <span class='gradient-text font-semibold'>affiliate marketing</span> but felt overwhelmed about how to begin?",
              "Are you already in the game but struggling to unlock your <span class='gradient-text font-semibold'>full earning potential</span>?",
              "Do you see the value in connecting with <span class='gradient-text font-semibold'>successful affiliates</span> but don't know how?",
              "Are you ready to stop watching others succeed and start building your own <span class='gradient-text font-semibold'>online income</span>?",
              "Want to learn the <span class='gradient-text font-semibold'>proven strategies</span> that consistently generate results?"
            ].map((question, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all hover:transform hover:scale-105">
                <CheckCircle2 className="text-primary-500 w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: question }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary-950/30 to-black">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 md:mb-20 gradient-text">
            Real People. Real Results.
          </h2>
          <div className="space-y-16 md:space-y-20">
            {/* Testimonial 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
              <div className="lg:w-1/2">
                <div className="testimonial-text">
                  <p>Meet Carlos, a college student.</p>
                  <p>He was drowning in expenses.</p>
                  <p>He tried making money online.</p>
                  <p>Now he earns $4K/month passively.</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src="https://player.vimeo.com/video/874591658?h=baafb70d44"
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-6 md:gap-8">
              <div className="lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src="https://player.vimeo.com/video/875041055?h=6cfb3333f5"
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="testimonial-text">
                  <p>Jane worked a 9-to-5 job.</p>
                  <p>He barely had time for family.</p>
                  <p>He joined and followed the steps.</p>
                  <p>Now He makes money in His sleep.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
              <div className="lg:w-1/2">
                <div className="testimonial-text">
                  <p>Jason was tired of scams.</p>
                  <p>He lost money on fake courses.</p>
                  <p>This program showed him real results.</p>
                  <p>Now he finally sees profits daily.</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src="https://player.vimeo.com/video/875040767?h=a6a1893c59"
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-6 md:gap-8">
              <div className="lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src="https://player.vimeo.com/video/875040479?h=4b65e13c04"
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="testimonial-text">
                  <p>Jake was a complete beginner.</p>
                  <p>He didn't know where to start.</p>
                  <p>With proper guidance, he learned fast.</p>
                  <p>Now he's making his first $5K.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-primary-900/20">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 gradient-text leading-tight">
                Ready to Scale Your Business?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
                Let's take the guesswork out of <span className="gradient-text font-semibold">affiliate marketing</span>. Our tested strategies, proven methods, and expert guidance will help you <span className="gradient-text font-semibold">grow with confidence</span>.
              </p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all shadow-lg hover:shadow-primary-600/25 flex items-center gap-2 mx-auto lg:mx-0">
                Book Your Strategy Call <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="lg:w-1/2 relative max-w-md lg:max-w-none mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img 
                src="/FF2F_v2/public/John.png"
                alt="FF2F Owner" 
                className="w-1/2 md:w-1/2 mx-auto rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t border-white/10">
        <div className="container text-center text-gray-500">
          <p className="text-sm">&copy; {new Date().getFullYear()} FF2F. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
