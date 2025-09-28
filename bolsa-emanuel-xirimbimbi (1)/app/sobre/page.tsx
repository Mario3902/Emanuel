import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { GraduationCap, BookOpen, Award, Heart, Users, Target, Globe, ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Sobre - Bolsa de Estudos Emanuel Xirimbimbi",
  description:
    "Conheça a iniciativa filantrópica que visa apoiar jovens angolanos talentosos em sua jornada educacional, oferecendo oportunidades de ensino superior de qualidade.",
}

export default function SobrePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              Sobre a <span className="text-blue-600">Bolsa Emanuel Xirimbimbi</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-pretty">
              Uma iniciativa filantrópica que visa apoiar jovens angolanos talentosos em sua jornada educacional,
              oferecendo oportunidades de ensino superior de qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-100">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-600 mb-4">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Bolsa Emanuel Xirimbimbi é uma iniciativa filantrópica que visa apoiar jovens angolanos talentosos
                  em sua jornada educacional, oferecendo oportunidades de ensino superior de qualidade. A bolsa cobre{" "}
                  <strong className="text-blue-600">100% das propinas após aprovação</strong>, com uma taxa de inscrição
                  acessível, democratizando o acesso à educação superior de excelência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Apply */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que se Candidatar?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Oferecemos muito mais que uma bolsa de estudos - proporcionamos uma transformação completa em sua jornada
              educacional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Cobertura Total de Propinas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  100% das propinas cobertas após aprovação, eliminando barreiras financeiras para sua educação.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Programa de Mentoria Exclusivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acompanhamento personalizado com mentores experientes para garantir seu sucesso acadêmico.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Oportunidades Nacionais e Internacionais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acesso a universidades de excelência em Angola e no exterior (Espanha, Brasil, Portugal).
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Apoio Acadêmico Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suporte contínuo durante todo o curso para garantir excelência acadêmica e desenvolvimento pessoal.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Rede de Ex-Bolsistas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conexão com uma comunidade global de ex-bolsistas para networking e oportunidades futuras.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Desenvolvimento Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Foco não apenas no sucesso acadêmico, mas também no desenvolvimento de liderança e cidadania.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Emanuel Xirimbimbi - Detailed */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emanuel Xirimbimbi</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Perfil Profissional</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <GraduationCap className="h-5 w-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>PhD, Hipnoterapeuta, Arquiteto, Mentor, Urbanista e Estrategista</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Doutorado em Design Urbano — Beijing Forestry University (China)</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Membro da Ordem dos Arquitetos de Angola (AO-0601)</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="h-5 w-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Defensor da educação como ferramenta de transformação social</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Visão e Compromisso</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Com uma carreira internacional e vasta experiência em educação e desenvolvimento urbano, Emanuel
                    Xirimbimbi acredita firmemente no poder transformador da educação. Sua iniciativa filantrópica
                    reflete seu compromisso com o desenvolvimento de Angola através da formação de jovens líderes.
                  </p>
                </div>
                <blockquote className="border-l-4 border-blue-600 pl-6 italic text-lg text-gray-700">
                  "Educação é o combustível do sucesso. Investir na educação dos jovens é investir no futuro de Angola."
                  <footer className="text-sm text-gray-500 mt-2">— Emanuel Xirimbimbi</footer>
                </blockquote>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <img
                  src="/professional-portrait-of-emanuel-xirimbimbi.jpg"
                  alt="Emanuel Xirimbimbi - Fundador da Bolsa de Estudos"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para Começar sua Jornada?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Descubra as oportunidades disponíveis e dê o primeiro passo rumo ao seu futuro acadêmico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/oportunidades">
                Ver Oportunidades
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/inscricao">Inscreva-se Agora</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
