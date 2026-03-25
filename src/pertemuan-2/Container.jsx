export default function Container({ children }) {
    return (
        <div className="card">
      <h1>Pemrograman Framework Lanjutan</h1>
      <hr /> 
      
      <main className="content-area">
        {children}
      </main>
      
      <hr />
      <footer>
        <p>2026 - Politeknik Caltex Riau</p>
      </footer>
    </div>
  );
}