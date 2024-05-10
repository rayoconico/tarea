<template>
  <div class="background-gradient">
    <div class="simuladorC d-flex justify-content-center align-items-center ">
      <hr>
      <div class="title-box col-lg-5 bg-sim mt-3">
        <h1 class=" text-center mb-2 mt-2  ">Simulador de Crédito Hipotecario</h1>
      </div>
    </div>
    <div class="row d-flex justify-content-center align-items-center " >
      <div class="col-lg-6 bg-sim">
        <div class="App app-container  text-white p-5 rounded mt-3">
          <Form @calculate="handleCalculate" />
          <Result
            v-if="showResult"
            :monthlyPayment="monthlyPayment"
            :requiredIncome="requiredIncome"
          />
          <div v-if="mortgageOptions.length">
            <h2>Opciones de Crédito Hipotecario</h2>
            <div class="row">
              <div v-for="option in mortgageOptions" :key="option.id" class="col-md-6 mb-4">
                <Card :option="option" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Form from './components/Form.vue';
import Result from './components/Result.vue';
import Card from './components/Card.vue';
import { fetchMortgageOptions } from './services/apiService';

export default {
  name: 'App',
  components: {
    Form,
    Result,
    Card,
  },
  data() {
    return {
      monthlyPayment: null,
      requiredIncome: null,
      mortgageOptions: [],
      showResult: false,
    };
  },
  methods: {
    async handleCalculate(formData) {
      const { valorPropiedad, Pie, plazo, monthlyPayment, requiredIncome } = formData;
      this.monthlyPayment = monthlyPayment;
      this.requiredIncome = requiredIncome;
      this.showResult = true;

      try {
        const options = await fetchMortgageOptions({
          valorPropiedad,
          Pie,
          plazo,
        });
        this.mortgageOptions = options;
      } catch (error) {
        console.error('Error fetching mortgage options:', error);
        
      }
    },
  },
};
</script>

<style>
  input, select {
    width: 80%;   /* Ancho del input se ajusta al 80% del ancho del contenedor */
    height: 2rem;  /* Altura del input */
    box-sizing: border-box; /* Asegura que el padding y el borde no aumenten el tamaño del input */
    padding: 0.5rem; /* Espacio interior del input */
    border: 1px solid #ccc; /* Borde del input */
  }
  /* Ocultar flechas en campos de entrada de número */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Ocultar flechas en campos de selección */
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  
  /* Establecer el ancho y la altura de los campos de entrada */
  input, select {
    width: 2rem;   /* Ancho del input */
    height: 2rem;  /* Altura del input */
  }
  
  .App {
      font-family:'Segoe UI', sans-serif;
      background-color: rgba(6, 94, 129, 0.726);
      margin: 0;
      padding: 0;

  }
  
  .card {
      background-color: rgba(255, 255, 255, 0.8);
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .background-gradient {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    height: 100vh;
  }
  .title-box{
    background-color: rgba(255, 255, 255, 0.644);
    font-family:'Segoe UI', sans-serif;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .segoe-font {
    font-family: 'Segoe UI', sans-serif;
  }
  
  </style>