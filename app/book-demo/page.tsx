/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function BookDemoPage() {
  useEffect(() => {
    // Load the msgsndr script
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

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
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full">
              Book a Demo
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-32">
        {/* Booking Header */}
        <section className="relative py-12">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full blur-3xl -top-1/2 -right-1/4 opacity-20 animate-pulse" />
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-l from-primary/30 to-blue-500/30 rounded-full blur-3xl -bottom-1/2 -left-1/4 opacity-20 animate-pulse delay-1000" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm mb-6 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Schedule Your Demo</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-[0.02em] leading-[1.1]">
              See ProfitHub in Action
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Book a personalized demo to see how ProfitHub can transform your sales process and boost your team&apos;s productivity.
            </p>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="relative pb-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/K7LUzF6KJMtBgPQm0Vwi" 
                style={{ width: '100%', border: 'none', minHeight: '700px' }}
                scrolling="no" 
                id="msgsndr-calendar"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 