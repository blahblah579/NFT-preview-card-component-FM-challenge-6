import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
// Import MDI Icons
import '@mdi/font/css/materialdesignicons.css';

// Vuetify configuration
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Use MDI as the default icon set
  },
});


createApp(App).use(vuetify).mount('#app')
