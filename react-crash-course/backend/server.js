require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const mongoURL = process.env.MONGO_URL; // Obtém o valor de MONGO_URI do .env


mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Defina o Schema e o modelo para Floripasat
const FloripaSatSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },
      year: {
        type: Number,
        required: true,
      },
      month: {
        type: Number,
        required: true,
      },
      day: {
        type: Number,
        required: true,
      },
      hour: {
        type: Number,
        required: true,
      },
      minute: {
        type: Number,
        required: true,
      },
      second: {
        type: Number,
        required: true,
      },
      battery_cell_1_voltage: {
        type: Number,
        required: true,
      },
      battery_cell_2_voltage: {
        type: Number,
        required: true,
      },
      battery_temperature: {
        type: Number,
        required: true,
      },
      battery_current: {
        type: Number,
        required: true,
      },
      battery_charge: {
        type: Number,
        required: true,
      },
      sp_01_current: {
        type: Number,
        required: true,
      },
      sp_02_current: {
        type: Number,
        required: true,
      },
      sp_03_current: {
        type: Number,
        required: true,
      },
      sp_04_current: {
        type: Number,
        required: true,
      },
      sp_05_current: {
        type: Number,
        required: true,
      },
      sp_06_current: {
        type: Number,
        required: true,
      },
      sp_01_02_voltage: {
        type: Number,
        required: true,
      },
      sp_03_04_voltage: {
        type: Number,
        required: true,
      },
      sp_05_06_voltage: {
        type: Number,
        required: true,
      },
      energy_level: {
        type: Number,
        required: true,
      },
      reserved_21: {
        type: String,
      },
      reserved_22: {
        type: String,
      },
      reserved_23: {
        type: String,
      },
      reserved_24: {
        type: String,
      },
      reserved_25: {
        type: String,
      },
      reserved_26: {
        type: String,
      },
      reserved_27: {
        type: String,
      },
      reserved_28: {
        type: String,
      },
      reserved_29: {
        type: String,
      },
      reserved_30: {
        type: String,
      },
      reserved_31: {
        type: String,
      },
      reserved_32: {
        type: String,
      },
      reserved_33: {
        type: String,
      },
      reserved_34: {
        type: String,
      },
      reserved_35: {
        type: String,
      },
      eps_temperature: {
        type: Number,
        required: true,
      },
      satNOGS: {
        type: String,
        required: true,
      },
      callsign: {
        type: String,
        required: true,
      },
      grid_locator: {
        type: String,
        required: true,
      },
      
    },
    { timestamps: true },
);

const FloripaSat1Overall = mongoose.model("Floripasats", FloripaSatSchema);

// Rota para buscar dados do Floripasat
app.get('/Floripasats', async (req, res) => {
  try {
    const data = await FloripaSat1Overall.find(); // Obtém todos os dados
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
