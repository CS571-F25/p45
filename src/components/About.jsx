import { Link } from 'react-router'

export default function About() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="mb-4">About Premed Compass</h1>
          
          <section className="mb-4">
            <h2 className="h4 mb-3">The Problem</h2>
            <p>
              Premed Compass grew out of my own scramble to figure out which schools were 
              realistic targets. Every site I found either focused on rankings or forced me 
              to bounce between tabs to check stats. The information was scattered across 
              MSAR, school websites, forums, and spreadsheets.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Our Solution</h2>
            <p>
              This project is my attempt to pull everything into one dashboard that&apos;s 
              easier to digest. Instead of switching between multiple resources, you can:
            </p>
            <ul>
              <li>Browse all MD and DO programs in one place</li>
              <li>Filter by program type and location</li>
              <li>Sort by the metrics that matter to you</li>
              <li>Save favorites and compare schools side by side</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">What&apos;s Next</h2>
            <p>
              This is an ongoing project with more features planned:
            </p>
            <ul>
              <li>Expanded database with all accredited MD/DO programs</li>
              <li>GPA and MCAT range filters</li>
              <li>Cost of living data by location</li>
              <li>User accounts to persist favorites</li>
              <li>Application timeline tracking</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">Built With</h2>
            <p>
              This application was built with accessibility and usability in mind, using:
            </p>
            <ul>
              <li><strong>React</strong> - For building the user interface</li>
              <li><strong>React Router</strong> - For client-side navigation</li>
              <li><strong>React Bootstrap</strong> - For accessible, responsive components</li>
              <li><strong>Vite</strong> - For fast development and optimized builds</li>
            </ul>
          </section>

          <div className="d-flex gap-3">
            <Link to="/explore" className="btn btn-primary">
              Start Exploring
            </Link>
            <Link to="/" className="btn btn-outline-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
