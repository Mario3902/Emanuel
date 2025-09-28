"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, CreditCard } from "lucide-react"

export default function ContatoClientPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-white flex-1 flex items-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Mensagem Enviada!</h1>
            <p className="text-lg text-gray-600 mb-8 text-pretty">
              Obrigado por entrar em contato conosco. Sua mensagem foi recebida e responderemos em breve.
            </p>
            <Button onClick={() => (window.location.href = "/")} size="lg" className="bg-blue-600 hover:bg-blue-700">
              Voltar ao Início
            </Button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              Entre em <span className="text-blue-600">Contato</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-pretty">
              Tem dúvidas sobre as bolsas de estudo? Nossa equipe está pronta para ajudar você a esclarecer qualquer
              questão.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
                <p className="text-lg text-gray-600 mb-8 text-pretty">
                  Estamos comprometidos em oferecer oportunidades educacionais de qualidade para jovens angolanos. Entre
                  em contato conosco através dos canais abaixo.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                        <p className="text-gray-600">Luanda, Angola</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
                        <div className="space-y-1">
                          <p className="text-gray-600">
                            <span className="font-medium">Geral:</span>{" "}
                            <a
                              href="mailto:contato@bolsaemanuelxirimbimbi.org"
                              className="text-green-600 hover:underline"
                            >
                              contato@bolsaemanuelxirimbimbi.org
                            </a>
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Suporte:</span>{" "}
                            <a
                              href="mailto:suporte@bolsaemanuelxirimbimbi.org"
                              className="text-green-600 hover:underline"
                            >
                              suporte@bolsaemanuelxirimbimbi.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Telefone / WhatsApp</h3>
                        <p className="text-gray-600">
                          <a href="tel:+244923440172" className="text-purple-600 hover:underline">
                            +244 923 440 172
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Methods */}
              <Card className="border-2 border-yellow-100">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-600 flex items-center">
                    <CreditCard className="h-6 w-6 mr-2" />
                    Métodos de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium text-sm">Express</div>
                    <div className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium text-sm">PayPal</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Envie sua Mensagem</CardTitle>
                  <CardDescription>Preencha o formulário abaixo e entraremos em contato em breve.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input
                        id="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange("mensagem", e.target.value)}
                        placeholder="Escreva sua mensagem aqui..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nosso Compromisso</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Estamos comprometidos em oferecer oportunidades educacionais de qualidade para jovens angolanos. Nossa
              equipe está sempre disponível para esclarecer dúvidas e apoiar você em sua jornada educacional.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
