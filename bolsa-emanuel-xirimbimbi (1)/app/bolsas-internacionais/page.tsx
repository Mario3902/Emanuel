"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Plane, CheckCircle, Globe, Users, Award, BookOpen, ArrowRight, MapPin, Info } from "lucide-react"
import { useEffect, useRef } from "react"

export default function BolsasInternacionaisPage() {
  const mapRef = useRef<HTMLDivElement>(null)

  const countries = [
    {
      name: "Espanha",
      flag: "🇪🇸",
      universities: ["Universidad Complutense de Madrid", "Universidad de Barcelona", "Universidad de Sevilla"],
      programs: ["Engenharia", "Medicina", "Arquitetura", "Economia"],
      benefits: "Acesso ao sistema educacional europeu de alta qualidade",
    },
    {
      name: "Brasil",
      flag: "🇧🇷",
      universities: ["Universidade de São Paulo", "Universidade Federal do Rio de Janeiro", "PUC-Rio"],
      programs: ["Direito", "Administração", "Psicologia", "Comunicação"],
      benefits: "Proximidade cultural e linguística com Angola",
    },
    {
      name: "Portugal",
      flag: "🇵🇹",
      universities: ["Universidade de Lisboa", "Universidade do Porto", "Universidade de Coimbra"],
      programs: ["História", "Literatura", "Ciências Sociais", "Gestão"],
      benefits: "Facilidade de reconhecimento de diplomas e integração",
    },
  ]

  useEffect(() => {
    // Simple interactive map placeholder
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="relative w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
          <div class="text-center">
            <div class="text-4xl mb-2">🌍</div>
            <p class="text-gray-600 font-medium">Mapa Interativo</p>
            <p class="text-sm text-gray-500">Espanha • Brasil • Portugal</p>
          </div>
        </div>
      `
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Plane className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              <span className="text-green-600">Bolsas Internacionais</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-pretty">
              Oportunidades em países como Espanha, Brasil e Portugal, com suporte acadêmico completo e comparticipação
              de até 85% nos custos.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Destinos Disponíveis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Explore os países onde você pode estudar com nossa bolsa internacional.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div ref={mapRef} className="mb-8"></div>
          </div>
        </div>
      </section>

      {/* Countries Details */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-green-100">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <CardTitle className="text-2xl text-green-600">{country.name}</CardTitle>
                  <CardDescription>{country.benefits}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Universidades Parceiras:</h4>
                    <ul className="space-y-1">
                      {country.universities.map((uni, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <Award className="h-4 w-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                          {uni}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cursos Populares:</h4>
                    <div className="flex flex-wrap gap-1">
                      {country.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefícios das Bolsas Internacionais</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Oferecemos suporte abrangente para sua experiência educacional internacional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Instituições Renomadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Acesso a universidades internacionais de prestígio mundial.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Comparticipação 85%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Cobertura de até 85% dos custos educacionais.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-purple-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Suporte para Visto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Orientação completa no processo de obtenção de visto.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-yellow-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Rede Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Conexão com ex-bolsistas ao redor do mundo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-yellow-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <div className="flex items-center">
                  <Info className="h-6 w-6 text-yellow-600 mr-3" />
                  <CardTitle className="text-xl text-yellow-800">Informação Importante</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-yellow-800">
                  <p>
                    <strong>Custos Adicionais:</strong> Os custos com passagem aérea e acomodação são responsabilidade
                    do estudante. No entanto, oferecemos orientação e suporte para encontrar as melhores opções.
                  </p>
                  <p>
                    <strong>Suporte Oferecido:</strong> Nossa equipe fornece orientação para encontrar acomodação
                    estudantil, informações sobre custo de vida e dicas para adaptação cultural.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Requisitos Adicionais</h2>
              <p className="text-lg text-gray-600 text-pretty">
                Além dos requisitos básicos, as bolsas internacionais têm critérios específicos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-100">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">Requisitos Específicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Proficiência no idioma do país de destino</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Passaporte válido</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Exames médicos atualizados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Carta de recomendação</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Processo de Seleção</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Análise de documentação</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Entrevista online</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Teste de proficiência linguística</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Avaliação final</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para uma Experiência Internacional?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto text-pretty">
            Candidate-se às bolsas internacionais e expanda seus horizontes acadêmicos em universidades de prestígio
            mundial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/inscricao">
                Candidate-se Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/bolsas-nacionais">Ver Bolsas Nacionais</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
