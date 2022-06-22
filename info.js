'use strict';

function Info(props) {
    const [view, setView] = React.useState(false);
    const [showCloseAnimation, setShowCloseAnimation] = React.useState(false);

    return (
        <>
            {view && (
                <div
                    class={`animate__animated ${
                        showCloseAnimation
                            ? 'animate__slideOutDown'
                            : 'animate__slideInUp'
                    } info-box`}
                >
                    <div class="info-box--container">
                        <div class="top">
                            <h2 class="name">{props.title}</h2>
                            <p class="description">{props.description}</p>

                            <span class="technologies">
                                {props.technologies}
                            </span>
                        </div>

                        <div
                            class="info-button close"
                            onClick={() => {
                                setShowCloseAnimation(true);
                                setTimeout(() => {
                                    setView(false);
                                    setShowCloseAnimation(false);
                                }, 600);
                            }}
                        >
                            Close
                        </div>
                    </div>
                </div>
            )}
            <div class="info-button" onClick={() => setView(true)}>
                View Details
            </div>
        </>
    );
}

// Find all DOM containers, and render Like buttons into them.
// Note we're using CSS classes instead of IDs so that we can find several nodes.
document.querySelectorAll('.info-root').forEach((rootNode) => {
    const root = ReactDOM.createRoot(rootNode);
    // Read title from a data-* attribute.
    const title = rootNode.dataset.title;
    const description = rootNode.dataset.description;
    const technologies = rootNode.dataset.technologies;
    root.render(
        React.createElement(Info, {
            title: title,
            description: description,
            technologies: technologies,
        })
    );
});
