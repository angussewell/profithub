'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

const industries = [
  "Real Estate",
  "Medical Practice",
  "Coaching & Consulting",
  "SaaS",
  "E-commerce",
  "Professional Services",
  "Financial Services",
  "Insurance",
  "Legal",
  "Manufacturing",
  "Construction",
  "Education",
  "Healthcare",
  "Hospitality",
  "Other"
]

export default function IndustryFitPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    industry: '',
    otherIndustry: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    websiteUrl: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/hICrBcnDkMgl4yCxHhMT/webhook-trigger/7f3700f8-3f3e-4d3f-808e-72a7f753301c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          industry: formData.industry === 'Other' ? formData.otherIndustry : formData.industry,
        }),
      })

      if (response.ok) {
        router.push('/book-demo')
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

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
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Check Your Industry Fit</h1>
            <p className="text-xl text-gray-400">Tell us about your business and we'll show you how ProfitHub can help.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-white">Industry</span>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                >
                  <option value="">Select your industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </label>

              {formData.industry === 'Other' && (
                <label className="block">
                  <span className="text-white">Please specify your industry</span>
                  <input
                    type="text"
                    name="otherIndustry"
                    value={formData.otherIndustry}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                    placeholder="Enter your industry"
                  />
                </label>
              )}

              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-white">First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                    placeholder="John"
                  />
                </label>

                <label className="block">
                  <span className="text-white">Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                    placeholder="Doe"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-white">Business Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                  placeholder="john@company.com"
                />
              </label>

              <label className="block">
                <span className="text-white">Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                  placeholder="(555) 123-4567"
                />
              </label>

              <label className="block">
                <span className="text-white">Business Name</span>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                  placeholder="Company Inc."
                />
              </label>

              <label className="block">
                <span className="text-white">Website URL</span>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary focus:ring-primary"
                  placeholder="https://www.company.com"
                />
              </label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg font-medium transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Check Industry Fit →'}
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
} 