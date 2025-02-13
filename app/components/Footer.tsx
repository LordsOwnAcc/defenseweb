import Link from "next/link"
import { X, Instagram, Linkedin } from "lucide-react"
import React from "react"

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">DefensIQTech</h3>
            <p className="text-sm text-muted-foreground">
              Revolutionizing personal safety with cutting-edge wearable technology.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-sm text-muted-foreground hover:text-primary">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#tech-specs" className="text-sm text-muted-foreground hover:text-primary">
                  Tech Specs
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Developer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
            <p className="text-sm text-muted-foreground">Email: info@defensiqtech.com</p>
            <p className="text-sm text-muted-foreground">Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <X className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DefensIQTech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

