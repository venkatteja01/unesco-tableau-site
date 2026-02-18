import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">

      <header className="header">
        <h1>UNESCO World Heritage Sites PROJECT by LTVIP2026TMIDS89796</h1>
      </header>

      <div className="container">

        {/* Dashboard 1 */}
        <section className="card">
          <h2>Dashboard 1</h2>
          <iframe
            title="Dashboard1"
            src="https://public.tableau.com/views/Dashboard1-LTVIP2026TMIDS89796/Dashboard1?:showVizHome=no&:embed=true"
            height="820"
            width="100%"
          />
        </section>

        {/* Dashboard 2 */}
        <section className="card">
          <h2>Dashboard 2</h2>
          <iframe
            title="Dashboard2"
            src="https://public.tableau.com/views/Dashboard2-LTVIP2026TMIDS89796/Dashboard2?:showVizHome=no&:embed=true"
            height="820"
            width="100%"
          />
        </section>

        {/* Story */}
        <section className="card">
          <h2>Project Story</h2>
          <iframe
            title="Story1"
            src="https://public.tableau.com/views/UNESCOHERITAGEPROJECT-LTVIP2026TMIDS89796/Story1?:showVizHome=no&:embed=true"
            height="950"
            width="100%"
          />
        </section>

      </div>

      <footer className="footer">
        © 2026 UNESCO Heritage Tableau Project
      </footer>

    </div>
  );
}

export default App;
