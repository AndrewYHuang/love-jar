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
    "Do you want",
    "Want",
    "Need"
  ])

  const [toVerb, aThing] = _.sample([
    [["", "to have", "to get"], ["a digital hug", "a bit of love", "a virtual kiss"]],
    [["", "to read", "to get"], ["a cute message", "something sweet", "a little love note"]],
  ])?.map(phrase => _.sample(phrase)) ?? ["", ""]

  return (
    <main>
      <p>{hi}! {doYouWant} {toVerb} <button type='button' onClick={() => props.setShouldShowNote(true)}>{aThing}</button>?</p>
    </main>
  )
}


function App() {
  const [shouldShowNote, setShouldShowNote] = useState(false)

  return (
  <>
    <header>
      <h1><a href='/'>Love Jar</a></h1>
    </header>
    { shouldShowNote 
      ? <LoveNote />
      : <JarPrompt setShouldShowNote={setShouldShowNote} />
    }
    <footer>
      <p>Made with &lt;3 by Andy!</p>
      <p><a href='https://git.sr.ht/~kaytwolf/love-jar/settings/info'>Source</a></p>
    </footer>
  </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
