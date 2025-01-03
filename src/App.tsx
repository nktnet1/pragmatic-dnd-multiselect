import MultiSelectDndExample from "./multi-select-dnd"

const REPO_LINK = 'https://github.com/nktnet1/pragmatic-dnd-multiselect';

function App() {
  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Hold SHIFT to select multiple items
      </h1>

      <MultiSelectDndExample />

      <p  style={{ color: 'white', textAlign: 'center', marginTop: 25 }}>
        GitHub: <a href={REPO_LINK} target="_blank" rel="noreferrer">{REPO_LINK}</a>
      </p>
    </div>
  )
}

export default App
