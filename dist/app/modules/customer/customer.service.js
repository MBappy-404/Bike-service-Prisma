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
exports.customerService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.create({
        data: data,
    });
    return result;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findMany();
    return result;
});
const getCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findUniqueOrThrow({
        where: {
            customerId,
        },
    });
    return result;
});
const updateCustomer = (customerId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.update({
        where: {
            customerId,
        },
        data,
    });
    return result;
});
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.delete({
        where: {
            customerId,
        },
    });
    return result;
});
exports.customerService = {
    createCustomer,
    getAllCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer,
};
