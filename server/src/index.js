require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
});