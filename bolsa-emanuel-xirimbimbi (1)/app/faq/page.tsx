"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight, Mail } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqSections = [
    {
      title: "Processo de Inscrição",
      icon: "📝",
      questions: [
        {
          question: "Quais são os requisitos básicos para se candidatar?",
          answer:
            "Para se candidatar à Bolsa Emanuel Xirimbimbi, você deve: ser cidadão angolano, ter entre 16 e 35 anos de idade, ter concluído o ensino médio e apresentar documentação completa (BI, certificados, histórico escolar).",
        },
        {
          question: "Qual é o valor da taxa de inscrição?",
          answer:
            "A taxa de inscrição varia conforme o curso escolhido e cobre os custos de processamento da candidatura. O valor específico será informado durante o processo de inscrição. É importante notar que a taxa não garante a aprovação da bolsa.",
        },
        {
          question: "Quanto tempo demora o processo seletivo?",
          answer:
            "O processo seletivo tem duração de 4 a 6 semanas. Durante este período, nossa equipe analisa cuidadosamente todas as candidaturas. Os candidatos são notificados por e-mail sobre o resultado da seleção.",
        },
        {
          question: "Posso me candidatar a mais de um curso?",
          answer:
            "Sim, você pode se candidatar a mais de um curso, mas cada candidatura requer uma taxa de inscrição separada. Recomendamos focar nos cursos que mais se alinham com seus objetivos profissionais.",
        },
      ],
    },
    {
      title: "Tipos de Bolsas",
      icon: "🎓",
      questions: [
        {
          question: "Qual é a diferença entre bolsas nacionais e internacionais?",
          answer:
            "Bolsas nacionais oferecem 100% de cobertura das propinas em universidades angolanas de excelência. Bolsas internacionais oferecem comparticipação de até 85% dos custos em universidades de Espanha, Brasil e Portugal, mas custos com passagem aérea e acomodação são responsabilidade do estudante.",
        },
        {
          question: "Que custos são cobertos pela bolsa?",
          answer:
            "Para bolsas nacionais: 100% das propinas universitárias. Para bolsas internacionais: até 85% dos custos educacionais (propinas, taxas acadêmicas). Custos com passagem aérea, acomodação e despesas pessoais não estão inclusos nas bolsas internacionais.",
        },
        {
          question: "Posso mudar de bolsa nacional para internacional?",
          answer:
            "Mudanças de tipo de bolsa podem ser consideradas em casos excepcionais, mas devem ser solicitadas formalmente e estão sujeitas à disponibilidade e aprovação da comissão avaliadora.",
        },
      ],
    },
    {
      title: "Após a Seleção",
      icon: "✅",
      questions: [
        {
          question: "Quais são as obrigações dos bolsistas?",
          answer:
            "Os bolsistas devem: manter média mínima de 14 valores, participar do programa de mentoria, apresentar relatórios acadêmicos semestrais, contribuir para atividades comunitárias e representar positivamente a bolsa Emanuel Xirimbimbi.",
        },
        {
          question: "Como funciona a renovação anual da bolsa?",
          answer:
            "A renovação é automática mediante cumprimento dos requisitos: manutenção da média mínima, participação nas atividades obrigatórias e apresentação dos relatórios. A bolsa é renovada anualmente até a conclusão do curso.",
        },
        {
          question: "O que acontece se eu não conseguir manter a média mínima?",
          answer:
            "Casos de média abaixo de 14 valores são analisados individualmente. Oferecemos apoio acadêmico adicional e um período de recuperação. A bolsa pode ser suspensa temporariamente em casos persistentes, mas sempre buscamos soluções para o sucesso do estudante.",
        },
        {
          question: "Posso trabalhar enquanto estudo com a bolsa?",
          answer:
            "Sim, desde que não comprometa o desempenho acadêmico. Para bolsas internacionais, é necessário verificar as regulamentações de visto de estudante do país de destino.",
        },
      ],
    },
    {
      title: "Suporte e Mentoria",
      icon: "🤝",
      questions: [
        {
          question: "Como funciona o programa de mentoria?",
          answer:
            "Cada bolsista é acompanhado por um mentor experiente da área de estudo. As sessões de mentoria ocorrem mensalmente e incluem orientação acadêmica, desenvolvimento pessoal e planejamento de carreira.",
        },
        {
          question: "Que tipo de apoio acadêmico é oferecido?",
          answer:
            "Oferecemos tutoria personalizada, workshops de técnicas de estudo, acesso a recursos educacionais online, apoio psicológico quando necessário e orientação para estágios e oportunidades profissionais.",
        },
        {
          question: "Como posso entrar em contato com meu mentor?",
          answer:
            "O contato com mentores é facilitado através da nossa plataforma online e encontros presenciais ou virtuais agendados. Também oferecemos canais de comunicação direta para situações urgentes.",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <HelpCircle className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              Perguntas <span className="text-blue-600">Frequentes</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-pretty">
              Encontre respostas para as dúvidas mais comuns sobre a Bolsa de Estudos Emanuel Xirimbimbi. Se não
              encontrar o que procura, entre em contato conosco.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="border-2 border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center">
                    <span className="text-3xl mr-3">{section.icon}</span>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.questions.map((faq, questionIndex) => {
                      const itemIndex = sectionIndex * 100 + questionIndex
                      const isOpen = openItems.includes(itemIndex)

                      return (
                        <Collapsible key={questionIndex} open={isOpen} onOpenChange={() => toggleItem(itemIndex)}>
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="w-full justify-between text-left p-4 h-auto border border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                            >
                              <span className="font-medium text-gray-900 text-base">{faq.question}</span>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              )}
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="px-4 pb-4">
                            <div className="pt-2 text-gray-600 leading-relaxed">{faq.answer}</div>
                          </CollapsibleContent>
                        </Collapsible>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Links Úteis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Acesse rapidamente as informações mais importantes sobre nossas bolsas de estudo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">📋</span>
                </div>
                <CardTitle className="text-lg">Como se Candidatar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Guia completo do processo de candidatura</p>
                <Button asChild variant="outline" size="sm" className="border-blue-200 bg-transparent">
                  <Link href="/inscricao">Ver Formulário</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-100">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🌍</span>
                </div>
                <CardTitle className="text-lg">Oportunidades</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Bolsas nacionais e internacionais disponíveis</p>
                <Button asChild variant="outline" size="sm" className="border-green-200 bg-transparent">
                  <Link href="/oportunidades">Explorar</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-purple-100">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">⭐</span>
                </div>
                <CardTitle className="text-lg">Histórias de Sucesso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Conheça nossos bolsistas de sucesso</p>
                <Button asChild variant="outline" size="sm" className="border-purple-200 bg-transparent">
                  <Link href="/historias-sucesso">Ver Histórias</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-yellow-100">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">ℹ️</span>
                </div>
                <CardTitle className="text-lg">Sobre a Bolsa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Conheça nossa missão e valores</p>
                <Button asChild variant="outline" size="sm" className="border-yellow-200 bg-transparent">
                  <Link href="/sobre">Saiba Mais</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Não Encontrou sua Resposta?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Nossa equipe está sempre disponível para esclarecer suas dúvidas e apoiar você em sua jornada educacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contato">
                <Mail className="mr-2 h-5 w-5" />
                Entre em Contato
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/inscricao">
                Candidate-se Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
