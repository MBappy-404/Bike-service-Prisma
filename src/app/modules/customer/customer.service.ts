import { PrismaClient } from "@prisma/client";

 

const prisma = new PrismaClient();

const createCustomer = async (data: any) => {
  const result = await prisma.customer.create({
    data: data,
  });
  return result;
};
const getAllCustomers = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getCustomer = async (customerId: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });
  return result;
};

const updateCustomer = async (customerId: string, data: any) => {
  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data,
  });
  return result;
};

const deleteCustomer = async (customerId: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId,
    },
  });
  return result;
};

export const customerService = {
  createCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
