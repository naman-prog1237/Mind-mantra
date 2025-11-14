// MindMantra Premium Dark Theme App JavaScript - Fixed Version

class MindMantraApp {
    constructor() {
        this.currentUser = null;
        this.userStats = {
            level: 12,
            xp: 2350,
            streak: 7,
            completedQuests: 0,
            achievements: 18,
            sessionsCompleted: 45,
            moodScore: 8.2
        };
        this.darkTheme = {
            colors: {
                primary: '#667eea',
                accent: '#f093fb',
                success: '#4ecdc4',
                warning: '#ffe066',
                error: '#ff6b6b'
            },
            glowEffects: true,
            particles: true
        };
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupMoodCheckin();
        this.setupChatInterface();
        this.setupMeditationTimer();
        this.setupLoginForm();
        this.setupCertifications();
        this.setupGamification();
        this.setupNotifications();
        this.setupMoodCalendar();
        this.generateDailyQuote();
        this.initializeDashboardStats();
        this.addDarkThemeEffects();
    }

    // Initialize dashboard stats with dark theme data
    initializeDashboardStats() {
        const currentStreak = document.getElementById('current-streak');
        const totalXP = document.getElementById('total-xp');
        const userLevel = document.getElementById('user-level');
        
        if (currentStreak) currentStreak.textContent = this.userStats.streak;
        if (totalXP) totalXP.textContent = this.userStats.xp.toLocaleString();
        if (userLevel) userLevel.textContent = this.userStats.level;
        
        // Update hero profile stats
        const heroLevel = document.getElementById('hero-level');
        const heroXP = document.getElementById('hero-xp');
        const heroStreak = document.getElementById('hero-streak');
        
        if (heroLevel) heroLevel.textContent = this.userStats.level;
        if (heroXP) heroXP.textContent = this.userStats.xp.toLocaleString();
        if (heroStreak) heroStreak.textContent = `${this.userStats.streak} days`;
    }

    // Add dark theme specific effects
    addDarkThemeEffects() {
        // Add particle effect on click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn') || e.target.classList.contains('mood-btn')) {
                this.createClickEffect(e.pageX, e.pageY);
            }
        });
    }

    // Create click effect with particles
    createClickEffect(x, y) {
        const colors = ['#667eea', '#f093fb', '#4ecdc4', '#ffe066'];
        
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.boxShadow = `0 0 6px currentColor`;
            
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 6;
            const velocity = 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let opacity = 1;
            let px = x;
            let py = y;
            
            const animate = () => {
                opacity -= 0.02;
                px += vx * 0.016;
                py += vy * 0.016 + 2; // gravity
                
                particle.style.left = px + 'px';
                particle.style.top = py + 'px';
                particle.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    if (document.body.contains(particle)) {
                        document.body.removeChild(particle);
                    }
                }
            };
            
            requestAnimationFrame(animate);
        }
    }

    // Fixed Navigation System
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const contentSections = document.querySelectorAll('.content-section');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Remove active class from all links and sections
                navLinks.forEach(l => l.classList.remove('active'));
                contentSections.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Show corresponding section
                const sectionId = link.dataset.section;
                const targetSection = document.getElementById(sectionId);
                
                if (targetSection) {
                    targetSection.classList.add('active');
                    targetSection.style.animation = 'fadeInUp 0.5s ease-out';
                    this.showNotification(`Navigating to ${link.textContent.trim()}`, 'info');
                } else {
                    console.error('Section not found:', sectionId);
                }
            });
        });

        // Ensure dashboard is active by default
        setTimeout(() => {
            const dashboardLink = document.querySelector('[data-section="dashboard"]');
            const dashboardSection = document.getElementById('dashboard');
            if (dashboardLink && dashboardSection && !dashboardSection.classList.contains('active')) {
                dashboardLink.classList.add('active');
                dashboardSection.classList.add('active');
            }
        }, 100);
    }

    // Enhanced Mood Check-in System
    setupMoodCheckin() {
        const moodButtons = document.querySelectorAll('.mood-btn');
        const moodFeedback = document.getElementById('mood-feedback');

        const moodResponses = {
            great: "✨ Fantastic! You're radiating positive energy today! Your mood score: 9/10",
            good: "😊 Great to hear you're doing well! Keep riding this positive wave! Mood score: 7/10", 
            neutral: "🌟 That's perfectly okay! Every day is different. Let's find ways to boost your mood! Mood score: 5/10",
            down: "💙 I'm here for you. You're not alone in this. Consider some mindfulness exercises. Mood score: 3/10",
            stressed: "🌿 Take a deep breath. You've got this! Try some relaxation techniques. Mood score: 2/10"
        };

        moodButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Remove selected class from all buttons
                moodButtons.forEach(btn => {
                    btn.classList.remove('selected');
                    btn.style.transform = 'scale(1)';
                    btn.style.boxShadow = '';
                });
                
                // Add selected class with enhanced glow effect
                button.classList.add('selected');
                button.style.transform = 'scale(1.2)';
                button.style.boxShadow = '0 0 25px rgba(102, 126, 234, 0.8)';
                
                // Show enhanced feedback
                const mood = button.dataset.mood;
                if (moodFeedback) {
                    moodFeedback.textContent = moodResponses[mood];
                    moodFeedback.style.display = 'block';
                    moodFeedback.style.textShadow = '0 0 10px rgba(102, 126, 234, 0.5)';
                }
                
                // Update user stats
                this.updateMoodStreak();
                this.showNotification('Mood logged successfully! Premium insights unlocked! ✨', 'success');
                this.awardXP(10);
            });
        });
    }

    updateMoodStreak() {
        this.userStats.streak++;
        const streakElements = document.querySelectorAll('#current-streak, #hero-streak');
        streakElements.forEach(el => {
            if (el && el.id === 'hero-streak') {
                el.textContent = `${this.userStats.streak} days`;
            } else if (el) {
                el.textContent = this.userStats.streak;
            }
        });
    }

    // Enhanced Chat Interface
    setupChatInterface() {
        const chatInput = document.getElementById('chat-input');
        const sendButton = document.getElementById('send-message');
        const starterButtons = document.querySelectorAll('.starter-btn');

        const sendMessage = () => {
            const message = chatInput.value.trim();
            if (message) {
                this.addMessageToChat(message, 'user');
                chatInput.value = '';
                
                // Show typing indicator
                this.showTypingIndicator();
                
                // Simulate AI response
                setTimeout(() => {
                    this.hideTypingIndicator();
                    const aiResponse = this.generateEnhancedAIResponse(message);
                    this.addMessageToChat(aiResponse, 'ai');
                    this.awardXP(5);
                }, 1500);
            }
        };

        if (sendButton) {
            sendButton.addEventListener('click', sendMessage);
        }
        
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }

        // Fixed starter button functionality
        starterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const message = button.textContent.trim();
                this.addMessageToChat(message, 'user');
                
                this.showTypingIndicator();
                setTimeout(() => {
                    this.hideTypingIndicator();
                    const aiResponse = this.generateEnhancedAIResponse(message);
                    this.addMessageToChat(aiResponse, 'ai');
                    this.awardXP(5);
                }, 1500);
            });
        });
    }

    showTypingIndicator() {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <p>✨ ChatMind AI is thinking...</p>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    addMessageToChat(message, sender) {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        messageDiv.innerHTML = `
            <div class="message-content" style="animation: fadeInUp 0.3s ease-out;">
                <p>${message}</p>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    generateEnhancedAIResponse(userMessage) {
        const enhancedResponses = {
            'anxious': "🌟 I understand you're feeling anxious. Here's a premium technique: Try the 4-7-8 breathing method combined with progressive muscle relaxation. I can guide you through a personalized session based on your anxiety patterns. Would you like me to create a custom coping strategy for you?",
            'sleep': "🌙 Sleep troubles can be challenging, but we have premium solutions! Based on your profile, I recommend our advanced sleep meditation series with binaural beats. Also, your sleep hygiene score suggests optimizing your bedtime routine. Shall I create a personalized sleep plan for you?",
            'overwhelmed': "💎 Feeling overwhelmed shows self-awareness - that's a strength! Let's use our premium mind-mapping technique to break things down. I can analyze your stress patterns and suggest the top 3 most effective coping strategies for your personality type. What's the biggest challenge right now?",
            'motivation': "🚀 Your motivation matters, and I'm here to amplify it! Based on your progress data, you've grown 15% in resilience this month. Remember your 'why' - you started this journey for important reasons. Let's set a micro-goal for the next hour that aligns with your values. What would make you feel accomplished today?"
        };

        // Advanced keyword matching with context
        for (const [key, response] of Object.entries(enhancedResponses)) {
            if (userMessage.toLowerCase().includes(key)) {
                return response;
            }
        }

        // Default premium response
        const premiumResponses = [
            "✨ Thank you for sharing that with me. I'm analyzing your message using advanced emotional intelligence algorithms. Based on your communication patterns, I can see you're being very thoughtful. How would you like to explore this further?",
            "🧠 I appreciate your openness. Using our premium sentiment analysis, I can detect the underlying emotions in your message. You're demonstrating real courage by discussing this. What support would be most helpful right now?",
            "💎 Your message shows great self-reflection. I'm here to provide personalized, premium support tailored to your unique journey. Every step forward, no matter how small, is meaningful progress. What feels most important to focus on?",
            "🌟 I can see the strength in your words. Premium AI insights suggest you're processing this in a healthy way. Remember, growth often feels uncomfortable - that's a sign you're expanding your comfort zone. How can I best support you through this?"
        ];

        return premiumResponses[Math.floor(Math.random() * premiumResponses.length)];
    }

    // Enhanced Meditation Timer
    setupMeditationTimer() {
        const timerSlider = document.getElementById('timer-duration');
        const timerDisplay = document.getElementById('timer-minutes');
        const startButton = document.getElementById('start-timer');
        const playButtons = document.querySelectorAll('.play-meditation');

        // Update display when slider changes
        if (timerSlider && timerDisplay) {
            timerSlider.addEventListener('input', () => {
                timerDisplay.textContent = timerSlider.value;
            });
        }

        // Enhanced timer functionality
        if (startButton) {
            startButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const duration = parseInt(timerSlider.value);
                this.startEnhancedMeditationTimer(duration);
            });
        }

        // Premium meditation sessions
        playButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const duration = parseInt(button.dataset.duration);
                this.startEnhancedMeditationTimer(duration);
                this.showNotification(`🧘 Starting premium ${duration}-minute session with binaural beats`, 'success');
            });
        });
    }

    startEnhancedMeditationTimer(minutes) {
        let timeLeft = minutes * 60;
        const startButton = document.getElementById('start-timer');
        const timerDisplay = document.getElementById('timer-minutes');
        
        if (startButton) {
            startButton.textContent = '🧘 Meditating...';
            startButton.disabled = true;
            startButton.style.background = 'var(--gradient-success)';
            startButton.style.boxShadow = '0 0 20px rgba(78, 205, 196, 0.5)';
        }

        const timer = setInterval(() => {
            const minutesLeft = Math.floor(timeLeft / 60);
            const secondsLeft = timeLeft % 60;
            if (timerDisplay) {
                timerDisplay.textContent = `${minutesLeft}:${secondsLeft.toString().padStart(2, '0')}`;
                timerDisplay.style.color = '#4ecdc4';
                timerDisplay.style.textShadow = '0 0 10px rgba(78, 205, 196, 0.5)';
            }
            
            timeLeft--;
            
            if (timeLeft < 0) {
                clearInterval(timer);
                if (startButton) {
                    startButton.textContent = 'Start Timer';
                    startButton.disabled = false;
                    startButton.style.background = '';
                    startButton.style.boxShadow = '';
                }
                if (timerDisplay && document.getElementById('timer-duration')) {
                    timerDisplay.textContent = document.getElementById('timer-duration').value;
                    timerDisplay.style.color = '';
                    timerDisplay.style.textShadow = '';
                }
                this.showNotification('🎉 Meditation complete! Premium session data saved. Well done! ✨', 'success');
                this.awardXP(25);
                this.userStats.sessionsCompleted++;
            }
        }, 1000);
    }

    // Enhanced Login System
    setupLoginForm() {
        const loginForm = document.getElementById('login-form');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const role = document.getElementById('user-role').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                // Enhanced validation
                if (!role || !email || !password) {
                    this.showLoginMessage('⚠️ Please fill in all fields to access premium features.', 'error');
                    return;
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    this.showLoginMessage('⚠️ Please enter a valid email address for premium access.', 'error');
                    return;
                }

                this.performEnhancedLogin(role, email, password);
            });
        }

        const signupTrigger = document.querySelector('.signup-trigger');
        if (signupTrigger) {
            signupTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.showNotification('🚀 Premium registration portal opening...', 'info');
            });
        }
    }

    performEnhancedLogin(role, email, password) {
        this.showLoginMessage('🔐 Authenticating premium access...', 'info');
        
        setTimeout(() => {
            this.currentUser = {
                email: email,
                role: role,
                name: email.split('@')[0],
                premium: true,
                joinDate: new Date().toLocaleDateString()
            };

            this.showLoginMessage(`✨ Successfully logged in as ${role}! Premium features unlocked. Welcome back, ${this.currentUser.name}!`, 'success');
            this.showNotification(`🎉 Welcome back, ${this.currentUser.name}! Premium dashboard activated.`, 'success');
            
            if (document.getElementById('login-form')) {
                document.getElementById('login-form').reset();
            }
        }, 2000);
    }

    showLoginMessage(message, type) {
        const messageElement = document.getElementById('login-message');
        if (messageElement) {
            messageElement.textContent = message;
            messageElement.className = `login-message ${type}`;
            messageElement.style.textShadow = type === 'success' ? '0 0 10px rgba(78, 205, 196, 0.5)' : '';
        }
    }

    // Enhanced Certification System
    setupCertifications() {
        const certButtons = document.querySelectorAll('.cert-btn');
        const browseCoursesBtn = document.querySelector('.browse-courses-btn');
        const viewCertificatesBtn = document.querySelector('.view-certificates-btn');

        certButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const certItem = button.closest('.cert-item');
                const certName = certItem.querySelector('h4').textContent;
                
                if (this.currentUser) {
                    this.enrollInPremiumCourse(certName);
                } else {
                    this.showNotification('🔐 Please log in to access premium certifications', 'warning');
                }
            });
        });

        if (browseCoursesBtn) {
            browseCoursesBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showNotification('📚 Opening premium course catalog with 50+ advanced mental health courses...', 'info');
            });
        }

        if (viewCertificatesBtn) {
            viewCertificatesBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.currentUser) {
                    this.showNotification(`🏆 Displaying premium certificates for ${this.currentUser.name}...`, 'info');
                } else {
                    this.showNotification('🔐 Please log in to view your premium certificates', 'warning');
                }
            });
        }
    }

    enrollInPremiumCourse(courseName) {
        this.showNotification(`✨ Successfully enrolled in "${courseName}"! Premium materials and AI tutoring activated. Check your email for advanced course content.`, 'success');
        this.awardXP(75);
    }

    // Enhanced Gamification System
    setupGamification() {
        const completeQuestBtn = document.querySelector('.complete-quest');
        const powerupButtons = document.querySelectorAll('.powerup-btn');
        const skillButtons = document.querySelectorAll('.practice-skill');

        if (completeQuestBtn) {
            completeQuestBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.completePremiumQuest();
            });
        }

        powerupButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const powerup = button.dataset.powerup;
                this.useEnhancedPowerUp(powerup);
            });
        });

        skillButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const skill = button.dataset.skill;
                this.practiceEnhancedSkill(skill);
            });
        });

        this.setupToolButtons();
    }

    setupToolButtons() {
        const thoughtDiaryBtn = document.querySelector('.open-thought-diary');
        const copingCardsBtn = document.querySelector('.open-coping-cards');
        const moodTrackerBtn = document.querySelector('.open-mood-tracker');
        
        if (thoughtDiaryBtn) {
            thoughtDiaryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showNotification('🧠 Opening premium Thought Diary with AI insights - Advanced 9-step CBT process with personalized guidance...', 'info');
                this.awardXP(20);
            });
        }

        if (copingCardsBtn) {
            copingCardsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showNotification('🎯 Opening premium Coping Cards with AI recommendations - Build personalized strategies with advanced analytics...', 'info');
                this.awardXP(20);
            });
        }

        if (moodTrackerBtn) {
            moodTrackerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showNotification('📊 Opening premium Mood Tracker Pro with AI pattern analysis and predictive insights...', 'info');
                this.awardXP(20);
            });
        }
    }

    completePremiumQuest() {
        const progressBar = document.querySelector('.progress-fill');
        if (!progressBar) return;
        
        const currentWidth = parseInt(progressBar.style.width || '60');
        const newWidth = Math.min(currentWidth + 25, 100);
        
        progressBar.style.width = `${newWidth}%`;
        progressBar.style.boxShadow = '0 0 15px rgba(102, 126, 234, 0.6)';
        
        if (newWidth >= 100) {
            this.showNotification('🎉 Premium Quest completed! You earned 25 XP and unlocked new achievements! ✨', 'success');
            this.awardXP(25);
            
            setTimeout(() => {
                progressBar.style.width = '0%';
                this.userStats.completedQuests++;
            }, 3000);
        } else {
            this.showNotification('⭐ Excellent progress! Premium rewards await! Keep going!', 'success');
        }
    }

    useEnhancedPowerUp(powerupType) {
        const enhancedPowerupMessages = {
            breathing: "🫁 Premium Breathing Technique: Try the 4-7-8 method with guided visualization. Breathe in light, exhale tension. AI biofeedback activated!",
            gratitude: "🙏 Premium Gratitude Practice: Reflect on 3 things you're grateful for and why. Feel the neural pathways strengthening. Positivity boost activated!",
            stretch: "🤸 Premium Movement Break: Engage in mindful stretching with breath awareness. Your body is your temple - honor it with premium care!"
        };

        this.showNotification(enhancedPowerupMessages[powerupType], 'success');
        this.awardXP(10);
    }

    practiceEnhancedSkill(skillType) {
        const enhancedSkillMessages = {
            mindfully: "🧘 Premium Mindfulness: Engage all senses in this moment. Notice 5 things you can see, 4 you can hear, 3 you can touch, 2 you can smell, 1 you can taste. AI mindfulness coach activated.",
            thinking: "🤔 Premium Cognitive Flexibility: Challenge your assumptions! What's one completely different perspective on your current situation? Neural plasticity in action!",
            connections: "🤝 Premium Social Wellness: Reach out with intention today. Share something meaningful or ask a thoughtful question. Quality connections heal.",
            purpose: "🎯 Premium Purpose Alignment: Identify one core value that's important to you. How can you honor it in the next hour? Live with premium intention.",
            recharge: "💪 Premium Body-Mind Integration: Your body holds wisdom. Take 3 conscious breaths, stretch mindfully, and hydrate with awareness."
        };

        this.showNotification(enhancedSkillMessages[skillType], 'info');
        this.awardXP(15);
    }

    awardXP(amount) {
        this.userStats.xp += amount;
        
        // Update all XP displays with glow effect
        const xpElements = document.querySelectorAll('#total-xp, #hero-xp');
        xpElements.forEach(element => {
            if (element) {
                element.textContent = this.userStats.xp.toLocaleString();
                element.style.textShadow = '0 0 15px rgba(102, 126, 234, 0.8)';
                element.style.transform = 'scale(1.1)';
                
                setTimeout(() => {
                    element.style.textShadow = '0 0 10px rgba(102, 126, 234, 0.3)';
                    element.style.transform = 'scale(1)';
                }, 1000);
            }
        });
        
        // Check for level up
        const newLevel = Math.floor(this.userStats.xp / 200) + 1;
        if (newLevel > this.userStats.level) {
            this.userStats.level = newLevel;
            this.levelUp();
        }
    }

    levelUp() {
        const levelElements = document.querySelectorAll('#user-level, #hero-level');
        levelElements.forEach(element => {
            if (element) {
                element.textContent = this.userStats.level;
            }
        });
        
        this.showNotification(`🎉 LEVEL UP! You reached Level ${this.userStats.level}! Premium rewards unlocked! ✨`, 'success');
    }

    // Enhanced Notification System
    setupNotifications() {
        const closeBtn = document.getElementById('notification-close');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.hideNotification();
            });
        }

        this.notificationTimeout = null;
    }

    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notification-text');
        
        if (!notification || !notificationText) return;
        
        notificationText.textContent = message;
        notification.className = `notification ${type} show`;
        
        // Add premium glow effect based on type
        const glowColors = {
            success: '0 0 20px rgba(78, 205, 196, 0.6)',
            error: '0 0 20px rgba(255, 107, 107, 0.6)',
            warning: '0 0 20px rgba(255, 224, 102, 0.6)',
            info: '0 0 20px rgba(102, 126, 234, 0.6)'
        };
        notification.style.boxShadow = glowColors[type] || glowColors.info;
        
        if (this.notificationTimeout) {
            clearTimeout(this.notificationTimeout);
        }
        
        this.notificationTimeout = setTimeout(() => {
            this.hideNotification();
        }, 6000);
    }

    hideNotification() {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.classList.remove('show');
            notification.style.boxShadow = '';
        }
    }

    // Enhanced Mood Calendar
    setupMoodCalendar() {
        const calendar = document.getElementById('mood-calendar');
        if (!calendar) return;
        
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();
        
        calendar.innerHTML = '';
        
        // Add premium day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const header = document.createElement('div');
            header.className = 'calendar-header';
            header.textContent = day;
            header.style.cssText = `
                font-weight: bold;
                text-align: center;
                padding: 8px;
                font-size: 12px;
                color: #b0b0b0;
            `;
            calendar.appendChild(header);
        });
        
        // Add empty cells
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendar.appendChild(emptyDay);
        }
        
        // Add days with premium mood data
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            // Premium mood visualization
            if (Math.random() > 0.5) {
                dayElement.classList.add('has-mood');
                const moodColors = ['#4ecdc4', '#667eea', '#f093fb', '#ffe066'];
                const randomColor = moodColors[Math.floor(Math.random() * moodColors.length)];
                dayElement.style.backgroundColor = randomColor + '40';
                dayElement.style.border = `1px solid ${randomColor}`;
                dayElement.style.boxShadow = `0 0 10px ${randomColor}40`;
                
                const moods = ['😄', '😊', '😐', '😔', '😰'];
                const randomMood = moods[Math.floor(Math.random() * moods.length)];
                dayElement.title = `Mood: ${randomMood}`;
            }
            
            // Highlight today with premium effect
            if (day === today.getDate()) {
                dayElement.style.background = 'var(--gradient-primary)';
                dayElement.style.color = '#ffffff';
                dayElement.style.fontWeight = 'bold';
                dayElement.style.boxShadow = '0 0 15px rgba(102, 126, 234, 0.6)';
            }
            
            // Add click handler for calendar days
            dayElement.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showNotification(`📅 Viewing mood data for day ${day}`, 'info');
            });
            
            calendar.appendChild(dayElement);
        }
    }

    // Enhanced Daily Quote
    generateDailyQuote() {
        const premiumQuotes = [
            "✨ You are stronger than you think, braver than you feel, and more loved than you know. Your premium journey starts now.",
            "🌟 Every small step forward is a victory worth celebrating. Premium growth happens in the present moment.",
            "💎 Your mental health is a priority. Your happiness is essential. Your self-care is a premium necessity.",
            "🚀 It's okay not to be okay. What matters is that you're here, you're trying, and you're growing.",
            "⭐ You have been assigned this mountain to show others it can be moved. Your premium strength inspires.",
            "🌈 Your current situation is not your final destination. The best premium version of yourself is yet to come.",
            "🧘 Healing is not a race. Take your time and be gentle with yourself. Premium progress takes patience.",
            "💝 You are worthy of love and kindness, especially from yourself. Embrace your premium worth.",
            "🔥 Growth begins at the end of your comfort zone. Your premium transformation starts with courage.",
            "✨ You don't have to be perfect, you just have to be authentic. Your premium truth is powerful."
        ];
        
        const today = new Date();
        const quoteIndex = today.getDate() % premiumQuotes.length;
        const quoteElement = document.getElementById('daily-quote');
        
        if (quoteElement) {
            quoteElement.textContent = premiumQuotes[quoteIndex];
            quoteElement.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
        }
    }
}

// Initialize the premium app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new MindMantraApp();
    
    // Add premium interactive polish
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Enhanced card hover effects
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.15), 0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.1)';
        });
    });
    
    console.log('✨ MindMantra Premium Dark Theme loaded successfully! 🌟');
});