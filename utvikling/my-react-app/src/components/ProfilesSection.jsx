import FetiProfile from './profiler/FetiProfile'
import KalidKort from './profiler/kalid-kort'
import MarcoProfile from './profiler/Marco-kort'

export default function ProfilesSection() {
  return (
    <section>
      <h2>Gruppemedlemmer</h2>
      <FetiProfile />
      <KalidKort />
      <MarcoProfile />
    </section>
  )
}