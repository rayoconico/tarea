<template>
  <div class="card mt-5">
    <div class="form-container bg-light p-4 rounded border border-success">
      <h5 class="card-title text-center">Resultado de la Simulación</h5>
      <hr>
      <div class="results">
        <p class="card-text">Dividendo Mensual: {{ formatCurrency(monthlyPayment) }}</p>
        <p class="card-text">Sueldo Requerido: {{ formatCurrency(requiredIncome) }}</p>
      </div>
      <hr>
      <p class="disclaimer text-muted small mt-3">Esta información es meramente referencial el cálculo real siempre está sujeto a evaluación por las entidades financieras.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MortgageResult',
  props: {
    monthlyPayment: {
      type: Number,
      required: true,
    },
    requiredIncome: {
      type: Number,
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
  body {
    font-family: 'Segoe UI', sans-serif;
  }
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
  

  .disclaimer {
    text-align: justify; /* El texto del descargo de responsabilidad está justificado */
  }
</style>
