import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
   options: {
     responsive: true,
     maintainAspectRatio: false,
     responsiveAnimationDuration: 3
   }
 }),

  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Webdesign', 'Webdevelopment', 'Grafisch ontwerp', 'Nederlands', 'Engels', 'Frans'],
      datasets: [
        {
          label: 'Sterkte',
          backgroundColor: '#f87979',
          data: [100, 80, 70, 100, 80, 50, 0],
        }
      ],
    })
  },

}
