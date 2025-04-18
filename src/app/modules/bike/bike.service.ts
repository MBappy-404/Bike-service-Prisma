import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createBike = async (data: any) => {
  const result = await prisma.bike.create({
    data: data,
  });
  return result;
};
const getAllBike = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getBike = async (bikeId: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId,
    },
  });
  return result;
};

export const bikeService = {
  createBike,
  getAllBike,
  getBike,
};
