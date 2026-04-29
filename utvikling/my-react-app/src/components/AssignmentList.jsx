import { useEffect, useState } from 'react'

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([])

  useEffect(() => {
    fetch(
      'https://srmego44.api.sanity.io/v2025-04-26/data/query/production?query=*[_type=="assignment"]{_id,title,description}'
    )
      .then((res) => res.json())
      .then((data) => setAssignments(data.result))
  }, [])

  return (
    <section>
      <h2>Arbeidskrav</h2>

      {assignments.map((assignment) => (
        <article key={assignment._id}>
          <h3>{assignment.title}</h3>
          <p>{assignment.description}</p>
        </article>
      ))}
    </section>
  )
}