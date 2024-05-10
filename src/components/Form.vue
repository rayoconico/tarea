<template>
  <div>
    <h2>Ingresa los datos</h2>
    <form @submit.prevent="calculateMonthlyPayment">
      <div class="mb-3">
        <label for="valorPropiedad" class="form-label">Valor Propiedad (en UF):</label>
        <input
          type="number"
          id="valorPropiedad"
          v-model.number="formData.valorPropiedad"
          class="form-control  "
          required
        >
      </div>
      <div class="mb-3">
        <label for="pie" class="form-label">Pie (en UF):</label>
        <input
          type="number"
          id="pie"
          v-model.number="formData.pie"
          class="form-control m-0 p-2"
          required
        >
      </div>
      <div class="mb-3">
        <label for="tasaInteres" class="form-label">Tasa de Interés (%):</label>
        <input
          type="number"
          id="tasaInteres"
          v-model.number="formData.tasaInteres"
          class="form-control"
          required
        >
      </div>
      <div class="mb-3">
        <label for="plazo" class="form-label">Plazo (en años):</label>
        
        <select id="plazo" v-model.number="formData.plazo" class="form-control"  required>
          <option selected="selected">Seleccionar periodo</option>
          <option value="5">5 años</option>
          <option value="10">10 años</option>
          <option value="15">15 años</option>
          <option value="20">20 años</option>
          <option value="25">25 años</option>
          <option value="30">30 años</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary btn-bottum">Calcular Dividendos</button>
    </form>
  </div>
 
</template>

<script>
export default {
  name: 'MortgageForm',
  data() {
    return {
      formData: {
        valorPropiedad: null,
        pie: null,
        tasaInteres: 5, // Valor por defecto
        plazo: null,
      },
    };
  },
  methods: {
    calculateMonthlyPayment() {
      // Validar que todos los campos estén llenos
      if (
        !this.formData.valorPropiedad ||
        !this.formData.pie ||
        !this.formData.tasaInteres ||
        !this.formData.plazo
      ) {
        alert('Por favor completa todos los campos.');
        return;
      }

      // Calcular el monto del préstamo
      const loanAmount = this.formData.valorPropiedad - this.formData.pie;

      // Calcular el interés mensual
      const monthlyInterestRate = this.formData.tasaInteres / 100 / 12;

      // Calcular el número total de pagos
      const totalPayments = this.formData.plazo * 12;

      // Calcular el dividendo mensual
      const monthlyPayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

      // Calcular el sueldo requerido
      const requiredIncome = monthlyPayment * 4;

      // Emitir los resultados a los componentes padres
      this.$emit('calculate', {
        valorPropiedad: this.formData.valorPropiedad,
        pie: this.formData.pie,
        plazo: this.formData.plazo,
        monthlyPayment,
        requiredIncome,
      });
    },
  },
};
</script>

<style>
  
  #valorPropiedad, #pie, #tasaInteres, #plazo {
    
    width: 200px;   
  }
  
  
</style>