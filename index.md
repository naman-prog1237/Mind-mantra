# MindMantra - Complete HTML Code

Save this as `index.html` in your folder:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MindMantra - Mental Health & Wellbeing</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <div class="logo">
                <h1>🧘 MindMantra</h1>
                <p>Your Mental Health Companion</p>
            </div>
            <div class="header-actions">
                <button class="theme-toggle btn--secondary" id="themeToggle">🌙</button>
                <div class="user-profile">
                    <span class="user-name">Welcome, Alex</span>
                    <div class="user-avatar">A</div>
                </div>
            </div>
        </div>
    </header>

    <div class="app-container">
        <!-- Sidebar Navigation -->
        <nav class="sidebar">
            <ul class="nav-menu">
                <li class="nav-item">
                    <button class="nav-link active" data-section="dashboard">
                        <span class="nav-icon">🏠</span>
                        <span class="nav-text">Dashboard</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-section="mood-checkin">
                        <span class="nav-icon">😊</span>
                        <span class="nav-text">Mood Check-in</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-section="cbt-tools">
                        <span class="nav-icon">🧠</span>
                        <span class="nav-text">CBT Tools</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-section="ai-companion">
                        <span class="nav-icon">🤖</span>
                        <span class="nav-text">AI Companion</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-section="meditation">
                        <span class="nav-icon">🧘</span>
                        <span class="nav-text">Meditation</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-section="mental-fitness">
                        <span class="nav-icon">💪</span>
                        <span class="nav-text">Mental Fitness</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-section="progress">
                        <span class="nav-icon">📊</span>
                        <span class="nav-text">Progress</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-section="resources">
                        <span class="nav-icon">📚</span>
                        <span class="nav-text">Resources</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-section="login-certification">
                        <span class="nav-icon">👤</span>
                        <span class="nav-text">Login & Certification</span>
                    </button>
                </li>
            </ul>
        </nav>

        <!-- Main Content Area -->
        <main class="main-content">
            <!-- Dashboard Section -->
            <section id="dashboard" class="content-section active">
                <h2>Your Mental Wellness Dashboard</h2>
                <div class="dashboard-grid">
                    <div class="welcome-card">
                        <h3>Good Evening, Alex! 👋</h3>
                        <p>You're doing great! Here's your personalized mental health plan for today:</p>
                        <div class="stats-row">
                            <div class="stat-item">
                                <span class="stat-emoji">🔥</span>
                                <span class="stat-label">7 Day Streak</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-emoji">⭐</span>
                                <span class="stat-label">1250 XP Points</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-emoji">🏆</span>
                                <span class="stat-label">12 Achievements</span>
                            </div>
                        </div>
                        <div class="daily-affirmation">
                            <h4>Daily Affirmation</h4>
                            <p>"You are stronger than you think, braver than you feel, and more loved than you know."</p>
                        </div>
                    </div>
                    
                    <div class="quest-card">
                        <h4>Win the Day</h4>
                        <div class="quest-item">
                            <h5>Today's Quest:</h5>
                            <p>Complete a 5-minute mindfulness session</p>
                            <button class="btn--primary small" onclick="app.completeQuest()">Start Quest</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mood Check-in Section -->
            <section id="mood-checkin" class="content-section">
                <h2>How are you feeling today?</h2>
                <div class="mood-selector">
                    <button class="mood-btn" data-mood="great">
                        <span class="mood-emoji">😄</span>
                        <span class="mood-label">Great</span>
                    </button>
                    <button class="mood-btn" data-mood="good">
                        <span class="mood-emoji">😊</span>
                        <span class="mood-label">Good</span>
                    </button>
                    <button class="mood-btn" data-mood="okay">
                        <span class="mood-emoji">😐</span>
                        <span class="mood-label">Okay</span>
                    </button>
                    <button class="mood-btn" data-mood="low">
                        <span class="mood-emoji">😔</span>
                        <span class="mood-label">Low</span>
                    </button>
                    <button class="mood-btn" data-mood="struggling">
                        <span class="mood-emoji">😞</span>
                        <span class="mood-label">Struggling</span>
                    </button>
                </div>
                <div id="mood-feedback" class="mood-feedback"></div>
            </section>

            <!-- CBT Tools Section -->
            <section id="cbt-tools" class="content-section">
                <h2>CBT Tools</h2>
                <div class="cbt-tools-grid">
                    <div class="tool-card">
                        <h3>🗓️ Thought Diary</h3>
                        <p>Work through your thoughts with our 9-step CBT process</p>
                        <button class="btn--primary">Start Thought Diary</button>
                    </div>
                    <div class="tool-card">
                        <h3>🎯 Coping Cards</h3>
                        <p>Create and review personalized coping strategies</p>
                        <button class="btn--secondary">Create Coping Card</button>
                    </div>
                </div>
            </section>

            <!-- AI Companion Section -->
            <section id="ai-companion" class="content-section">
                <h2>AI Companion Chat</h2>
                <div class="chat-container">
                    <div class="chat-header">
                        <h3>💬 ChatMind AI</h3>
                        <p>Your 24/7 supportive companion</p>
                    </div>
                    <div class="chat-messages" id="chatMessages">
                        <div class="message ai-message">
                            <div class="message-content">
                                Hello! I'm here to support you. How are you feeling today?
                            </div>
                        </div>
                    </div>
                    <div class="chat-input">
                        <input type="text" id="chatInput" placeholder="Type your message...">
                        <button onclick="app.sendMessage()">Send</button>
                    </div>
                </div>
            </section>

            <!-- Meditation Section -->
            <section id="meditation" class="content-section">
                <h2>Meditation & Mindfulness</h2>
                <div class="meditation-grid">
                    <div class="meditation-card">
                        <h3>🧘‍♀️ Guided Meditation</h3>
                        <p>Choose from 3-30 minute sessions</p>
                        <select>
                            <option>3-minute breathing</option>
                            <option>5-minute body scan</option>
                            <option>10-minute mindfulness</option>
                        </select>
                        <button class="btn--primary">Start Session</button>
                    </div>
                    <div class="meditation-card">
                        <h3>😴 Sleep Stories</h3>
                        <p>Relaxing stories for better sleep</p>
                        <button class="btn--secondary">Browse Stories</button>
                    </div>
                </div>
            </section>

            <!-- Mental Fitness Section -->
            <section id="mental-fitness" class="content-section">
                <h2>Mental Fitness Training</h2>
                <div class="fitness-skills">
                    <div class="skill-card">
                        <h4>🎯 Live Mindfully</h4>
                        <p>Skills to help be present and pay attention</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: 60%"></div>
                        </div>
                    </div>
                    <div class="skill-card">
                        <h4>🤔 Flexible Thinking</h4>
                        <p>Skills for problem-solving and creativity</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: 45%"></div>
                        </div>
                    </div>
                    <div class="skill-card">
                        <h4>🤝 Grow Connections</h4>
                        <p>Skills for building relationships</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: 70%"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Progress Section -->
            <section id="progress" class="content-section">
                <h2>Your Progress</h2>
                <div class="progress-dashboard">
                    <div class="progress-card">
                        <h3>📈 Mood Trends</h3>
                        <p>Your mood has been trending upward this week!</p>
                        <div class="chart-placeholder">📊 Chart visualization would go here</div>
                    </div>
                    <div class="progress-card">
                        <h3>🎯 Goals Progress</h3>
                        <p>You've completed 4 out of 7 weekly goals</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: 57%"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Resources Section -->
            <section id="resources" class="content-section">
                <h2>Resources & Support</h2>
                <div class="resources-grid">
                    <div class="resource-card">
                        <h3>🆘 Crisis Support</h3>
                        <p><strong>National Suicide Prevention Lifeline:</strong> 988</p>
                        <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                        <button class="btn--primary">Get Help Now</button>
                    </div>
                    <div class="resource-card">
                        <h3>📖 Learning Center</h3>
                        <p>Educational content about mental health</p>
                        <button class="btn--secondary">Browse Articles</button>
                    </div>
                </div>
            </section>

            <!-- NEW Login & Certification Section -->
            <section id="login-certification" class="content-section">
                <h2>Login & Certification</h2>
                <div class="login-cert-container">
                    <div class="login-section">
                        <h3>🔐 User Login</h3>
                        <form id="loginForm">
                            <label for="userRole">Select Your Role:</label>
                            <select id="userRole" name="userRole">
                                <option value="student">🎓 Student</option>
                                <option value="counsellor">👨‍⚕️ Counsellor</option>
                            </select>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                            <input type="password" id="password" name="password" placeholder="Enter your password" required />
                            <button type="submit" class="btn--primary">Login</button>
                            <p class="signup-link">Don't have an account? <a href="#" id="signupLink">Sign up here</a></p>
                        </form>
                    </div>
                    
                    <div class="cert-section">
                        <h3>🏆 Free Certification</h3>
                        <p>Complete our comprehensive mental health courses and earn internationally recognized certifications.</p>
                        <div class="cert-benefits">
                            <ul>
                                <li>✅ Mental Health First Aid (4 hours)</li>
                                <li>✅ CBT Fundamentals (6 hours)</li>
                                <li>✅ Mindfulness Practitioner (8 hours)</li>
                                <li>✅ Crisis Intervention Basics (3 hours)</li>
                            </ul>
                        </div>
                        <button id="goToCourses" class="btn--secondary">Browse Free Courses</button>
                        <button id="viewCertificates" class="btn--outline">View My Certificates</button>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <script src="app.js"></script>
</body>
</html>
```