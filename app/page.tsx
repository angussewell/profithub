/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] text-white ${inter.className}`}>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-[#0A0A0A]/80 backdrop-blur-lg z-50 border-b border-white/5">
        <div className="flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ProfitHub Full Logo - White.png"
              alt="ProfitHub"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <a href="https://app.profitibull.com/login" className="text-gray-400 hover:text-white transition-colors">Log in</a>
            <Link href="/book-demo" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full">
              Book a Demo
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full blur-3xl -top-1/2 -right-1/4 opacity-20 animate-pulse" />
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-l from-primary/30 to-blue-500/30 rounded-full blur-3xl -bottom-1/2 -left-1/4 opacity-20 animate-pulse delay-1000" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm mb-6 border border-primary/20 backdrop-blur-sm">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Meet The Future of Sales</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 max-w-4xl leading-[1.05] tracking-[0.02em]">
                Your team is wasting<br/>15 hours a week on<br/><span className="text-primary">low&#8209;value&nbsp;work</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-light tracking-wide leading-relaxed">
                We analyzed 10,000+ sales teams. The data is clear: Your best people spend 65% of their time on tasks AI should handle. We fixed that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full" asChild>
                  <Link href="/industry-fit">
                    <span className="relative z-10">Check Your Industry Fit →</span>
                  </Link>
                </Button>
                <Button className="bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-lg rounded-full border border-white/10 hover:border-primary/20 transition-colors" asChild>
                  <Link href="/book-demo">Book Demo</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Industry-trained AI models</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Custom-trained on your data</span>
                </div>
              </div>
            </div>

            {/* Workflow Section - Focus on Tech Stack Unification */}
            <div className="relative py-32">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />
                <div className="absolute w-full h-full bg-[linear-gradient(transparent_9px,rgba(255,255,255,0.05)_1px)] bg-[length:10px_10px]" />
              </div>
              
              <div className="relative max-w-6xl mx-auto">
                {/* Animated Connection Lines */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
                  <svg className="w-full h-24" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
                    <path 
                      className="animate-dash"
                      d="M200 50 C 400 50, 400 50, 600 50" 
                      stroke="url(#gradient1)" 
                      strokeWidth="2" 
                      strokeDasharray="8 8"
                    />
                    <path 
                      className="animate-dash"
                      d="M600 50 C 800 50, 800 50, 1000 50" 
                      stroke="url(#gradient2)" 
                      strokeWidth="2" 
                      strokeDasharray="8 8"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(239, 68, 68)" />
                        <stop offset="100%" stopColor="rgb(59, 130, 246)" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                        <stop offset="100%" stopColor="rgb(34, 197, 94)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  {/* Input Node */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />
                    <div className="relative p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                      <div className="absolute -top-3 -right-3 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Lead Capture</span>
                      </div>
                      <div className="space-y-3 relative">
                        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors">
                          <div className="w-2 h-2 rounded-full bg-primary/60" />
                          <span>Forms & Landing Pages</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors">
                          <div className="w-2 h-2 rounded-full bg-primary/60" />
                          <span>Email & SMS Opt-in</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors">
                          <div className="w-2 h-2 rounded-full bg-primary/60" />
                          <span>Social Media Integration</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Process Node */}
                  <div className="relative group -mt-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />
                    <div className="relative p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                      <div className="absolute -top-3 -right-3 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Smart Processing</span>
                      </div>
                      <div className="space-y-3 relative">
                        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-500 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-blue-500/60" />
                          <span>AI Lead Scoring</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-500 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-blue-500/60" />
                          <span>Automated Segmentation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-500 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-blue-500/60" />
                          <span>Workflow Triggers</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Output Node */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />
                    <div className="relative p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                      <div className="absolute -top-3 -right-3 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Conversion</span>
                      </div>
                      <div className="space-y-3 relative">
                        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-500 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-green-500/60" />
                          <span>Smart Follow-ups</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-500 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-green-500/60" />
                          <span>Meeting Scheduling</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-500 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-green-500/60" />
                          <span>Deal Closing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pipeline Section - Focus on AI + Human Balance */}
            <div className="flex flex-col md:flex-row gap-16 items-center mt-24">
              <div className="flex-1">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm mb-6 border border-primary/20 backdrop-blur-sm">
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Work Smarter Not Harder</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-[0.02em] leading-[1.1]">
                  Your best people spend<br/>65% of their day<br/><span className="text-4xl md:text-5xl text-primary">on data entry</span>.
                </h2>
                <div className="space-y-8 mt-12">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">End Manual Data Entry</h3>
                      <p className="text-gray-400">
                        No more copying between tools. AI syncs your emails, calls, and meetings into one timeline. Your CRM updates itself.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Write Less, Sell More</h3>
                      <p className="text-gray-400">
                        AI writes your follow-ups based on past wins. No templates. No copying and pasting. Just personalized messages that work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Never Drop The Ball</h3>
                      <p className="text-gray-400">
                        AI monitors response times, meeting follow-ups, and deal progress. You get alerts before opportunities go cold.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative rounded-2xl bg-[#0A0A0A] border border-white/5 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500" />
                  <div className="p-8">
                    <div className="flex flex-col">
                      {/* Pipeline Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-lg text-white">Sales Pipeline</div>
                            <div className="text-sm text-gray-500">12 Active Deals</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                            <span className="text-sm font-medium text-primary">$45,850</span>
                          </div>
                          <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Pipeline Stages */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary/60" />
                                <span className="text-sm font-medium text-white">New Leads</span>
                              </div>
                              <span className="text-xs font-medium text-gray-500">4</span>
                            </div>
                            <div className="flex flex-col gap-3">
                              <div className="p-3 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-primary/20 transition-colors cursor-pointer group">
                                <div className="text-sm font-medium text-white group-hover:text-primary transition-colors">John Smith</div>
                                <div className="text-xs text-gray-500">$12,000</div>
                              </div>
                              <div className="p-3 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-primary/20 transition-colors cursor-pointer group">
                                <div className="text-sm font-medium text-white group-hover:text-primary transition-colors">Sarah Johnson</div>
                                <div className="text-xs text-gray-500">$8,500</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500/60" />
                                <span className="text-sm font-medium text-white">In Progress</span>
                              </div>
                              <span className="text-xs font-medium text-gray-500">5</span>
                            </div>
                            <div className="flex flex-col gap-3">
                              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/[0.08] to-blue-500/[0.02] border border-blue-500/20 hover:border-blue-500/30 transition-colors cursor-pointer group">
                                <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Mike Brown</div>
                                <div className="text-xs text-gray-500">$15,350</div>
                              </div>
                              <div className="p-3 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-blue-500/20 transition-colors cursor-pointer group">
                                <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Lisa Davis</div>
                                <div className="text-xs text-gray-500">$10,000</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                                <span className="text-sm font-medium text-white">Closed Won</span>
                              </div>
                              <span className="text-xs font-medium text-gray-500">3</span>
                            </div>
                            <div className="flex flex-col gap-3">
                              <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/[0.08] to-green-500/[0.02] border border-green-500/20 hover:border-green-500/30 transition-colors cursor-pointer group">
                                <div className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">Tech Corp</div>
                                <div className="text-xs text-gray-500">$25,000</div>
                              </div>
                              <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/[0.08] to-green-500/[0.02] border border-green-500/20 hover:border-green-500/30 transition-colors cursor-pointer group">
                                <div className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">Global Systems</div>
                                <div className="text-xs text-gray-500">$35,000</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pipeline Analytics */}
                      <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary via-blue-500 to-green-500" />
                            <span className="text-sm font-medium text-white">Pipeline Health</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">Conversion Rate</span>
                            <span className="text-xs font-medium text-white">65%</span>
                          </div>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-[65%] bg-gradient-to-r from-primary via-blue-500 to-green-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Section */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm mb-6 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Industry-Leading AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-[0.02em] leading-[1.1]">
              Generic AI is<br/>worse than no&nbsp;AI.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light tracking-wide leading-relaxed">
              We built specialized AI models for each industry. Trained on real data, real workflows, real success patterns. No more adapting to generic systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Real Estate Intelligence</h3>
                  <p className="text-gray-400">
                    MLS data becomes actionable insights. Market patterns trigger precise actions. Showings convert automatically.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">SaaS Growth Engine</h3>
                  <p className="text-gray-400">
                    Product usage signals drive sales actions. Trial conversion and expansion happen systematically.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Medical Business Growth</h3>
                  <p className="text-gray-400">
                    Patient data drives retention strategies. Insurance claims optimize automatically. Appointments fill predictively.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Coaching Practice Scale</h3>
                  <p className="text-gray-400">
                    Client progress triggers upsell moments. Session insights compound into programs. Referrals generate systematically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-50" />
            <div className="absolute w-full h-full bg-[linear-gradient(transparent_9px,rgba(255,255,255,0.05)_1px)] bg-[length:10px_10px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm mb-6 border border-primary/20 backdrop-blur-sm">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Powerful Integrations</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-[0.02em] leading-[1.1]">
                Connect with your <span className="text-primary">favorite tools</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
                Integrate with the tools you already use to create powerful automated workflows.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { 
                  name: 'Stripe',
                  category: 'Payments',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path fill="currentColor" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Slack',
                  category: 'Communication',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path fill="currentColor" d="M6 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                      <path fill="currentColor" d="M14 7h-4v10h4V7z"/>
                      <path fill="currentColor" d="M17 10H7v4h10v-4z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Google Calendar',
                  category: 'Scheduling',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path fill="currentColor" d="M19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                      <rect x="7" y="12" width="10" height="2" fill="currentColor"/>
                      <rect x="7" y="16" width="7" height="2" fill="currentColor"/>
                    </svg>
                  )
                }
              ].map((integration, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0.5 bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-[#0A0A0A] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border border-white/5 group-hover:border-primary/20 transition-colors h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-primary/10 to-transparent flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-gray-400 group-hover:text-primary transition-colors">
                        {integration.icon}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-white group-hover:text-primary transition-colors">{integration.name}</div>
                      <div className="text-sm text-gray-500">{integration.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/integrations" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group">
                <span>View all integrations</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-30" />
            <div className="absolute w-full h-full bg-[linear-gradient(45deg,transparent_9px,rgba(255,255,255,0.05)_1px)] bg-[length:10px_10px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-[0.02em] leading-[1.1]">
              Ready for a smarter way to&nbsp;work?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light tracking-wide leading-relaxed">
              Join the businesses who&apos;ve already transformed their workflow with Profithub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 text-white px-8 py-4 text-lg rounded-full" asChild>
                <Link href="/book-demo">
                  <span className="relative z-10">Book a Demo →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
              <Button className="bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-lg rounded-full border border-white/10 hover:border-white/20 transition-colors" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}