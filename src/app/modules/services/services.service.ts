import { PrismaClient, Status, Service } from "@prisma/client";

const prisma = new PrismaClient();

const createService = async (data: Service) => {
  const statusMap = {
    pending: Status.pending,
    "in-progress": Status.inProgress, // Map hyphenated input to enum name
    done: Status.done,
  };

  type IncomingStatus = "pending" | "in-progress" | "done";

  // Transform the status
  const prismaData = {
    ...data,
    status: statusMap[data.status as IncomingStatus] || statusMap.pending, // Default fallback
  };

  const result = await prisma.service.create({
    data: prismaData,
  });
  return result;
};

const getAllService = async () => {
  const result = await prisma.service.findMany();
  return result;
};

const getService = async (serviceId: string) => {
  const result = await prisma.service.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });
  return result;
};

const markService = async (serviceId: string, data: any) => {
  const isExistService = await prisma.service.findUnique({
    where: {
      serviceId,
    },
  });

  if (!isExistService) {
    throw new Error("Service Not Found");
  }

  const result = await prisma.service.update({
    where: {
      serviceId,
    },
    data: {
      status: Status.done,
      completionDate: data.completionDate,
    },
  });
  return result;
};

const servicesStatus = async () => {
  const result = await prisma.service.findMany({
    where: {
      status: {
        in: [Status.pending, Status.inProgress],
      },
      serviceDate: {
        lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      },
    },
  });

  return result;
};

export const services = {
  createService,
  getAllService,
  getService,
  markService,
  servicesStatus,
};
