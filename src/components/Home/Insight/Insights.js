import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../Insight/Insights.css';

function Insights() {
    const [visibleCards, setVisibleCards] = useState([0, 1]);
    const totalCards = 4;

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 820) {
                setVisibleCards([0]);
            } else if (screenWidth >= 820 && screenWidth <= 1350) {
                setVisibleCards([0]);
            } else if (screenWidth > 1950) {
                setVisibleCards([0, 1, 2]);
            } else {
                setVisibleCards([0, 1]);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLeftClick = () => {
        setVisibleCards(prevCards => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 820) {
                const newCard = (prevCards[0] - 1 + totalCards) % totalCards;
                return [newCard];
            } else if (screenWidth > 2000) {
                const newCard = (prevCards[0] - 1 + totalCards) % totalCards;
                return [newCard, (newCard + 1) % totalCards, (newCard + 2) % totalCards];
            }
            const newCards = prevCards.map(index => (index - 1 + totalCards) % totalCards);
            return newCards;
        });
    };

    const handleRightClick = () => {
        setVisibleCards(prevCards => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 820) {
                const newCard = (prevCards[0] + 1) % totalCards;
                return [newCard];
            } else if (screenWidth > 2000) {
                const newCard = (prevCards[prevCards.length - 1] + 1) % totalCards;
                return [(newCard - 2 + totalCards) % totalCards, (newCard - 1 + totalCards) % totalCards, newCard];
            }
            const newCards = prevCards.map(index => (index + 1) % totalCards);
            return newCards;
        });
    };

    useEffect(() => {
        document.title = "Explore-Insight";
    }, []);

    const cardData = [
        {
            category: "Viral Infections",
            date: "05 June, 2024",
            readTime: "2 min read",
            title: "Viral Infections Explained; Stages, Symptoms, and Effective Treatments",
            content: "What is a Viral Infection? A viral infection occurs when a virus enters the body, invades healthy cells, and begins to multiply.",
            author: "Dr. David Clarke",
            imageClass: "insight-image-one",
            personImageClass: "text-box-person-one-image",
            personClass: "text-box-person-one"
        },
        {
            category: "Women's Health",
            date: "05 June, 2024",
            readTime: "2 min read",
            title: "What is Thyroid Stimulating Hormone (TSH) and why it important",
            content: "Thyroid Stimulating Hormone (TSH) plays a critical role in maintaining hormonal balance and regulating the body's metabolism, particularly in women.",
            author: "By Dr. David Clarke",
            imageClass: "insight-image-two",
            personImageClass: "text-box-person-one-image",
            personClass: "text-box-person-two"
        },
        {
            category: "Diabetes",
            date: "05 June, 2024",
            readTime: "2 min read",
            title: "Understanding Diabetes and Managing Life with It",
            content: "Living with diabetes can be challenging, but understanding it is the first step towards managing it effectively.",
            author: "By Dr. Samuel Harris",
            imageClass: "insight-image-three",
            personImageClass: "text-box-person-two-image",
            personClass: "text-box-person-two"
        },
        {
            category: "Asthma",
            date: "05 June, 2024",
            readTime: "2 min read",
            title: "Understanding the Different Types of Asthma",
            content: "Asthma, a chronic respiratory condition characterized by airway inflammation and constriction, affects millions of people worldwide.",
            author: "By Dr. Samuel Harris",
            imageClass: "insight-image-four",
            personImageClass: "text-box-person-two-image",
            personClass: "text-box-person-two"
        }
    ];

    const handlers = useSwipeable({
        onSwipedLeft: handleRightClick,
        onSwipedRight: handleLeftClick,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div className="insight-background" {...handlers}>
            <div className="frame">
                <div className="blog">Condition Libraries</div>
                <div className="explore-insight">Explore Insights</div>
                <p className="insight-content">Stay one step ahead with our dedicated latest news update blogs.</p>
                <div className="navigation">
                    <div 
                        className="left-round active" 
                        onClick={handleLeftClick}
                    >
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 2L2 6L7 10" stroke="#272848" strokeWidth="1.725" strokeLinecap="square"/>
                        </svg>
                    </div>
                    <div 
                        className="right-round active" 
                        onClick={handleRightClick}
                    >
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10L7 6L2 2" stroke="#272848" strokeWidth="1.725" strokeLinecap="square"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="insight-card">
                {visibleCards.map(index => {
                    const card = cardData[index];
                    return (
                        <div key={index} className={`insight-card-${index % 2 === 0 ? 'one' : 'two'}`}>
                            <div className={`insight-card-${index % 2 === 0 ? 'one' : 'two'}-background`}>
                                <div className={`insight-card-${index % 2 === 0 ? 'one' : 'two'}-inner`}>
                                    <div className="image-one">
                                        <div className={card.imageClass}></div>
                                    </div>
                                    <div className="text-box-outter">
                                        <div className="text-box-inner-head"> 
                                            <p className="head-text">{card.category}</p> 
                                        </div>
                                        <div className="text-box-inner-date">
                                            <div className="text-box-inner-year">{card.date}</div>
                                            <div className="text-box-inner-ellipse"></div>  
                                            <div className="text-box-inner-time">{card.readTime}</div>
                                        </div>
                                        <div className="text-box-content">
                                            <div className="text-box-content-title" dangerouslySetInnerHTML={{ __html: card.title }}></div>
                                            <div className="text-box-content-sub-content">{card.content}</div>
                                        </div>
                                        <div className={card.personClass}>
                                            <div className={card.personImageClass}>
                                                <div className={`${card.personImageClass}-back`}></div>
                                            </div>
                                            <div className={`${card.personClass}-name`}>{card.author}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Insights;
