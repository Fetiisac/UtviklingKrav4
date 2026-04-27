import { useEffect, useState } from 'react'

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const query = '*[_type == "assignment"] | order(title asc){_id,title,description}'
    const params = new URLSearchParams({ query })
    const url = `https://srmego44.api.sanity.io/v2025-04-26/data/query/production?${params.toString()}`

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setAssignments(data.result || [])
        setLoading(false)
      })
      .catch((err) => {
        setError(`Feil: ${err.message}`)
        setLoading(false)
      })
  }, [])

  return (
    <section aria-labelledby="assignments">
      <h2 id="assignments">Arbeidskrav</h2>

      {loading && <p>Laster arbeidskrav...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && assignments.length === 0 && (
        <p>Ingen arbeidskrav funnet.</p>
      )}

      {!loading &&
        !error &&
        assignments.length > 0 &&
        assignments.map((assignment) => (
          <article key={assignment._id}>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
          </article>
        ))}
    </section>
  )
}