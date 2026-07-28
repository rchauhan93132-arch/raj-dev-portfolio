export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-header">
          <div className="modal-icon">{project.icon}</div>
          <div>
            <span className="proj-status">{project.status}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-description">{project.longDescription || project.shortDescription}</p>

          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h4>Key Features & Architecture</h4>
              <ul className="modal-features-list">
                {project.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-section">
            <h4>Technology Stack</h4>
            <div className="proj-stack">
              {project.stack.map((tech) => (
                <span className="stack-chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo 🔗
            </a>
          ) : (
            <button className="btn btn-ghost" onClick={onClose}>
              Close Modal
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
