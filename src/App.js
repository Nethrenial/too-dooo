import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import NoteSection from "./components/note-section/note-section.jsx";
function App() {
  return (
    <div>
      <Header></Header>
      <NoteSection></NoteSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
