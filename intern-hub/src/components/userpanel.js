function UserPanel() {
    return (
        <div className="userPanel-container">
            <nav className="userPanel-navLeft">
                <div className="navLogo">
                    <p>InternHub</p>
                </div>
                <ul className="navLeftContent">
                    <li className="active">Panel Użytkownika</li>
                    <li>Oferty Pracy</li>
                    <li>Moje aplikacje</li>
                    <li>Kursy</li>
                    <li>Wiadomości</li>
                    <li>Poznaj organizacje</li>
                    <li>Ustawienia</li>
                    <li>Centrum Pomocy</li>
                </ul>
            </nav>

            <div className="userPanel-mainContent">
                <header className="mainContent-header">
                    <div className="searchBar">
                        <i className="searchHere" />
                        <input type="text" placeholder="Wyszukaj" />
                    </div>
                    <div className="userProfile">
                        <span className="datePicker">
                            <i className="calendar1" />
                            Ten miesiąc
                            <i className="calendar2" />
                        </span>
                        <span className="userName">Julia Wachowska</span>
                        <div className="userAvatar">Tu będzie awatar</div>
                    </div>
                </header>

                <div className="dashboard-sections">
                    <section className="section-panel-heading">
                        <h1>Panel użytkownika</h1>
                        <p>Poznaj efekty twoich aplikacji</p>
                    </section>

                    <section className="section-stats-offers">
                        <div className="card app-stats">
                            <div className="app-icons">
                                <div className="icon-wrapper blue">
                                    
                                </div>
                                <div className="icon-wrapper purple">
                                  
                                </div>
                            </div>
                            <div className="application-numbers">
                                <p className="number">27</p>
                                <p className="label">Aplikacje w toku</p>
                            </div>
                            <div className="application-numbers">
                                <p className="number">7</p>
                                <p className="label">Rozmowy</p>
                            </div>
                        </div>

                        <div className="application-statistics">
                            <h2>Statystyki aplikacji</h2>
                            <div className="chart-container">
                                <div className="donut-chart-placeholder">
                                    <div className="chart-precentage">25%</div>
                                </div>
                            </div>
                            <button className="all-application-btn">Wszystkie aplikacje</button>
                        </div>

                        <div className="card new-offers">
                            <h2>Nowe oferty</h2>
                            <div className="offer-list">
                                <div className="offer-item">
                                    <p className="job-title">Software Engineer Intern</p>
                                    <p className="company-location">Amazon | Full-time | Wrocław</p>
                                </div>
                                <div className="offer-item">
                                    <p className="job-title">STEP Intern</p>
                                    <p className="company-location">Google | Part-time | Warszawa</p>
                                </div>
                                <div className="offer-item">
                                    <p className="job-title">IT Helpdesk Intern</p>
                                    <p className="company-location">Texus | Full-time | Kraków</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-course-progress">
                        <div className="card course-progress">
                            <h2>Postęp kursów</h2>
                            <div className="progress-item">
                                <p className="course-name">DevOps od podstaw</p>
                                <div className="progress-bar-container">
                                    <div className="progress-bar fill-95" />
                                </div>
                                <span className="progress-percentage">95%</span>
                            </div>
                            <div className="progress-item">
                                <p className="course-name">UX Design</p>
                                <div className="progress-bar-container">
                                    <div className="progress-bar fill-50" />
                                </div>
                                <span className="progress-percentage">50%</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UserPanel;
