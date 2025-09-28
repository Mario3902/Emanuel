import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Oportunidades", href: "/oportunidades" },
    { name: "Inscrição", href: "/inscricao" },
    { name: "FAQ", href: "/faq" },
    { name: "Contato", href: "/contato" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "WhatsApp", href: "https://wa.me/244923440172", icon: "💬" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Bolsa Emanuel Xirimbimbi</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Uma iniciativa filantrópica comprometida em oferecer oportunidades educacionais de qualidade para jovens
              angolanos.
            </p>
            <div className="text-2xl">🎓</div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Luanda, Angola</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@bolsaemanuelxirimbimbi.org" className="hover:text-primary">
                  contato@bolsaemanuelxirimbimbi.org
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+244923440172" className="hover:text-primary">
                  +244 923 440 172
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Bolsa de Estudos Emanuel Xirimbimbi. Todos os direitos reservados.
              </p>
              <p className="text-sm text-muted-foreground">
                Desenvolvido por{" "}
                <a
                  href="https://www.instagram.com/mario_fernandes07?utm_source=ig_web_button_share_sheet&igsh=MW9pZDVidHh5bXozNA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Mário Fernandes
                </a>
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <span className="text-xl">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
