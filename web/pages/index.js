import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(r => r.json())
export default function Home() {
  const { data: edu } = useSWR('/api/pillars/education', fetcher)
  const { data: re } = useSWR('/api/pillars/reforestation', fetcher)
  return (
    <div style={{ fontFamily: 'system-ui,Segoe UI,Roboto', padding: 24 }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="/logo.svg" alt="logo" width="64" height="64" />
        <h1 style={{ margin: 0 }}>CeloHT Dashboard</h1>
      </header>
      <main style={{ marginTop: 20 }}>
        <section>
          <h2>Education</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(edu || {loading: true}, null, 2)}</pre>
        </section>
        <section>
          <h2>Reforestation</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(re || [], null, 2)}</pre>
        </section>
      </main>
    </div>
  )
}