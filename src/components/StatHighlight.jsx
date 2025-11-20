export default function StatHighlight({ label, value, detail }) {
  return (
    <div className="col-12 col-md-4 mb-3">
      <div className="border rounded p-3 h-100 bg-light">
        <p className="text-uppercase text-muted fw-semibold small mb-1">{label}</p>
        <p className="h4 mb-2">{value}</p>
        <p className="mb-0 text-muted">{detail}</p>
      </div>
    </div>
  )
}

StatHighlight.defaultProps = {
  label: '',
  value: '',
  detail: '',
}
