"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Quote, GraduationCap, ArrowRight, Star } from "lucide-react"

export default function HistoriasSucessoPage() {
  const [currentStory, setCurrentStory] = useState(0)

  const successStories = [
    {
      name: "Ana Silva",
      course: "Bacharel em Curadoria e História das Artes",
      university: "UBA",
      image: "/student-ana-silva.jpg",
      testimonial:
        "A bolsa mudou minha vida! Hoje estudo na UBA e estou construindo meu futuro. Nunca imaginei que teria a oportunidade de estudar em uma universidade tão renomada. O apoio da equipe Emanuel Xirimbimbi foi fundamental para minha jornada acadêmica.",
      year: "2023",
      achievement: "Melhor aluna do semestre",
    },
    {
      name: "João Mendes",
      course: "Direito",
      university: "Universidade Gregório Semedo",
      image: "/placeholder-nvc9i.png",
      testimonial:
        "Com a bolsa, consegui estudar no Gregório Semedo. A oportunidade abriu portas que nunca imaginei! O programa de mentoria me ajudou não apenas academicamente, mas também no desenvolvimento pessoal e profissional.",
      year: "2022",
      achievement: "Presidente do grêmio estudantil",
    },
    {
      name: "Maria Costa",
      course: "Psicologia",
      university: "Universidade Belas",
      image: "/placeholder-34cib.png",
      testimonial:
        "A bolsa me deu a chance de estudar Psicologia em Angola e realizar meu sonho. Hoje posso contribuir para a saúde mental da minha comunidade. O suporte contínuo da bolsa Emanuel Xirimbimbi foi essencial para meu sucesso.",
      year: "2024",
      achievement: "Projeto de extensão comunitária",
    },
  ]

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length)
  }

  const currentStudent = successStories[currentStory]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              <span className="text-green-600">Histórias de Sucesso</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-pretty">
              Conheça os jovens angolanos que transformaram suas vidas através da educação com o apoio da Bolsa Emanuel
              Xirimbimbi.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story Carousel */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-green-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Student Photo */}
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <img
                      src={currentStudent.image || "/placeholder.svg"}
                      alt={`${currentStudent.name} - Bolsista Emanuel Xirimbimbi`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentStudent.year}
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-green-600 mb-4" />
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                      "{currentStudent.testimonial}"
                    </blockquote>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">{currentStudent.name}</h3>
                    <div className="space-y-1">
                      <p className="text-green-600 font-semibold flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        {currentStudent.course}
                      </p>
                      <p className="text-gray-600">{currentStudent.university}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500" />
                        {currentStudent.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStory}
                className="flex items-center space-x-2 border-green-200 hover:border-green-300 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Anterior</span>
              </Button>

              <div className="flex space-x-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentStory ? "bg-green-600" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ver história ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextStory}
                className="flex items-center space-x-2 border-green-200 hover:border-green-300 bg-transparent"
              >
                <span>Próximo</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Stories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Todos os Nossos Bolsistas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Cada história representa uma vida transformada através da educação. Conheça todos os jovens que fazem
              parte da família Emanuel Xirimbimbi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((student, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all cursor-pointer ${
                  index === currentStory ? "border-2 border-green-200 shadow-lg" : "border border-gray-200"
                }`}
                onClick={() => setCurrentStory(index)}
              >
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                  <img
                    src={student.image || "/placeholder.svg"}
                    alt={`${student.name} - Bolsista Emanuel Xirimbimbi`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {student.year}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{student.name}</CardTitle>
                  <CardDescription className="text-sm">
                    <span className="text-green-600 font-medium">{student.course}</span>
                    <br />
                    {student.university}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 line-clamp-3">"{student.testimonial}"</p>
                  <div className="mt-3 flex items-center text-xs text-gray-500">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    {student.achievement}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nosso Impacto</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Números que refletem o compromisso da Bolsa Emanuel Xirimbimbi com a transformação educacional em Angola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <p className="text-gray-600 font-medium">Bolsistas Ativos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-green-100">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <p className="text-gray-600 font-medium">Taxa de Sucesso</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-purple-100">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
                <p className="text-gray-600 font-medium">Cursos Diferentes</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-yellow-100">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-yellow-600 mb-2">8</div>
                <p className="text-gray-600 font-medium">Universidades Parceiras</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Seja a Próxima História de Sucesso</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto text-pretty">
            Junte-se aos jovens angolanos que já estão transformando suas vidas através da educação. Sua história pode
            ser a próxima!
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
              <Link href="/sobre">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
