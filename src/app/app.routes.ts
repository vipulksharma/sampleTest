// import router from angular router
import { RouterConfig } from '@angular/router';
// Import home home.component.ts
import { Home } from './home';
// Import about from app component
import { About } from './about';
// Route definition
export const routes: RouterConfig = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'home' }
];
