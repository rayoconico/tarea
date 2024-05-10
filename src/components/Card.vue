<template>
  <div class="card mt-5">
    <div class="form-container bg-light p-4 rounded border border-success">
      <h5 class="card-title text-center">Resultado de la Simulación</h5>
      <hr>
      <div class="results d-flex justify-content-around">
        <div class="result-card p-2">
          <p class="card-text m-0">Dividendo Mensual:</p>
          <p class="result-value m-0">{{ formatCurrency(monthlyPayment) }}</p>
        </div>
        <div class="result-card p-2">
          <p class="card-text m-0">Sueldo Requerido:</p>
          <p class="result-value m-0">{{ formatCurrency(requiredIncome) }}</p>
        </div>
      </div>
      <hr>
      <p class="disclaimer text-muted small mt-3">Esta información es meramente referencial el cálculo real siempre está sujeto a evaluación por las entidades financieras.</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MortgageCard',
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatCurrency(amount) {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      }).format(amount);
    },
  },
};
</script>
<style>
  .form-container {
    border: 2px solid green; /* Borde verde más grueso */
  }

  .card-title {
    font-size: 1.5rem; /* Título más grande */
    font-weight: bold; /* Título en negrita */
  }

  .results {
    display: flex; /* Los resultados se muestran en línea */
    justify-content: space-between; /* Los resultados se distribuyen uniformemente a lo largo de la línea */
    padding: 0 1rem; /* Espacio a los lados de los resultados */
  }

  .result-card {
    background-color: #f8f9fa; /* Fondo ligeramente más oscuro */
    border: 1px solid #ced4da; /* Borde alrededor de cada resultado */
    border-radius: 5px; /* Bordes redondeados */
    width: 45%; /* Ancho de cada tarjeta de resultado */
    text-align: center; /* Texto centrado */
  }

  .result-value {
    font-size: 1.25rem; /* Tamaño de fuente más grande para los valores de los resultados */
    font-weight: bold; /* Valores de los resultados en negrita */
  }

  .disclaimer {
    text-align: justify; /* El texto del descargo de responsabilidad está justificado */
  }
  body {
    font-family: 'Segoe UI', sans-serif;
  }


</style>
