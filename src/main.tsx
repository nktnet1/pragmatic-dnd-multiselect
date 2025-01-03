import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MultiSelectDndExample from './multi-select-dnd'
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 style={{ color: 'white', textAlign: 'center' }}>Hold SHIFT to select multiple items</h1>
    <MultiSelectDndExample />
  </StrictMode>,
)
