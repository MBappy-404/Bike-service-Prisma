"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const statusMap = {
        pending: client_1.Status.pending,
        "in-progress": client_1.Status.inProgress, // Map hyphenated input to enum name
        done: client_1.Status.done,
    };
    // Transform the status
    const prismaData = Object.assign(Object.assign({}, data), { status: statusMap[data.status] || statusMap.pending });
    const result = yield prisma.service.create({
        data: prismaData,
    });
    return result;
});
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.findMany();
    return result;
});
const getService = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
    return result;
});
const markService = (serviceId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistService = yield prisma.service.findUnique({
        where: {
            serviceId,
        },
    });
    if (!isExistService) {
        throw new Error("Service Not Found");
    }
    const result = yield prisma.service.update({
        where: {
            serviceId,
        },
        data: {
            status: client_1.Status.done,
            completionDate: data.completionDate,
        },
    });
    return result;
});
const servicesStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.findMany({
        where: {
            status: {
                in: [client_1.Status.pending, client_1.Status.inProgress],
            },
            serviceDate: {
                lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
            },
        },
    });
    return result;
});
exports.services = {
    createService,
    getAllService,
    getService,
    markService,
    servicesStatus,
};
