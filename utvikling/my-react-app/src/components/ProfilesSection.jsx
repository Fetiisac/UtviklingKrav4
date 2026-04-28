import FetiProfile from './profiler/FetiProfile'
import MarcoProfile from './profiler/MarcoProfile'

export default function ProfilesSection() {
  return (
    <section aria-labelledby="group-members">
      <h2 id="group-members">Gruppemedlemmer</h2>
      <FetiProfile />
      <MarcoProfile />
    </section>
  )
}