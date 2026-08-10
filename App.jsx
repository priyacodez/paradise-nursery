
/* App.css */

/* Main application container */
.App {
  min-height: 100vh;
  width: 100%;
  background-image: url("./assets/nursery-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Landing page */
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.25);
}

/* Main heading */
.landing-page h1 {
  font-size: 48px;
  color: white;
  margin-bottom: 15px;
}

/* Description */
.landing-page p {
  font-size: 20px;
  color: white;
  max-width: 600px;
  line-height: 1.6;
}

/* Shop button */
.shop-button {
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  background-color: #2e7d32;
  color: white;
  cursor: pointer;
}

.shop-button:hover {
  background-color: #1b5e20;
}

