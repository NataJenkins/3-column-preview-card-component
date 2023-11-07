import Sedan from "./assets/icon-sedans.svg";
import Suvs from "./assets/icon-suvs.svg";
import Luxury from "./assets/icon-luxury.svg";
import "./App.scss";

const Card = ({ title, description, icon }) => {
    const getIcon = () => {
        switch (icon) {
            case "Sedan":
                return Sedan;
            case "Suvs":
                return Suvs;
            case "Luxury":
                return Luxury;

            default:
                break;
        }
    };
    return (
        <div className="card">
            <img src={getIcon()} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <button>Learn More</button>
        </div>
    );
};

function App() {
    const cards = [
        {
            title: "Sedan",
            description:
                "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
        },
        {
            title: "Suvs",
            description:
                "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        },
        {
            title: "Luxury",
            description:
                "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
        },
    ];

    return (
        <main>
            {cards.map((card) => (
                <Card
                    key={card.title}
                    title={card.title}
                    icon={card.title}
                    description={card.description}
                />
            ))}
        </main>
    );
}

export default App;
