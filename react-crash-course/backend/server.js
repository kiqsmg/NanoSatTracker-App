const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/floripasat'; // Conecte-se ao seu MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Defina o Schema e o modelo para Floripasat
const FloripasatSchema = new mongoose.Schema({
  name: String,
  year: Number,
  month: Number,
  day: Number,
  hour: Number,
  minute: Number,
  second: Number,
  battery_cell_1_voltage: Number,
  battery_cell_2_voltage: Number,
  battery_temperature: Number,
  battery_current: Number,
  battery_charge: Number,
  //... outros campos
});

const Floripasat = mongoose.model('Floripasat', FloripasatSchema);

// Rota para buscar dados do Floripasat
app.get('/data', async (req, res) => {
  try {
    const data = await Floripasat.find(); // Obtém todos os dados
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
