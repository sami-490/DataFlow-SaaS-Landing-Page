import React, { useState, useEffect } from 'react';

export default function DataFlowLanding() {
  const [activeTab, setPricingTab] = useState('monthly');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ background: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: scrolled ? 'rgba(248, 250, 252, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #e2e8f0' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
        padding: '16px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px' }}>⚡</div>
            DataFlow
          </div>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#features" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>Features</a>
            <a href="#pricing" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>Pricing</a>
            <a href="#testimonials" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>Testimonials</a>
            <button style={{ padding: '8px 16px', background: '#06b6d4', color: 'white', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', padding: '120px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '50%', filter: 'blur(60px)' }} />
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '8px 16px', borderRadius: '20px', marginBottom: '24px', fontSize: '13px', color: '#06b6d4', fontWeight: '500' }}>
            ✨ The future of data pipelines is here
          </div>
          
          <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '24px', lineHeight: '1.2', letterSpacing: '-1px' }}>
            Automate your data pipelines in minutes
          </h1>
          
          <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '48px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 48px' }}>
            DataFlow makes it simple to build, test, and deploy production-ready data pipelines without writing code. Connect your data, define your rules, and let us handle the rest.
          </p>
          
          {/* Flow Animation */}
          <div style={{ background: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: '12px', padding: '32px', marginBottom: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {['Source', 'Transform', 'Validate', 'Load'].map((label, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(6, 182, 212, 0.2)', border: '2px solid #06b6d4', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '8px' }}>
                    {i === 0 && '📊'}
                    {i === 1 && '⚙️'}
                    {i === 2 && '✓'}
                    {i === 3 && '💾'}
                  </div>
                  <span style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: '500' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ padding: '14px 32px', background: '#06b6d4', color: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
              Start Free Trial
            </button>
            <button style={{ padding: '14px 32px', background: 'transparent', color: '#06b6d4', border: '2px solid #06b6d4', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
              Watch Demo
            </button>
          </div>

          <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '24px' }}>
            No credit card required. Free account includes up to 1,000 records/month.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
              Powerful features for modern data teams
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '500px', margin: '0 auto' }}>
              Everything you need to manage, transform, and deliver data at scale
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: '🔗', title: 'Multi-Source Connectors', desc: 'Connect to 200+ data sources with pre-built integrations' },
              { icon: '⚡', title: 'Real-Time Processing', desc: 'Stream data in real-time with sub-second latency' },
              { icon: '🛡️', title: 'Enterprise Security', desc: 'End-to-end encryption and compliance with HIPAA & SOC 2' },
              { icon: '📊', title: 'Visual Pipeline Builder', desc: 'Build complex pipelines with our intuitive drag-and-drop interface' },
              { icon: '🔄', title: 'Auto-Scaling', desc: 'Automatically adjust to your data volume without manual intervention' },
              { icon: '📈', title: 'Advanced Monitoring', desc: 'Track pipeline performance with detailed logs and metrics' }
            ].map((feature, i) => (
              <div key={i} style={{ padding: '32px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', transition: 'all 0.3s', cursor: 'pointer' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a', marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '100px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#0f172a', marginBottom: '80px', textAlign: 'center' }}>
            How it works
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { num: '1', title: 'Connect', desc: 'Authenticate your data sources in seconds' },
              { num: '2', title: 'Build', desc: 'Define transformations and validation rules' },
              { num: '3', title: 'Test', desc: 'Run pipelines in sandbox before going live' },
              { num: '4', title: 'Deploy', desc: 'Schedule and monitor in production' }
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: '#06b6d4', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700', margin: '0 auto 24px' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
              Simple, transparent pricing
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '32px' }}>
              Choose the perfect plan for your team
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button
                onClick={() => setPricingTab('monthly')}
                style={{ padding: '10px 24px', background: activeTab === 'monthly' ? '#06b6d4' : 'transparent', color: activeTab === 'monthly' ? 'white' : '#64748b', border: activeTab === 'monthly' ? 'none' : '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}
              >
                Monthly
              </button>
              <button
                onClick={() => setPricingTab('annual')}
                style={{ padding: '10px 24px', background: activeTab === 'annual' ? '#06b6d4' : 'transparent', color: activeTab === 'annual' ? 'white' : '#64748b', border: activeTab === 'annual' ? 'none' : '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { name: 'Starter', price: activeTab === 'monthly' ? '29' : '279', features: ['Up to 10K records/month', 'Basic connectors', 'Community support', 'Manual scheduling'] },
              { name: 'Professional', price: activeTab === 'monthly' ? '99' : '949', features: ['Up to 100K records/month', '150+ connectors', 'Email support', 'Real-time pipelines', 'Advanced monitoring'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited records', 'All connectors', '24/7 phone support', 'Custom integrations', 'Dedicated account manager'] }
            ].map((plan, i) => (
              <div key={i} style={{
                padding: '32px',
                background: plan.popular ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' : '#f8fafc',
                border: plan.popular ? '2px solid #06b6d4' : '1px solid #e2e8f0',
                borderRadius: '12px',
                position: 'relative',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                transformOrigin: 'center'
              }}>
                {plan.popular && <div style={{ position: 'absolute', top: '-12px', left: '16px', background: '#06b6d4', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>Most Popular</div>}

                <h3 style={{ fontSize: '20px', fontWeight: '600', color: plan.popular ? 'white' : '#0f172a', marginBottom: '16px' }}>{plan.name}</h3>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '700', color: plan.popular ? 'white' : '#0f172a' }}>${plan.price}</span>
                  {plan.price !== 'Custom' && <span style={{ color: plan.popular ? '#cbd5e1' : '#64748b', marginLeft: '8px' }}>/{activeTab === 'monthly' ? 'month' : 'year'}</span>}
                </div>

                <button style={{
                  width: '100%',
                  padding: '12px',
                  background: plan.popular ? '#06b6d4' : 'transparent',
                  color: plan.popular ? '#0f172a' : '#06b6d4',
                  border: plan.popular ? 'none' : '2px solid #06b6d4',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: '24px'
                }}>
                  Get Started
                </button>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {plan.features.map((feature, j) => (
                    <li key={j} style={{ padding: '8px 0', color: plan.popular ? '#cbd5e1' : '#64748b', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#06b6d4' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: '100px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#0f172a', marginBottom: '80px', textAlign: 'center' }}>
            Loved by data teams worldwide
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {[
              { name: 'Sarah Chen', role: 'Data Engineer at TechCorp', content: 'DataFlow reduced our pipeline development time by 70%. What took weeks now takes days. Absolutely game-changing.', avatar: '👨‍💼' },
              { name: 'Marcus Rodriguez', role: 'CTO at DataViz Inc', content: 'The visual builder is incredibly intuitive. Our team went from zero to production pipelines in under 24 hours.', avatar: '👩‍💼' },
              { name: 'Priya Patel', role: 'Analytics Lead at StartupXYZ', content: 'Best investment we made this year. The ROI was immediate, and the support team is fantastic.', avatar: '👨‍💼' }
            ].map((testimonial, i) => (
              <div key={i} style={{
                padding: '32px',
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '12px'
              }}>
                <div style={{ display: 'flex', marginBottom: '16px', gap: '4px' }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#fbbf24' }}>★</span>)}
                </div>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px', lineHeight: '1.8', fontStyle: 'italic' }}>"{testimonial.content}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontSize: '32px' }}>{testimonial.avatar}</div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a', margin: 0 }}>{testimonial.name}</p>
                    <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '16px', textAlign: 'center' }}>
            Ready to automate your pipelines?
          </h2>
          <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '48px', textAlign: 'center', lineHeight: '1.6' }}>
            Join hundreds of data teams using DataFlow to build production-ready pipelines faster.
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="email"
              placeholder="your@company.com"
              style={{
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px'
              }}
            />
            <input
              type="text"
              placeholder="Company name"
              style={{
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px'
              }}
            />
            <textarea
              placeholder="Tell us about your use case..."
              rows="4"
              style={{
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'inherit',
                resize: 'none'
              }}
            />
            <button style={{
              padding: '14px 32px',
              background: '#06b6d4',
              color: '#0f172a',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f172a', color: '#cbd5e1', padding: '48px 24px', textAlign: 'center', fontSize: '14px' }}>
        <p>© 2024 DataFlow. All rights reserved. | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
}