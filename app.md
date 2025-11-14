# MindMantra - Complete JavaScript Code

Save this as `app.js` in your folder:

```javascript
// MindMantra App JavaScript
class MindMantraApp {
    constructor() {
        this.currentUser = null;
        this.userStats = {
            level: 12,
            xp: 2350,
            streak: 7,
            completedQuests: 0
        };
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupAllFeatures();
            });
        } else {
            this.setupAllFeatures();
        }
    }

    setupAllFeatures() {
        console.log('Setting up MindMantra features...');
        this.setupNavigation();
        this.setupMoodCheckin();
        this.setupChatInterface();
        this.setupMeditationTimer();
        this.setupLoginForm();
        this.setupCertifications();
        this.setupGamification();
        this.setupThemeToggle();
        this.generateDailyQuote();
        console.log('All features initialized successfully');
    }

    // Navigation System
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const contentSections = document.querySelectorAll('.content-section');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
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
                    
                    // Scroll to top of content
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // Mood Check-in System
    setupMoodCheckin() {
        const moodButtons = document.querySelectorAll('.mood-btn');
        const moodFeedback = document.getElementById('mood-feedback');

        const moodResponses = {
            great: "Fantastic! You're radiating positive energy today! ✨",
            good: "Great to hear you're doing well! Keep it up! 😊",
            okay: "It's okay to have neutral days. Every day is a fresh start! 💚",
            low: "I'm here to support you. Would you like to try a quick breathing exercise? 🤗",
            struggling: "I'm sorry you're having a tough time. Remember, you're stronger than you think. Let's find some resources to help. 💙"
        };

        moodButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Remove selected class from all buttons
                moodButtons.forEach(btn => btn.classList.remove('selected'));
                
                // Add selected class to clicked button
                button.classList.add('selected');
                
                // Get mood and show feedback
                const mood = button.dataset.mood;
                if (moodFeedback) {
                    moodFeedback.innerHTML = `<p>${moodResponses[mood]}</p>`;
                    moodFeedback.style.display = 'block';
                    
                    // Store mood in local storage
                    this.logMood(mood);
                }
                
                // Show appropriate recommendations
                this.showMoodRecommendations(mood);
            });
        });
    }

    logMood(mood) {
        const today = new Date().toISOString().split('T')[0];
        const moodLog = JSON.parse(localStorage.getItem('moodLog') || '{}');
        moodLog[today] = mood;
        localStorage.setItem('moodLog', JSON.stringify(moodLog));
        console.log('Mood logged:', mood, 'for', today);
    }

    showMoodRecommendations(mood) {
        const recommendations = {
            great: ['Continue your meditation streak!', 'Share positivity with a friend', 'Try a challenging CBT exercise'],
            good: ['Maintain your routine', 'Practice gratitude', 'Help someone else today'],
            okay: ['Try a mindfulness exercise', 'Take a nature walk', 'Journal your thoughts'],
            low: ['Start with 3 deep breaths', 'Listen to calming music', 'Reach out to a friend'],
            struggling: ['Contact support resources', 'Try immediate coping techniques', 'Consider professional help']
        };

        // You could display these recommendations in the UI
        console.log('Recommendations for', mood, ':', recommendations[mood]);
    }

    // Chat Interface
    setupChatInterface() {
        const chatInput = document.getElementById('chatInput');
        const sendButton = document.querySelector('.chat-input button');

        if (chatInput && sendButton) {
            // Send message on button click
            sendButton.addEventListener('click', () => {
                this.sendMessage();
            });

            // Send message on Enter key
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
    }

    sendMessage() {
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');
        
        if (!chatInput || !chatMessages) return;

        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        this.addMessageToChat('user', message);
        chatInput.value = '';

        // Simulate AI response (in a real app, this would call an API)
        setTimeout(() => {
            const aiResponse = this.generateAIResponse(message);
            this.addMessageToChat('ai', aiResponse);
        }, 1000);
    }

    addMessageToChat(sender, text) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = text;
        
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    generateAIResponse(userMessage) {
        // Simple AI response simulation
        const responses = [
            "I understand how you're feeling. Can you tell me more about that?",
            "That sounds challenging. What coping strategies have you tried?",
            "Thank you for sharing that with me. How can I best support you right now?",
            "It's completely normal to feel that way. Would you like to explore this further?",
            "I'm here to listen. What would be most helpful for you today?"
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Meditation Timer (basic implementation)
    setupMeditationTimer() {
        // This is a placeholder for meditation timer functionality
        const meditationButtons = document.querySelectorAll('[data-meditation]');
        
        meditationButtons.forEach(button => {
            button.addEventListener('click', () => {
                const duration = button.dataset.meditation;
                this.startMeditation(duration);
            });
        });
    }

    startMeditation(duration) {
        this.showNotification(`Starting ${duration} meditation session...`, 'success');
        // In a real app, this would start a meditation timer with audio
    }

    // Login Form Setup
    setupLoginForm() {
        const loginForm = document.getElementById('loginForm');
        const signupLink = document.getElementById('signupLink');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const role = document.getElementById('userRole').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                // Simple validation
                if (!email || !password) {
                    this.showNotification('Please fill in all fields', 'error');
                    return;
                }

                if (!this.isValidEmail(email)) {
                    this.showNotification('Please enter a valid email address', 'error');
                    return;
                }

                // Simulate login
                this.simulateLogin(role, email);
            });
        }

        if (signupLink) {
            signupLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showNotification('Sign up feature coming soon!', 'info');
            });
        }
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    simulateLogin(role, email) {
        // Simulate login process
        this.showNotification('Logging in...', 'info');
        
        setTimeout(() => {
            this.currentUser = { role, email };
            this.showNotification(`Welcome ${role}! Login successful for ${email}`, 'success');
            
            // Update UI to show logged in state
            this.updateLoginState(role, email);
            
            // Store user session
            localStorage.setItem('userRole', role);
            localStorage.setItem('userEmail', email);
        }, 1500);
    }

    updateLoginState(role, email) {
        const userNameElement = document.querySelector('.user-name');
        if (userNameElement) {
            const firstName = email.split('@')[0];
            userNameElement.textContent = `Welcome, ${firstName} (${role})`;
        }

        // Update avatar with first letter of email
        const userAvatar = document.querySelector('.user-avatar');
        if (userAvatar) {
            userAvatar.textContent = email.charAt(0).toUpperCase();
        }
    }

    // Certifications Setup
    setupCertifications() {
        const coursesButton = document.getElementById('goToCourses');
        const certificatesButton = document.getElementById('viewCertificates');

        if (coursesButton) {
            coursesButton.addEventListener('click', () => {
                this.showCourses();
            });
        }

        if (certificatesButton) {
            certificatesButton.addEventListener('click', () => {
                this.showCertificates();
            });
        }
    }

    showCourses() {
        const courses = [
            'Mental Health First Aid - 4 hours',
            'CBT Fundamentals - 6 hours', 
            'Mindfulness Practitioner - 8 hours',
            'Crisis Intervention Basics - 3 hours'
        ];
        
        let courseList = 'Available Free Courses:\n\n';
        courses.forEach((course, index) => {
            courseList += `${index + 1}. ${course}\n`;
        });
        
        alert(courseList + '\nEnroll now to start learning!');
    }

    showCertificates() {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) {
            this.showNotification('Please log in to view your certificates', 'warning');
            return;
        }
        
        // Simulate showing user certificates
        alert('Your Certificates:\n\n📜 Mental Health Awareness (Completed)\n📜 Mindfulness Basics (In Progress)\n\nKeep learning to earn more certificates!');
    }

    // Gamification Features
    setupGamification() {
        this.updateUserStats();
        this.setupQuestSystem();
    }

    updateUserStats() {
        // Update any stat displays in the UI
        const elements = {
            level: document.querySelector('[data-stat="level"]'),
            xp: document.querySelector('[data-stat="xp"]'),
            streak: document.querySelector('[data-stat="streak"]')
        };

        Object.keys(elements).forEach(key => {
            const element = elements[key];
            if (element) {
                element.textContent = this.userStats[key];
            }
        });
    }

    setupQuestSystem() {
        // Quest completion functionality
        window.completeQuest = () => {
            this.completeQuest();
        };
    }

    completeQuest() {
        this.userStats.xp += 50;
        this.userStats.completedQuests += 1;
        
        this.showNotification('Quest completed! +50 XP', 'success');
        this.updateUserStats();
        
        // Check for level up
        if (this.userStats.xp >= this.userStats.level * 100) {
            this.levelUp();
        }
    }

    levelUp() {
        this.userStats.level += 1;
        this.userStats.xp = 0;
        this.showNotification(`Level up! You're now level ${this.userStats.level}! 🎉`, 'success');
        this.updateUserStats();
    }

    // Theme Toggle
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        this.applyTheme(currentTheme);
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
                this.applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }
    }

    applyTheme(theme) {
        document.body.dataset.theme = theme;
        const themeToggle = document.getElementById('themeToggle');
        
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
        
        // Update CSS custom properties for dark theme
        if (theme === 'dark') {
            document.documentElement.style.setProperty('--color-background', 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)');
            document.documentElement.style.setProperty('--color-surface', '#2d3748');
            document.documentElement.style.setProperty('--color-surface-alt', '#4a5568');
            document.documentElement.style.setProperty('--color-text', '#f7fafc');
            document.documentElement.style.setProperty('--color-text-secondary', '#cbd5e0');
            document.documentElement.style.setProperty('--color-border', '#4a5568');
        } else {
            // Reset to light theme values
            document.documentElement.style.removeProperty('--color-background');
            document.documentElement.style.removeProperty('--color-surface');
            document.documentElement.style.removeProperty('--color-surface-alt');
            document.documentElement.style.removeProperty('--color-text');
            document.documentElement.style.removeProperty('--color-text-secondary');
            document.documentElement.style.removeProperty('--color-border');
        }
    }

    // Daily Quote Generator
    generateDailyQuote() {
        const quotes = [
            "You are stronger than you think, braver than you feel, and more loved than you know.",
            "Every day is a new beginning. Take a deep breath and start again.",
            "The only way out is through. You've got this!",
            "Progress, not perfection. Every small step counts.",
            "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
            "It's okay to not be okay. It's not okay to stay that way.",
            "Healing is not linear, but every day you choose to heal is a victory.",
            "You are enough, exactly as you are, right now."
        ];
        
        const today = new Date().getDate();
        const todayQuote = quotes[today % quotes.length];
        
        const quoteElement = document.querySelector('.daily-affirmation p');
        if (quoteElement) {
            quoteElement.textContent = `"${todayQuote}"`;
        }
    }

    // Notification System
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#6366f1'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 2000;
            font-weight: 500;
            max-width: 300px;
            animation: slideIn 0.3s ease;
        `;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Utility Methods
    formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    getFromLocalStorage(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return defaultValue;
        }
    }
}

// Initialize the app when the page loads
let app;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new MindMantraApp();
    });
} else {
    app = new MindMantraApp();
}

// Make app globally available for debugging
window.app = app;
```