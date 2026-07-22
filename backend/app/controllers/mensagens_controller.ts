import type { HttpContext } from '@adonisjs/core/http'
import Mensagem from '#models/mensagem'

export default class MensagensController {
  async index({ response }: HttpContext) {
    const mensagens = await Mensagem.all()
    return response.ok({ mensagens })
  }

  async store({ request, response }: HttpContext) {
    const { nome, email, mensagem } = request.body()
    const nova = await Mensagem.create({ nome, email, mensagem })
    return response.created({ mensagem: nova })
  }
}