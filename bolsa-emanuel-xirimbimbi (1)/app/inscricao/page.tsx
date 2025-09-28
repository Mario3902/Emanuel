"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FileUp, CheckCircle, Clock, AlertCircle, Send } from "lucide-react"

export default function InscricaoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
    nacionalidade: "Angola",
    telefone: "",
    endereco: "",
    cursoDesejado: "",
    tipoBolsa: "",
    motivacao: "",
    experienciaAcademica: "",
    documentos: null as FileList | null,
    termos: false,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, documentos: e.target.files }))
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-white flex-1 flex items-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Candidatura Enviada com Sucesso!</h1>
            <p className="text-lg text-gray-600 mb-8 text-pretty">
              Obrigado por se candidatar à Bolsa Emanuel Xirimbimbi. Sua candidatura foi recebida e será analisada pela
              nossa equipe.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">Próximos Passos:</h3>
              <ul className="text-left text-blue-800 space-y-2">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Processo seletivo: 4-6 semanas</span>
                </li>
                <li className="flex items-start">
                  <Send className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Notificação por e-mail: {formData.email}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Acompanhe seu e-mail regularmente</span>
                </li>
              </ul>
            </div>
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
              <span className="text-blue-600">Candidatura</span> à Bolsa
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-pretty">
              Preencha o formulário abaixo para se candidatar à Bolsa de Estudos Emanuel Xirimbimbi. Certifique-se de
              fornecer todas as informações solicitadas.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Overview */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">Requisitos Básicos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ser angolano(a)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ter entre 16 e 35 anos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ter concluído o ensino médio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Apresentar documentação completa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-100">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-600">Taxa de Inscrição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  A taxa varia conforme o curso escolhido e cobre os custos de processamento da candidatura.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                  <p className="text-xs text-yellow-800">
                    <AlertCircle className="h-4 w-4 inline mr-1" />A taxa não garante a aprovação da bolsa.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Processo Seletivo</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Clock className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Duração: 4-6 semanas</span>
                  </li>
                  <li className="flex items-start">
                    <Send className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Notificação por e-mail</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Análise criteriosa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Formulário de Candidatura</CardTitle>
              <CardDescription>Preencha todos os campos obrigatórios marcados com asterisco (*).</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Informações Pessoais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <Label htmlFor="idade">Idade *</Label>
                      <Input
                        id="idade"
                        type="number"
                        min="16"
                        max="35"
                        required
                        value={formData.idade}
                        onChange={(e) => handleInputChange("idade", e.target.value)}
                        placeholder="Sua idade"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nacionalidade">Nacionalidade *</Label>
                      <Select
                        value={formData.nacionalidade}
                        onValueChange={(value) => handleInputChange("nacionalidade", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Angola">Angola</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => handleInputChange("telefone", e.target.value)}
                        placeholder="+244 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <Label htmlFor="endereco">Endereço *</Label>
                      <Input
                        id="endereco"
                        type="text"
                        required
                        value={formData.endereco}
                        onChange={(e) => handleInputChange("endereco", e.target.value)}
                        placeholder="Seu endereço completo"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Informações Acadêmicas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cursoDesejado">Curso Desejado *</Label>
                      <Input
                        id="cursoDesejado"
                        type="text"
                        required
                        value={formData.cursoDesejado}
                        onChange={(e) => handleInputChange("cursoDesejado", e.target.value)}
                        placeholder="Ex: Medicina, Engenharia, Direito"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tipoBolsa">Tipo de Bolsa *</Label>
                      <Select
                        value={formData.tipoBolsa}
                        onValueChange={(value) => handleInputChange("tipoBolsa", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nacional">Nacional</SelectItem>
                          <SelectItem value="internacional">Internacional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="experienciaAcademica">Experiência Acadêmica</Label>
                    <Textarea
                      id="experienciaAcademica"
                      value={formData.experienciaAcademica}
                      onChange={(e) => handleInputChange("experienciaAcademica", e.target.value)}
                      placeholder="Descreva sua experiência acadêmica, cursos complementares, etc."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="motivacao">Carta de Motivação *</Label>
                    <Textarea
                      id="motivacao"
                      required
                      value={formData.motivacao}
                      onChange={(e) => handleInputChange("motivacao", e.target.value)}
                      placeholder="Explique por que deseja esta bolsa e como ela contribuirá para seus objetivos..."
                      rows={5}
                    />
                  </div>
                </div>

                {/* Documents Upload */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Documentos</h3>
                  <div>
                    <Label htmlFor="documentos">Upload de Documentos *</Label>
                    <div className="mt-2">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="documentos"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <FileUp className="w-8 h-8 mb-4 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                            </p>
                            <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB cada)</p>
                          </div>
                          <input
                            id="documentos"
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            required
                          />
                        </label>
                      </div>
                      {formData.documentos && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600">
                            {formData.documentos.length} arquivo(s) selecionado(s)
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p className="font-medium mb-1">Documentos necessários:</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>Bilhete de Identidade (cópia)</li>
                        <li>Certificado do ensino médio</li>
                        <li>Histórico escolar</li>
                        <li>Carta de recomendação (opcional)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="termos"
                      checked={formData.termos}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, termos: checked as boolean }))}
                      required
                    />
                    <Label htmlFor="termos" className="text-sm leading-relaxed">
                      Declaro que todas as informações fornecidas são verdadeiras e concordo com os{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        termos e condições
                      </a>{" "}
                      da Bolsa Emanuel Xirimbimbi. *
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting || !formData.termos}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Enviando Candidatura...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Candidatura
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
