'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const PlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

const ZapierIcon = () => (
  <Image src="/integrations/zapier.svg" alt="Zapier" width={24} height={24} />
);

const SlackIcon = () => (
  <Image src="/integrations/slack.svg" alt="Slack" width={24} height={24} />
);

const GoogleIcon = () => (
  <Image src="/integrations/google.svg" alt="Google" width={24} height={24} />
);

const NotionIcon = () => (
  <Image src="/integrations/notion.svg" alt="Notion" width={24} height={24} />
);

const HubSpotIcon = () => (
  <Image src="/integrations/hubspot.svg" alt="HubSpot" width={24} height={24} />
);

const SalesforceIcon = () => (
  <Image src="/integrations/salesforce.svg" alt="Salesforce" width={24} height={24} />
);

const StripeIcon = () => (
  <Image src="/integrations/stripe.svg" alt="Stripe" width={24} height={24} />
);

const ZoomIcon = () => (
  <Image src="/integrations/zoom.svg" alt="Zoom" width={24} height={24} />
);

const SquareIcon = () => (
  <Image src="/integrations/square.svg" alt="Square" width={24} height={24} />
);

const QuickBooksIcon = () => (
  <Image src="/integrations/quickbooks.svg" alt="QuickBooks" width={24} height={24} />
);

const PayKickstartIcon = () => (
  <Image src="/integrations/paykickstart.svg" alt="PayKickstart" width={24} height={24} />
);

const ChargeOverIcon = () => (
  <Image src="/integrations/chargeover.svg" alt="ChargeOver" width={24} height={24} />
);

const TwilioIcon = () => (
  <Image src="/integrations/twilio.svg" alt="Twilio" width={24} height={24} />
);

const MailgunIcon = () => (
  <Image src="/integrations/mailgun.svg" alt="Mailgun" width={24} height={24} />
);

const SendGridIcon = () => (
  <Image src="/integrations/sendgrid.svg" alt="SendGrid" width={24} height={24} />
);

const MessageBirdIcon = () => (
  <Image src="/integrations/messagebird.svg" alt="MessageBird" width={24} height={24} />
);

const JivoChatIcon = () => (
  <Image src="/integrations/jivochat.svg" alt="JivoChat" width={24} height={24} />
);

const CrispIcon = () => (
  <Image src="/integrations/crisp.svg" alt="Crisp" width={24} height={24} />
);

const MailchimpIcon = () => (
  <Image src="/integrations/mailchimp.svg" alt="Mailchimp" width={24} height={24} />
);

const ActiveCampaignIcon = () => (
  <Image src="/integrations/activecampaign.svg" alt="ActiveCampaign" width={24} height={24} />
);

const ConvertKitIcon = () => (
  <Image src="/integrations/convertkit.svg" alt="ConvertKit" width={24} height={24} />
);

const MailerLiteIcon = () => (
  <Image src="/integrations/mailerlite.svg" alt="MailerLite" width={24} height={24} />
);

const KlaviyoIcon = () => (
  <Image src="/integrations/klaviyo.svg" alt="Klaviyo" width={24} height={24} />
);

const FacebookIcon = () => (
  <Image src="/integrations/facebook.svg" alt="Facebook" width={24} height={24} />
);

const InstagramIcon = () => (
  <Image src="/integrations/instagram.svg" alt="Instagram" width={24} height={24} />
);

const LinkedInIcon = () => (
  <Image src="/integrations/linkedin.svg" alt="LinkedIn" width={24} height={24} />
);

const TikTokIcon = () => (
  <Image src="/integrations/tiktok.svg" alt="TikTok" width={24} height={24} />
);

const categories = [
  {
    name: 'Payment & Accounting',
    integrations: [
      { name: 'Square', icon: <SquareIcon /> },
      { name: 'QuickBooks', icon: <QuickBooksIcon /> },
      { name: 'PayKickstart', icon: <PayKickstartIcon /> },
      { name: 'ChargeOver', icon: <ChargeOverIcon /> },
    ]
  },
  {
    name: 'Communication & Messaging',
    integrations: [
      { name: 'Twilio', icon: <TwilioIcon /> },
      { name: 'Mailgun', icon: <MailgunIcon /> },
      { name: 'SendGrid', icon: <SendGridIcon /> },
      { name: 'MessageBird', icon: <MessageBirdIcon /> },
      { name: 'JivoChat', icon: <JivoChatIcon /> },
      { name: 'Crisp', icon: <CrispIcon /> },
    ]
  },
  {
    name: 'Marketing & CRM',
    integrations: [
      { name: 'Mailchimp', icon: <MailchimpIcon /> },
      { name: 'ActiveCampaign', icon: <ActiveCampaignIcon /> },
      { name: 'HubSpot', icon: <HubSpotIcon /> },
      { name: 'Salesforce', icon: <SalesforceIcon /> },
      { name: 'ConvertKit', icon: <ConvertKitIcon /> },
      { name: 'MailerLite', icon: <MailerLiteIcon /> },
      { name: 'Klaviyo', icon: <KlaviyoIcon /> },
      { name: 'Customer.io', icon: <PlaceholderIcon /> },
      { name: 'SendPulse', icon: <PlaceholderIcon /> },
      { name: 'iContact', icon: <PlaceholderIcon /> },
      { name: 'Ontraport', icon: <PlaceholderIcon /> },
      { name: 'Pipedrive', icon: <PlaceholderIcon /> },
    ]
  },
  {
    name: 'Social Media & Advertising',
    integrations: [
      { name: 'Facebook', icon: <FacebookIcon /> },
      { name: 'Instagram', icon: <InstagramIcon /> },
      { name: 'LinkedIn', icon: <LinkedInIcon /> },
      { name: 'TikTok', icon: <TikTokIcon /> },
      { name: 'Google Ads', icon: <GoogleIcon /> },
    ]
  },
  {
    name: 'Scheduling & Calendar',
    integrations: [
      { name: 'Calendly', icon: <PlaceholderIcon /> },
      { name: 'Acuity Scheduling', icon: <PlaceholderIcon /> },
      { name: 'TidyCal', icon: <PlaceholderIcon /> },
      { name: 'SimplyMeet.me', icon: <PlaceholderIcon /> },
      { name: 'OnceHub', icon: <PlaceholderIcon /> },
    ]
  },
  {
    name: 'Video Conferencing',
    integrations: [
      { name: 'Zoom', icon: <ZoomIcon /> },
      { name: 'Dubb', icon: <PlaceholderIcon /> },
      { name: 'WebinarGeek', icon: <PlaceholderIcon /> },
      { name: 'Vooplayer', icon: <PlaceholderIcon /> },
    ]
  },
  {
    name: 'Website & E-commerce',
    integrations: [
      { name: 'WordPress', icon: <PlaceholderIcon /> },
      { name: 'Shopify', icon: <PlaceholderIcon /> },
      { name: 'ClickFunnels', icon: <PlaceholderIcon /> },
      { name: 'Wix', icon: <PlaceholderIcon /> },
      { name: 'Landingi', icon: <PlaceholderIcon /> },
      { name: 'WaiverForever', icon: <PlaceholderIcon /> },
      { name: 'Printful', icon: <SquareIcon /> },
    ]
  },
  {
    name: 'Automation & Integration',
    integrations: [
      { name: 'Zapier', icon: <ZapierIcon /> },
      { name: 'Make', icon: <PlaceholderIcon /> },
      { name: 'Integrately', icon: <PlaceholderIcon /> },
      { name: 'AutomatorWP', icon: <PlaceholderIcon /> },
    ]
  },
  {
    name: 'Project Management',
    integrations: [
      { name: 'Trello', icon: <PlaceholderIcon /> },
      { name: 'Teamwork', icon: <PlaceholderIcon /> },
      { name: 'Runrun.it', icon: <PlaceholderIcon /> },
      { name: 'Flowlu', icon: <PlaceholderIcon /> },
    ]
  },
  {
    name: 'File Storage & Documents',
    integrations: [
      { name: 'Google Drive', icon: <PlaceholderIcon /> },
      { name: 'Citrix ShareFile', icon: <PlaceholderIcon /> },
      { name: 'eSignatures.io', icon: <PlaceholderIcon /> },
      { name: 'PDF.co', icon: <PlaceholderIcon /> },
    ]
  },
]

export default function IntegrationsPage() {
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm mb-6 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Powerful Integrations</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Connect Your Entire Tech Stack</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              ProfitHub seamlessly integrates with all your favorite tools, creating a unified workflow that just works.
            </p>
          </div>

          <div className="space-y-24">
            {categories.map((category, i) => (
              <div key={i} className="relative">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                  <div className="h-px bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.integrations.map((integration, j) => (
                    <div key={j} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                      <div className="relative p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center text-gray-900 group-hover:text-primary transition-colors">
                            {integration.icon}
                          </div>
                          <span className="text-sm font-medium text-center">{integration.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center pb-32">
            <p className="text-xl text-gray-400 mb-8">Don't see what you need?</p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full" asChild>
              <Link href="/book-demo">Request an Integration →</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 