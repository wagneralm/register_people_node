import prismaClient from "../prisma"

interface ListCustomerProps {
  id: string
}

const u = undefined

class ListCustomerService {
  async execute() {

    const customers = await prismaClient.customer.findMany()

    return customers
  }

  async findById({ id }: ListCustomerProps) {
    const customers = await prismaClient.customer.findFirst({
      where: {
        id: id
      }
    })

    return customers
  }
}

export { ListCustomerService }