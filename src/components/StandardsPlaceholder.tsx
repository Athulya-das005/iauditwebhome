import Footer from "@/components/Footer";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function StandardsPlaceholder({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <>
            <section
                style={{
                    background: `
                        radial-gradient(ellipse 60% 50% at 20% 0%, rgba(5,140,66,0.12) 0%, transparent 70%),
                        radial-gradient(ellipse 60% 50% at 80% 0%, rgba(0,77,64,0.10) 0%, transparent 70%),
                        #fafffe
                    `,
                    padding: "100px 2rem 80px",
                    textAlign: "center",
                    fontFamily: PP_NEUE_MONTREAL,
                    minHeight: "50vh",
                }}
            >
                <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                    <h1
                        style={{
                            fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            color: "#111827",
                            marginBottom: "1.25rem",
                            fontFamily: PP_NEUE_MONTREAL,
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        style={{
                            fontSize: "1.05rem",
                            lineHeight: 1.6,
                            color: "#6b7280",
                            fontFamily: PP_NEUE_MONTREAL,
                        }}
                    >
                        {description}
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}
