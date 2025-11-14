# MindMantra - Complete CSS Code

Save this as `style.css` in your folder:

```css
/* CSS Variables */
:root {
  --color-primary: #4f46e5;
  --color-secondary: #06b6d4;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --color-surface: #ffffff;
  --color-surface-alt: #f8fafc;
  --color-text: #1e293b;
  --color-text-secondary: #64748b;
  --color-border: #e2e8f0;
  --color-border-focus: var(--color-primary);
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --border-radius: 8px;
  --transition: all 0.3s ease;
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--color-background);
  color: var(--color-text);
  line-height: 1.6;
  min-height: 100vh;
}

/* Header Styles */
.header {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: var(--shadow-sm);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo h1 {
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.logo p {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  background: var(--color-surface-alt);
  cursor: pointer;
  transition: var(--transition);
}

.theme-toggle:hover {
  background: var(--color-border);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

/* Layout */
.app-container {
  display: flex;
  margin-top: 70px;
  min-height: calc(100vh - 70px);
}

/* Sidebar Navigation */
.sidebar {
  width: 280px;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  padding: 2rem 0;
  position: fixed;
  height: calc(100vh - 70px);
  overflow-y: auto;
}

.nav-menu {
  list-style: none;
  padding: 0 1rem;
}

.nav-item {
  margin-bottom: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border: none;
  background: transparent;
  color: var(--color-text);
  text-decoration: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.9rem;
  width: 100%;
  text-align: left;
}

.nav-link:hover {
  background: var(--color-surface-alt);
  color: var(--color-primary);
}

.nav-link.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
}

.nav-icon {
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
}

/* Main Content */
.main-content {
  flex: 1;
  margin-left: 280px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.content-section {
  display: none;
  background: var(--color-surface);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-lg);
}

.content-section.active {
  display: block;
}

.content-section h2 {
  color: var(--color-text);
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

/* Dashboard Styles */
.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.welcome-card, .quest-card {
  background: var(--color-surface-alt);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.welcome-card h3 {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.stats-row {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-emoji {
  font-size: 2rem;
}

.stat-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

.daily-affirmation {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin-top: 1.5rem;
}

.daily-affirmation h4 {
  margin-bottom: 0.5rem;
}

/* Mood Check-in Styles */
.mood-selector {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.mood-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 2px solid var(--color-border);
  background: var(--color-surface);
  border-radius: 12px;
  cursor: pointer;
  transition: var(--transition);
  min-width: 100px;
}

.mood-btn:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.mood-btn.selected {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: white;
}

.mood-emoji {
  font-size: 2rem;
}

.mood-label {
  font-weight: 600;
  font-size: 0.875rem;
}

.mood-feedback {
  background: var(--color-surface-alt);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--color-success);
  margin-top: 1rem;
}

/* CBT Tools */
.cbt-tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.tool-card {
  background: var(--color-surface-alt);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  text-align: center;
}

.tool-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.tool-card p {
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

/* Chat Interface */
.chat-container {
  max-width: 800px;
  margin: 0 auto;
}

.chat-header {
  background: var(--color-surface-alt);
  padding: 1.5rem;
  border-radius: 12px 12px 0 0;
  border-bottom: 1px solid var(--color-border);
}

.chat-messages {
  background: var(--color-surface);
  height: 400px;
  overflow-y: auto;
  padding: 1rem;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
}

.message {
  margin-bottom: 1rem;
}

.message-content {
  background: var(--color-surface-alt);
  padding: 1rem;
  border-radius: 12px;
  max-width: 70%;
}

.ai-message .message-content {
  background: var(--color-primary);
  color: white;
}

.chat-input {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--color-surface-alt);
  border-radius: 0 0 12px 12px;
  border: 1px solid var(--color-border);
}

.chat-input input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  outline: none;
}

.chat-input input:focus {
  border-color: var(--color-primary);
}

/* Meditation */
.meditation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.meditation-card {
  background: var(--color-surface-alt);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.meditation-card select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  margin: 1rem 0;
  outline: none;
}

/* Mental Fitness */
.fitness-skills {
  display: grid;
  gap: 1.5rem;
}

.skill-card {
  background: var(--color-surface-alt);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  transition: width 0.3s ease;
}

/* Progress Dashboard */
.progress-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.progress-card {
  background: var(--color-surface-alt);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.chart-placeholder {
  background: var(--color-border);
  height: 200px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  margin-top: 1rem;
}

/* Resources */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.resource-card {
  background: var(--color-surface-alt);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

/* LOGIN & CERTIFICATION SECTION */
.login-cert-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.login-section, .cert-section {
  background: var(--color-surface-alt);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}

.login-section h3, .cert-section h3 {
  margin-bottom: 1.5rem;
  color: var(--color-text);
  font-weight: 600;
  font-size: 1.25rem;
}

.login-section form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-section label {
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.login-section input, .login-section select {
  padding: 0.75rem;
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  background: var(--color-surface);
}

.login-section input:focus, .login-section select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.signup-link {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.signup-link a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

.signup-link a:hover {
  text-decoration: underline;
}

.cert-section p {
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.cert-benefits ul {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.cert-benefits li {
  padding: 0.75rem 0;
  color: var(--color-text);
  font-weight: 500;
  border-bottom: 1px solid var(--color-border);
}

.cert-benefits li:last-child {
  border-bottom: none;
}

.cert-section button {
  margin: 0.5rem 0.5rem 0.5rem 0;
}

/* Buttons */
.btn--primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn--secondary {
  background: linear-gradient(135deg, #ff6b6b, #ffa726);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
}

.btn--secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.3);
}

.btn--outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
}

.btn--outline:hover {
  background: var(--color-primary);
  color: white;
}

.btn.small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .sidebar {
    width: 240px;
  }
  
  .main-content {
    margin-left: 240px;
  }
}

@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: auto;
    position: static;
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .login-cert-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .mood-selector {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .stats-row {
    flex-wrap: wrap;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 1rem;
  }
  
  .content-section {
    padding: 1.5rem;
  }
  
  .login-section, .cert-section {
    padding: 1.5rem;
  }
}
```