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

      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full blur-3xl -top-1/2 -right-1/4 opacity-20 animate-pulse" />
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-l from-primary/30 to-blue-500/30 rounded-full blur-3xl -bottom-1/2 -left-1/4 opacity-20 animate-pulse delay-1000" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-black mb-6">Simple, transparent pricing</h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Choose the plan that&apos;s right for your business</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">Basic</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold">$297</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 mb-8">Complete CRM solution with essential AI features.</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fully Custom CRM</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Email & SMS Templates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Native Integrations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>A.I. Appointment Chat Bot</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Automations and Workflows</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>24/7 Chat and Video Support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-primary/20 transition-colors rounded-full py-6" asChild>
                    <Link href="/book-demo">Choose Basic</Link>
                  </Button>
                  <p className="text-sm text-gray-400 text-center mt-4">Month-to-month: cancel anytime</p>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-blue-500/30 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="relative p-8 rounded-2xl border border-primary/20 bg-black/40 backdrop-blur-sm">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pro</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold">$497</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 mb-8">Advanced features for growing teams ready to scale.</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Everything in Basic Plan</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Conversation A.I. for calls</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>One-click order processing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full ROI & ROAS tracking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>250 Lead Scraping Credits</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom Menus</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mobile Team Tracking</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6" asChild>
                    <Link href="/book-demo">Choose Pro</Link>
                  </Button>
                  <p className="text-sm text-gray-400 text-center mt-4">Month-to-month: cancel anytime</p>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold">Contact Sales</span>
                  </div>
                  <p className="text-gray-400 mb-8">Complete custom build for large organizations.</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Everything in Basic & Pro</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Complete Custom Build</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Contact for pricing</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-primary/20 transition-colors rounded-full py-6" asChild>
                    <Link href="/book-demo">Contact Us</Link>
                  </Button>
                  <p className="text-sm text-gray-400 text-center mt-4">Month-to-month: cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 