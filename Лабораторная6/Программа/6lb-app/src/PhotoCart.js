function PhotoCart(){
    return(
        <div className="cards-container">
        {/* Левая стрелка */}
       <div className="arrow">‹</div>

        <div className="cards-wrapper">
            {/* Карточка 1 */}
            <div className="card">
            <div className="card-image">
                <img 
                src="https://static.wikia.nocookie.net/honkai-star-rail/images/b/b0/%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6_%D0%A2%D0%B5%D0%BC%D0%B5%D0%BD%D1%8C_%D0%A1%D0%BF%D0%BB%D1%8D%D1%88-%D0%B0%D1%80%D1%82.png/revision/latest/scale-to-width-down/1000?cb=20250912143857&path-prefix=ru" 
                alt="Темень" 
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">Темень</h3>
            </div>
            </div>

            {/* Карточка 2 */}
            <div className="card">
            <div className="card-image">
                <img 
                src="https://static.wikia.nocookie.net/honkai-star-rail/images/4/4e/%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6_%D0%9A%D0%B8%D1%80%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%BB%D1%8D%D1%88-%D0%B0%D1%80%D1%82.png/revision/latest/scale-to-width-down/1000?cb=20250911055101&path-prefix=ru" 
                alt="Кирена" 
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">Кирена</h3>
            </div>
            </div>

            {/* Карточка 3 */}
            <div className="card">
            <div className="card-image">
                <img 
                src="'https://static.wikia.nocookie.net/honkai-star-rail/images/1/19/%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6_%D0%94%D0%B0%D0%BD%D1%8C_%D0%A5%D1%8D%D0%BD_%D0%9E%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%9F%D1%83%D1%81%D1%82%D0%BE%D1%88%D0%B5%D0%B9_%D0%A1%D0%BF%D0%BB%D1%8D%D1%88-%D0%B0%D1%80%D1%82.png/revision/latest/scale-to-width-down/1000?cb=20250912143840&path-prefix=ru" 
                alt="Дань Хэн: Освободитель Пустошей" 
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">Дань Хэн: Освободитель Пустошей</h3>
            </div>
            </div>

            {/* Карточка 4 */}
            <div className="card">
            <div className="card-image">
                <img 
                src="https://static.wikia.nocookie.net/houkai-star-rail/images/2/2d/Character_Gallagher_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327022011" 
                alt="Галлахер" 
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">Галлахер</h3>
            </div>
            </div>

            {/* Карточка 5 */}
            <div className="card">
            <div className="card-image">
                <img 
                src="https://static.wikia.nocookie.net/houkai-star-rail/images/5/5c/Character_Misha_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240206022717" 
                alt="Миша" 
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">Миша</h3>
            </div>
            </div>
        </div>

        {/* Правая стрелка */}
        <div className="arrow">›</div>
        </div>
    )
}

export default PhotoCart ;