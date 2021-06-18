import React, { useState } from "react";
import { Wrapper } from "./App.styles";
import Background from "./components/Background";
import Timer from "./components/LaunchTimer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Launched from "./components/Launched";

export default function App() {
  const [launched, setLaunched] = useState(false);

  return (
    <Wrapper>
      <Background />
      {!launched && (
        <>
          <Header />
          <Timer onTimerEnd={() => setLaunched(true)} />
        </>
      )}
      {launched && <Launched />}
      <Footer />
    </Wrapper>
  );
}
