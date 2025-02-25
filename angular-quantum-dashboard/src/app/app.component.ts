import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Quantum Computing UI Dashboard</h1>
    <div class="dashboard">
      <quantum-visualizer></quantum-visualizer>
      <wasm-quantum-simulator></wasm-quantum-simulator>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }