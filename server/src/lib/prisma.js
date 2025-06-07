const { PrismaClient } = require('@prisma/client'); // Correct import
const prisma = new PrismaClient();

module.exports = prisma;