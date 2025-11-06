export default function Home() {
  return (
    <div className="container py-4">
      <h1 className="mb-3">Premed Compass</h1>
      <p className="lead">
        I&apos;m putting together an interactive guide to help fellow pre-med students sort through the chaos of
        medical school applications.
      </p>
      <p>
        The plan is to collect the basics for every MD and DO program—average GPA and MCAT, tuition, match rate,
        location and anything else that tends to get buried in spreadsheets. From there, the idea is to build
        filters for GPA, cost, and region, and let people flag schools they want to keep an eye on so they can
        compare them side by side.
      </p>
      <p>
        For now this is just the first deploy so I can get the structure in place. Real data, filtering logic, and
        the detailed school pages will follow as the project grows.
      </p>
    </div>
  )
}
