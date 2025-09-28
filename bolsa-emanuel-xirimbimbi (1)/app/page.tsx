import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  ArrowRight,
  BookOpen,
  Target,
  Heart,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl text-balance">
              Transforme seu Futuro com a <span className="text-blue-600">Bolsa Emanuel Xirimbimbi</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 text-pretty">
              <strong className="text-blue-600">"Educação é o combustível do sucesso"</strong> — Uma oportunidade única
              para jovens angolanos alcançarem seus sonhos académicos.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Link href="/inscricao">
                  Candidate-se Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                <Link href="/sobre">Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-600">Bolsas 100% Pagas</CardTitle>
                <CardDescription className="text-lg">
                  Cobertura total das propinas após aprovação, com comparticipação até 85% para bolsas internacionais
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">Oportunidades Infinitas</CardTitle>
                <CardDescription className="text-lg">
                  Acesso a universidades nacionais e internacionais de excelência em Angola, Espanha, Brasil e Portugal
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Emanuel Xirimbimbi */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre o Patrocinador</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">Emanuel Xirimbimbi</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                    PhD, Hipnoterapeuta, Arquiteto, Mentor, Urbanista e Estrategista
                  </p>
                  <p className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                    Doutorado em Design Urbano — Beijing Forestry University (China)
                  </p>
                  <p className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-blue-600" />
                    Membro da Ordem dos Arquitetos de Angola (AO-0601)
                  </p>
                  <p className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-blue-600" />
                    Defensor da educação como ferramenta de transformação social
                  </p>
                </div>
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-lg text-gray-700 mt-6">
                  "Educação é o combustível do sucesso. Investir na educação dos jovens é investir no futuro de Angola."
                </blockquote>
                <div className="flex gap-4 mt-6">
                  <Button asChild variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <img
                  src="/emanuel-xirimbimbi-sponsor.jpg"
                  alt="Emanuel Xirimbimbi"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que Escolher a Bolsa Emanuel Xirimbimbi?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Uma iniciativa filantrópica que visa apoiar jovens angolanos talentosos em sua jornada educacional,
              oferecendo oportunidades de ensino superior de qualidade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Foco na Excelência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Selecionamos jovens talentosos com potencial para fazer a diferença em suas comunidades e no país.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Apoio Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Oferecemos mentoria, apoio acadêmico personalizado e uma rede de ex-bolsistas para seu sucesso.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Oportunidades Globais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acesso a universidades nacionais e internacionais de renome, expandindo seus horizontes educacionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para Transformar seu Futuro?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Junte-se a centenas de jovens angolanos que já estão construindo um futuro melhor através da educação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/inscricao">
                Inscreva-se Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/oportunidades">Ver Oportunidades</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
