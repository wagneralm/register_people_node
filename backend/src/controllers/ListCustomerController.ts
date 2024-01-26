import { FastifyRequest, FastifyReply } from 'fastify'
import { ListCustomerService } from '../services/ListCustomerService'

class ListCustomerController {

  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { id } = request.query as { id: string }
    const listCustomerService = new ListCustomerService()

    let customers
    !id ? (customers = await listCustomerService.execute()) : (customers = await listCustomerService.findById({ id }))

    reply.send(customers)
  }

}

export { ListCustomerController }