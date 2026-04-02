require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/infrastructure/db');
const seedDatabase = require('./src/infrastructure/seed');

const start = async () => {
    await connectDB();

    // Seed only if needed
    await seedDatabase();

    app.listen(5000, () => console.log('Server running on port 5000'));
};

start();