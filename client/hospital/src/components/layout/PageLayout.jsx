export default function PageLayout({ title, description, action, children }) {
  return (
    <section>
      <div className="page-heading">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}