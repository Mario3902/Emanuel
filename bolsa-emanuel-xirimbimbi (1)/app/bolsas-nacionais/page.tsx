import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Home, CheckCircle, Users, Award, BookOpen, Target, ArrowRight, GraduationCap } from "lucide-react"

export const metadata = {
  title: "Bolsas Nacionais - Bolsa de Estudos Emanuel Xirimbimbi",
  description:
    "Descubra as oportunidades de bolsas nacionais em universidades angolanas de excelência com cobertura total de propinas.",
}

export default function BolsasNacionaisPage() {
  const universities = [
    {
      name: "Universidade Agostinho Neto",
      location: "Luanda",
      programs: ["Medicina", "Engenharia", "Direito", "Economia"],
      image: "/university-agostinho-neto.jpg",
    },
    {
      name: "Universidade Católica de Angola",
      location: "Luanda",
      programs: ["Gestão", "Psicologia", "Comunicação Social", "Arquitetura"],
      image: "/university-catolica-angola.jpg",
    },
    {
      name: "Universidade Gregório Semedo",
      location: "Luanda",
      programs: ["Direito", "Gestão", "Informática", "Contabilidade"],
      image: "/university-gregorio-semedo.jpg",
    },
    {
      name: "Universidade Belas",
      location: "Luanda",
      programs: ["Psicologia", "Enfermagem", "Fisioterapia", "Nutrição"],
      image: "/university-belas.jpg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Home className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              <span className="text-blue-600">Bolsas Nacionais</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-pretty">
              Acesso a universidades de ponta em Angola com cobertura total de propinas após aprovação. Construa seu
              futuro sem sair do seu país.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefícios das Bolsas Nacionais</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Oferecemos suporte completo para garantir seu sucesso acadêmico em universidades angolanas de excelência.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Cobertura Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">100% das propinas cobertas após aprovação no processo seletivo.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Universidades de Excelência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Acesso às melhores instituições de ensino superior de Angola.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-purple-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Apoio Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Acompanhamento acadêmico e mentoria durante todo o curso.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-yellow-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Programa de Mentoria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Orientação exclusiva com profissionais experientes da área.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Universidades Parceiras</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Conheça algumas das principais universidades angolanas onde você pode estudar com nossa bolsa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {universities.map((university, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                  <img
                    src={university.image || "/placeholder.svg"}
                    alt={`Campus da ${university.name}`}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{university.name}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    {university.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cursos Disponíveis:</h4>
                    <div className="flex flex-wrap gap-2">
                      {university.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
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

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Requisitos para Candidatura</h2>
              <p className="text-lg text-gray-600 text-pretty">
                Verifique se você atende aos critérios para se candidatar às bolsas nacionais.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Requisitos Básicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Ser cidadão angolano</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Ter entre 16 e 35 anos de idade</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Ter concluído o ensino médio</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Apresentar documentação completa</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-green-100">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">Documentos Necessários</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Bilhete de Identidade (cópia)</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Certificado do ensino médio</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Histórico escolar</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Carta de motivação</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para Estudar em Angola?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Candidate-se agora às bolsas nacionais e construa seu futuro acadêmico em universidades angolanas de
            excelência.
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
              <Link href="/bolsas-internacionais">Ver Bolsas Internacionais</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
