import Header from './components/Header'
import ProfilesSection from './components/ProfilesSection'
import AssignmentList from './components/AssignmentList'

export default function App() {
  return (
    <>
      <Header groupNumber="Gruppe 4" />

      <main>
        <ProfilesSection />
        <AssignmentList />
      </main>
    </>
  )
}