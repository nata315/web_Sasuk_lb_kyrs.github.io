import React from "react";
import "./PhotoCarousel.css"; // Создайте этот CSS файл для стилей

class PhotoCarousel extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentIndex: 0,
            cardsPerView: this.getCardsPerView(),
            photos: [
                {
                    id: 1,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/b/b0/Персонаж_Темень_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20250912143857&path-prefix=ru',
                    title: 'Темень'
                },
                {
                    id: 2,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/4/4e/Персонаж_Кирена_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20250911055101&path-prefix=ru',
                    title: 'Кирена'
                },
                {
                    id: 3,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/1/19/Персонаж_Дань_Хэн_Освободитель_Пустошей_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20250912143840&path-prefix=ru',
                    title: 'Дань Хэн: Освободитель Пустошей'
                },
                
                // Персонажи с Пенаконии
                {
                    id: 4,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/2/2d/Character_Gallagher_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327022011',
                    title: 'Галлахер'
                },

                {
                    id: 5,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/5/5c/Character_Misha_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240206022717',
                    title: 'Миша'
                },

                {
                    id: 6,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/92/Character_Robin_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240508021256',
                    title: 'Зарянка'
                },

                {
                    id: 7,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/2/21/Character_Sunday_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20241224161538',
                    title: 'Воскресенье'
                },

                // Персонажи, которых встретили на Пенаконии

                {
                    id: 8,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/7/78/Character_Acheron_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327021325',
                    title: 'Ахерон'
                },

                {
                    id: 9,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/a/a9/Character_Aventurine_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327104723',
                    title: 'Авантюрин'
                },

                {
                    id: 10,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Sparkle_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327022635',
                    title: 'Искорка'
                },

                {
                    id: 11,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/3/38/Character_Firefly_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20241007220547',
                    title: 'Светлячок'
                },

                {
                    id: 12,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/f/fd/Character_Black_Swan_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240220023547',
                    title: 'Чёрный Лебедь'
                },

                {
                    id: 13,
                    src: 'https://static.wikia.nocookie.net/houkai-star-rail/images/b/bb/Character_Boothill_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240624231026',
                    title: 'Бутхилл'
                },
                    // Персонажи с Лофу
                {
                    id: 14,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/9/94/Персонаж_Фуга_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20241122125952&path-prefix=ru',
                    title: 'Фуга'
                },
                {
                    id: 15,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/4/48/Персонаж_Тинъюнь_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230213151518&path-prefix=ru',
                    title: 'Тинъюнь'
                },
                {
                    id: 16,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/b/bb/Персонаж_Фэйсяо_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20240901162449&path-prefix=ru',
                    title: 'Фэйсяо'
                },
                {
                    id: 17,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/f/f2/Персонаж_Моцзэ_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20240901162346&path-prefix=ru',
                    title: 'Моцзэ'
                },
                {
                    id: 18,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/8/89/Персонаж_Цзяоцю_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20240731163747&path-prefix=ru',
                    title: 'Цзяоцю'
                },
                {
                    id: 19,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/4/45/Персонаж_Юньли_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20240724180834&path-prefix=ru',
                    title: 'Юньли'
                },
                {
                    id: 20,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/7/72/Персонаж_Цзинлю_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20231014141101&path-prefix=ru',
                    title: 'Цзинлю'
                },
                {
                    id: 21,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/4/43/Персонаж_Яньцин_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230213151512&path-prefix=ru',
                    title: 'Яньцин'
                },
                {
                    id: 22,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/1/1c/Персонаж_Сушан_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230213151524&path-prefix=ru',
                    title: 'Сушан'
                },
                {
                    id: 23,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/7/76/Персонаж_Линша_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20240901162143&path-prefix=ru',
                    title: 'Линша'
                },
                {
                    id: 24,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/c/c2/Персонаж_Цзин_Юань_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230213151631&path-prefix=ru',
                    title: 'Цзин Юань'
                },
                {
                    id: 25,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/4/4b/Персонаж_Гуйнайфэнь_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20231024083539&path-prefix=ru',
                    title: 'Гуйнайфэнь'
                },
                {
                    id: 26,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/5/5e/Персонаж_Ханья_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20231119043831&path-prefix=ru',
                    title: 'Ханья'
                },
                {
                    id: 27,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/e/e4/Персонаж_Сюэи_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20231229234047&path-prefix=ru',
                    title: 'Сюэи'
                },
                {
                    id: 28,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/3/34/Персонаж_Хохо_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20231119043851&path-prefix=ru',
                    title: 'Хохо'
                },
                {
                    id: 29,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/0/0c/Персонаж_Байлу_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230213151735&path-prefix=ru',
                    title: 'Байлу'
                },
                {
                    id: 30,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/e/e7/Персонаж_Цинцюэ_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230213151504&path-prefix=ru',
                    title: 'Цинцюэ'
                },
                {
                    id: 31,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/3/31/Персонаж_Пожиратель_Луны_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230831142709&path-prefix=ru',
                    title: 'Дань Хэн: Пожиратель Луны'
                },
                {
                    id: 32,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/5/5d/Персонаж_Март_7_%28Охота%29_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20240724181023&path-prefix=ru',
                    title: 'Март 7'
                },
                {
                    id: 33,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/8/82/Персонаж_Юйкун_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230528031835&path-prefix=ru',
                    title: 'Юйкун'
                },
                {
                    id: 34,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/0/01/Персонаж_Лоча_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230213151451&path-prefix=ru',
                    title: 'Лоча'
                },
                {
                    id: 35,
                    src: 'https://static.wikia.nocookie.net/honkai-star-rail/images/9/9e/Персонаж_Фу_Сюань_Сплэш-арт.png/revision/latest/scale-to-width-down/1000?cb=20230831142933&path-prefix=ru',
                    title: 'Фу Сюань'
                }
            ]
        };
        
        this.carouselTrackRef = React.createRef();
        this.startX = 0;
        this.endX = 0;
    }
    
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    
    getCardsPerView = () => {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        return 5;
    }
    
    handleResize = () => {
        const oldCardsPerView = this.state.cardsPerView;
        const newCardsPerView = this.getCardsPerView();
        
        if (oldCardsPerView !== newCardsPerView) {
            this.setState({ 
                cardsPerView: newCardsPerView,
                currentIndex: 0 // Сбрасываем на первую страницу
            });
        }
    }
    
    nextSlide = () => {
        const maxIndex = Math.ceil(this.state.photos.length / this.state.cardsPerView) - 1;
        if (this.state.currentIndex < maxIndex) {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + 1
            }));
        }
    }
    
    prevSlide = () => {
        if (this.state.currentIndex > 0) {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex - 1
            }));
        }
    }
    
    goToSlide = (index) => {
        const maxIndex = Math.ceil(this.state.photos.length / this.state.cardsPerView) - 1;
        if (index >= 0 && index <= maxIndex) {
            this.setState({ currentIndex: index });
        }
    }
    
    handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') this.prevSlide();
        if (e.key === 'ArrowRight') this.nextSlide();
    }
    
    handleTouchStart = (e) => {
        this.startX = e.touches[0].clientX;
    }
    
    handleTouchEnd = (e) => {
        this.endX = e.changedTouches[0].clientX;
        this.handleSwipe();
    }
    
    handleSwipe = () => {
        const diff = this.startX - this.endX;
        const swipeThreshold = 50;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
    
    renderPhotoCard = (photo) => {
        return (
            <div className="photo-card" key={photo.id} data-id={photo.id}>
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <div className="photo-info">
                    <h3>{photo.title}</h3>
                </div>
            </div>
        );
    }
    
    renderIndicators = () => {
        const totalSlides = Math.ceil(this.state.photos.length / this.state.cardsPerView);
        const indicators = [];
        
        for (let i = 0; i < totalSlides; i++) {
            indicators.push(
                <button
                    key={i}
                    className={`carousel-indicator ${i === this.state.currentIndex ? 'active' : ''}`}
                    onClick={() => this.goToSlide(i)}
                    aria-label={`Перейти к слайду ${i + 1}`}
                />
            );
        }
        
        return indicators;
    }
    
    render() {
        const { currentIndex, cardsPerView, photos } = this.state;
        const cardWidth = 100 / cardsPerView;
        const translateX = -currentIndex * cardWidth * cardsPerView;
        const maxIndex = Math.ceil(photos.length / cardsPerView) - 1;
        
        return (
            <div className="photo-carousel-container">
                <div className="carousel-wrapper">
                    <button 
                        className="carousel-btn carousel-btn-prev"
                        onClick={this.prevSlide}
                        disabled={currentIndex === 0}
                        aria-label="Предыдущий слайд"
                    >
                        ‹
                    </button>
                    
                    <div className="carousel-viewport">
                        <div 
                            className="carousel-track"
                            ref={this.carouselTrackRef}
                            style={{ 
                                transform: `translateX(${translateX}%)`,
                                gridTemplateColumns: `repeat(${photos.length}, calc(${cardWidth}% - 10px))`
                            }}
                            onTouchStart={this.handleTouchStart}
                            onTouchEnd={this.handleTouchEnd}
                        >
                            {photos.map(this.renderPhotoCard)}
                        </div>
                    </div>
                    
                    <button 
                        className="carousel-btn carousel-btn-next"
                        onClick={this.nextSlide}
                        disabled={currentIndex >= maxIndex}
                        aria-label="Следующий слайд"
                    >
                        ›
                    </button>
                </div>
                
                <div className="carousel-nav">
                    {this.renderIndicators()}
                </div>
            </div>
        );
    }
}

export default PhotoCarousel;