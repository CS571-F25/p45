import { FiBarChart2, FiHeart, FiSearch, FiTarget } from 'react-icons/fi'
import HeroBanner from './HeroBanner.jsx'
import StatHighlight from './StatHighlight.jsx'

const roadmap = [
  {
    label: 'Dataset',
    value: '150+ schools',
    detail: 'Coverage across every MD and DO program with rolling updates.',
  },
  {
    label: 'Filters',
    value: 'Location, GPA, Tuition',
    detail: 'Filter by program type, state, and sort by key metrics.',
  },
  {
    label: 'Favorites',
    value: 'Side-by-side view',
    detail: 'Save schools and compare them in a detailed table.',
  },
]

const features = [
  {
    icon: FiSearch,
    title: 'Smart Search',
    description: 'Find schools by name, location, or program type instantly.',
  },
  {
    icon: FiBarChart2,
    title: 'Compare Schools',
    description: 'View side-by-side comparisons of GPA, MCAT, tuition, and match rates.',
  },
  {
    icon: FiHeart,
    title: 'Save Favorites',
    description: 'Build your personalized list of target schools.',
  },
  {
    icon: FiTarget,
    title: 'Match Insights',
    description: 'See residency match rates to evaluate program outcomes.',
  },
]

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="container py-4">
        <section className="mb-5">
          <h2 className="h3 mb-4">What We Offer</h2>
          <div className="row g-4">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.title} className="col-sm-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <div className="feature-icon mb-3">
                        <IconComponent size={48} className="text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="h5 card-title">{feature.title}</h3>
                      <p className="card-text text-muted small">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-4">
          <h2 className="h3 mb-4">Project Roadmap</h2>
          <div className="row">
            {roadmap.map((item) => (
              <StatHighlight key={item.label} {...item} />
            ))}
          </div>
        </section>

        <section className="bg-light rounded p-4">
          <h2 className="h4 mb-3">About This Project</h2>
          <p className="mb-0">
            Premed Compass was built to help fellow pre-med students navigate the overwhelming 
            process of researching medical schools. Instead of bouncing between multiple websites 
            and spreadsheets, you can find all the essential information in one place. This project 
            is continuously developing with more schools and features being added regularly.
          </p>
        </section>
      </div>
    </div>
  )
}
