import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import * as _ from 'lodash'
import loveNotes from './love-notes.json'

function LoveNote() {
  const note = _.sample(loveNotes)

  return (
    <main>
      <p>{note}</p>
    </main>
  )
}

function JarPrompt(props: {setShouldShowNote: React.Dispatch<React.SetStateAction<boolean>>}) {
  const hi = _.sample([
    "Heya",
    "Hello",
    "Hiya",
    "Hey bubby"
  ])

  const doYouWant = _.sample([
    "Are you wanting",
    "Do you want",
  ])

  const [toRead, aNote] = _.sample([
    ["", "a bit of love"],
    ["to read", "a cute message"],
    ["", "a digital hug"],
    ["to have a read of", "something nice"],
  ]) as [string, string]

  return (
    <main>
      <p>{hi}! {doYouWant} {toRead} <button onClick={() => props.setShouldShowNote(true)}>{aNote}</button>?</p>
    </main>
  )
}


function App() {
  const [shouldShowNote, setShouldShowNote] = useState(false)

  return (
  <>
    <header>
      <h1>Love Jar</h1>
    </header>
    { shouldShowNote 
      ? <LoveNote />
      : <JarPrompt setShouldShowNote={setShouldShowNote} />
    }
    <footer>
      <p>Made with &lt;3 by Andy</p>
    </footer>
  </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
