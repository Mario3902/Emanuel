import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Globe, Users, Award, CheckCircle, ArrowRight, Plane, Home } from "lucide-react"

export const metadata = {
  title: "Oportunidades - Bolsa de Estudos Emanuel Xirimbimbi",
  description:
    "Descubra as oportunidades de bolsas nacionais e internacionais disponíveis para jovens angolanos talentosos.",
}

export default function OportunidadesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              Oportunidades de <span className="text-blue-600">Bolsas de Estudo</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-pretty">
              Explore as diversas oportunidades educacionais disponíveis, desde universidades nacionais de excelência
              até instituições internacionais renomadas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Opportunities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* National Scholarships */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all hover:shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-600">Bolsas Nacionais</CardTitle>
                <CardDescription className="text-lg">
                  Acesso a universidades de ponta em Angola com cobertura total de propinas após aprovação.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Benefícios Inclusos:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Cobertura total de propinas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Universidades angolanas de excelência</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Apoio acadêmico personalizado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Programa de mentoria exclusivo</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/bolsas-nacionais">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* International Scholarships */}
            <Card className="border-2 border-green-100 hover:border-green-200 transition-all hover:shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Plane className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">Bolsas Internacionais</CardTitle>
                <CardDescription className="text-lg">
                  Oportunidades em países como Espanha, Brasil e Portugal, com suporte acadêmico completo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Benefícios Inclusos:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Instituições internacionais renomadas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Comparticipação de até 85% nos custos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Suporte para processo de visto</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Rede global de ex-bolsistas</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Nota:</strong> Custos com passagem aérea e acomodação são responsabilidade do estudante, mas
                    oferecemos orientação e suporte.
                  </p>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/bolsas-internacionais">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countries and Universities */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Destinos Disponíveis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Oferecemos oportunidades em universidades de excelência tanto em Angola quanto no exterior.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Angola</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Universidades nacionais de excelência com programas reconhecidos internacionalmente.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Espanha</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Instituições europeias de prestígio com programas em diversas áreas do conhecimento.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Brasil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Universidades brasileiras reconhecidas mundialmente com forte tradição acadêmica.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Portugal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Instituições portuguesas com excelência acadêmica e proximidade cultural.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Escolha sua Oportunidade</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Seja nacional ou internacional, temos a oportunidade perfeita para impulsionar sua carreira acadêmica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/inscricao">
                Candidate-se Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/faq">Ver FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
