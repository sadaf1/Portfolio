import useReveal from "../hooks/useReveal";

const Reveal = ({ children, delay = 0, className = "" }) => {

    const [ref, visible] = useReveal();

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible
                    ? "translateY(0)"
                    : "translateY(28px)",
                transition: `opacity .7s ease ${delay}s,
                             transform .7s ease ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

export default Reveal;