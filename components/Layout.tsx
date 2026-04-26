import Link from "next/link";

export default function Layout({ children }: any) {
  return (
    <div style={{ 
      fontFamily: "sans-serif", 
      maxWidth: "900px", 
      margin: "0 auto", 
      padding: "2rem" 
    }}>
      
      <header style={{ marginBottom: "2rem" }}>
        <nav>
          <ul style={{ 
            display: "flex", 
            gap: "1.5rem", 
            listStyle: "none", 
            padding: 0, 
            margin: 0 
          }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categories/karaoke">Karaoke</Link></li>
            <li><Link href="/categories/world">Wereldmuziek</Link></li>
            <li><Link href="/categories/fx">FX</Link></li>
            <li><Link href="/categories/loops">Loops</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer style={{ 
        marginTop: "3rem", 
        paddingTop: "1rem", 
        borderTop: "1px solid #ddd", 
        fontSize: "0.85rem", 
        color: "#666" 
      }}>
        <p>NovasoundIndex – automatische minimalistische shop.</p>
      </footer>
    </div>
  );
}
